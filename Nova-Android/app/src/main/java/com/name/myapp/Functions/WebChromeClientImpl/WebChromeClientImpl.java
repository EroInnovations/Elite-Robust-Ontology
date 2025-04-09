package com.eroinnovations.qelmedistore;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class WebChromeClientImpl extends WebChromeClient {

    public static final int FILE_CHOOSER_REQUEST_CODE = 100;
    public static final int CAMERA_PERMISSION_REQUEST_CODE = 101;

    private final Activity activity;
    private ValueCallback<Uri[]> filePathCallback;
    private Uri cameraImageUri;

    public WebChromeClientImpl(Activity activity) {
        this.activity = activity;
    }

    @Override
    public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
        this.filePathCallback = filePathCallback;

        // Check for camera permission before taking a picture
        if (ContextCompat.checkSelfPermission(activity, android.Manifest.permission.CAMERA) != android.content.pm.PackageManager.PERMISSION_GRANTED) {
            // Request camera permission if not granted
            ActivityCompat.requestPermissions(activity, new String[]{android.Manifest.permission.CAMERA}, CAMERA_PERMISSION_REQUEST_CODE);
            return false;
        } else {
            // Permission already granted, proceed with the intent
            startFileChooserIntent();
        }

        return true;
    }

    public void handleActivityResult(int resultCode, Intent data) {
        if (filePathCallback == null) return;

        Uri[] results = null;

        if (resultCode == Activity.RESULT_OK) {
            if (data == null) {
                // Camera capture
                if (cameraImageUri != null) {
                    results = new Uri[]{cameraImageUri};
                }
            } else {
                // File selection
                Uri dataUri = data.getData();
                if (dataUri != null) {
                    results = new Uri[]{dataUri};
                }
            }
        }

        filePathCallback.onReceiveValue(results);
        filePathCallback = null;
    }

    private File createImageFile() throws IOException {
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String imageFileName = "JPEG_" + timeStamp + "_";
        File storageDir = activity.getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        return File.createTempFile(imageFileName, ".jpg", storageDir);
    }

    private void startFileChooserIntent() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(activity.getPackageManager()) != null) {
            File photoFile = null;
            try {
                photoFile = createImageFile();
                cameraImageUri = FileProvider.getUriForFile(activity, activity.getPackageName() + ".fileprovider", photoFile);
                takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, cameraImageUri);
            } catch (IOException ex) {
                ex.printStackTrace();
                takePictureIntent = null;
            }
        }

        Intent contentSelectionIntent = new Intent(Intent.ACTION_GET_CONTENT);
        contentSelectionIntent.addCategory(Intent.CATEGORY_OPENABLE);
        contentSelectionIntent.setType("image/*");

        Intent[] intentArray = takePictureIntent != null ? new Intent[]{takePictureIntent} : new Intent[0];

        Intent chooserIntent = new Intent(Intent.ACTION_CHOOSER);
        chooserIntent.putExtra(Intent.EXTRA_INTENT, contentSelectionIntent);
        chooserIntent.putExtra(Intent.EXTRA_TITLE, "Select or take a photo");
        chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, intentArray);

        try {
            activity.startActivityForResult(chooserIntent, FILE_CHOOSER_REQUEST_CODE);
        } catch (ActivityNotFoundException e) {
            this.filePathCallback = null;
        }
    }

    // Handle the result of permission request
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == android.content.pm.PackageManager.PERMISSION_GRANTED) {
                // Permission granted, now proceed with taking the picture
                startFileChooserIntent();
            } else {
                // Permission denied, inform the user
                filePathCallback.onReceiveValue(null);
                filePathCallback = null;
            }
        }
    }
}