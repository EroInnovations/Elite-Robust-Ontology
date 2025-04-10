package com.eroinnovations.app;

import android.app.Activity;
import android.app.DownloadManager;
import android.content.Context;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.webkit.CookieManager;
import android.webkit.DownloadListener;
import android.widget.Toast;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import java.io.File;

public class DownloadHandler implements DownloadListener {

    private static final int STORAGE_PERMISSION_REQUEST_CODE = 100;
    private final Activity activity;
    private String url;
    private String userAgent;
    private String contentDisposition;
    private String mimeType;

    public DownloadHandler(Activity activity) {
        this.activity = activity;
    }

    @Override
    public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimeType, long contentLength) {
        // Save the download parameters
        this.url = url;
        this.userAgent = userAgent;
        this.contentDisposition = contentDisposition;
        this.mimeType = mimeType;

        // Check if storage permission is granted (For Android versions below Android 10)
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            if (ContextCompat.checkSelfPermission(activity, android.Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                // Request storage permission if not granted
                ActivityCompat.requestPermissions(activity, new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE}, STORAGE_PERMISSION_REQUEST_CODE);
                return; // Stop and wait for permission result
            }
        }

        // For Android 11 (API 30) and above, check for manage external storage permission
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R && !PermissionManager.hasManageExternalStoragePermission()) {
            // Request MANAGE_EXTERNAL_STORAGE permission for Android 11 and above
            PermissionManager.requestManageExternalStoragePermission(activity);
            return; // Stop and wait for permission result
        }

        // Start download if permissions are granted
        startDownload();
    }

    // This method will initiate the download after permission is granted
    private void startDownload() {
        try {
            // Extract file name from contentDisposition
            String fileName = contentDisposition.replace("attachment; filename=", "").replace("\"", "");
            File downloadDir;

            // For Android 10 (API 29) and above, use Scoped Storage (direct access to downloads)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                // Use the app's private directory for media storage
                downloadDir = new File(activity.getExternalFilesDir(Environment.DIRECTORY_PICTURES), "downloaded_files");

                // Ensure the directory exists
                if (!downloadDir.exists() && !downloadDir.mkdirs()) {
                    Toast.makeText(activity, "Failed to create download directory.", Toast.LENGTH_SHORT).show();
                    return; // Stop download if directory creation fails
                }

            } else {
                // For Android versions below Android 10, use the public download directory
                downloadDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
            }

            // Create download request
            DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
            request.setMimeType(mimeType);
            String cookies = CookieManager.getInstance().getCookie(url);
            request.addRequestHeader("cookie", cookies);
            request.addRequestHeader("User-Agent", userAgent);

            // Set file download details
            request.setTitle(fileName);
            request.setDescription("Downloading file...");
            request.allowScanningByMediaScanner();
            request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);

            // Set destination for the file (Scoped Storage for Android 10+)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                Uri destinationUri = Uri.fromFile(downloadDir);
                request.setDestinationUri(destinationUri);
            } else {
                // For Android 9 (API 28) and below, directly use external storage
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);
            }

            // Initialize DownloadManager and start the download
            DownloadManager dm = (DownloadManager) activity.getSystemService(Context.DOWNLOAD_SERVICE);
            if (dm != null) {
                dm.enqueue(request);
                Toast.makeText(activity, "Downloading File...", Toast.LENGTH_SHORT).show();
            }

        } catch (Exception e) {
            // Catch any unexpected exception and show error
            Toast.makeText(activity, "Download failed: " + e.getMessage(), Toast.LENGTH_LONG).show();
            e.printStackTrace();
        }
    }

    // Handle permission results for storage requests
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == STORAGE_PERMISSION_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Permission granted, start download
                startDownload();
            } else {
                Toast.makeText(activity, "Storage permission denied", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
