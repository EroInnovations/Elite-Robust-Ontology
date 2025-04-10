package com.eroinnovations.app;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Environment;
import android.widget.Toast;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import android.provider.Settings;

public class PermissionManager {

    public static final int PERMISSION_REQUEST_CODE = 100;
    public static final int MANAGE_EXTERNAL_STORAGE_REQUEST_CODE = 101;

    // Checks if the app has Storage permission (for Android versions below Android 10)
    public static boolean hasStoragePermission(Activity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            return true; // For Android 10 (API 29) and above, Scoped Storage is used, and WRITE_EXTERNAL_STORAGE permission is not needed
        }

        int permission = ContextCompat.checkSelfPermission(activity, android.Manifest.permission.WRITE_EXTERNAL_STORAGE);
        return permission == PackageManager.PERMISSION_GRANTED;
    }

    // Checks if the app has MANAGE_EXTERNAL_STORAGE permission (Android 11 and above)
    public static boolean hasManageExternalStoragePermission() {
        return Build.VERSION.SDK_INT >= Build.VERSION_CODES.R && Environment.isExternalStorageManager();
    }

    // Requests Storage permission (for Android versions below Android 10)
    public static void requestStoragePermission(Activity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            return; // No need for WRITE_EXTERNAL_STORAGE permission in Android 10 and above (Scoped Storage)
        }

        ActivityCompat.requestPermissions(activity,
                new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE},
                PERMISSION_REQUEST_CODE);
    }

    // Requests MANAGE_EXTERNAL_STORAGE permission (for Android 11 and above)
    public static void requestManageExternalStoragePermission(Activity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            if (!hasManageExternalStoragePermission()) {
                // Request permission to access all files
                Intent intent = new Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION);
                activity.startActivityForResult(intent, MANAGE_EXTERNAL_STORAGE_REQUEST_CODE);
            } else {
                Toast.makeText(activity, "Already have full access to storage.", Toast.LENGTH_SHORT).show();
            }
        }
    }

    // Handles the result of permission requests
    public static void handlePermissionsResult(Activity activity, int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == PERMISSION_REQUEST_CODE) {
            for (int i = 0; i < permissions.length; i++) {
                String permission = permissions[i];
                int result = grantResults[i];

                if (android.Manifest.permission.WRITE_EXTERNAL_STORAGE.equals(permission)) {
                    if (result == PackageManager.PERMISSION_GRANTED) {
                        Toast.makeText(activity, "Storage permission granted!", Toast.LENGTH_SHORT).show();
                    } else {
                        Toast.makeText(activity, "Storage permission denied.", Toast.LENGTH_SHORT).show();
                    }
                }
            }
        } else if (requestCode == MANAGE_EXTERNAL_STORAGE_REQUEST_CODE) {
            if (hasManageExternalStoragePermission()) {
                Toast.makeText(activity, "Full storage access granted.", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(activity, "Full storage access denied.", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
