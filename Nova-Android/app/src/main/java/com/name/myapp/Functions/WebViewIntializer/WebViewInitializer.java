package com.eroinnovations.qelmedistore;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Build;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class WebViewInitializer {

    @SuppressLint("SetJavaScriptEnabled")
    public static void initializeWebView(Activity activity, WebView webView) {

        // Make system UI adjustments based on the Android version
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            activity.getWindow().setDecorFitsSystemWindows(false);
            activity.getWindow().setStatusBarContrastEnforced(false);
        } else {
            activity.getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        }

        // Set WebSettings for WebView
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);  // Enable JavaScript
        webSettings.setBuiltInZoomControls(false);
        webSettings.setDisplayZoomControls(false);
        webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        webSettings.setDomStorageEnabled(true);  // Enable DOM storage (localStorage, sessionStorage)
        webSettings.setDatabaseEnabled(true);  // Enable Web SQL Database (optional)
        // Removed appCacheEnabled as it is deprecated

        // Allow file access and enable necessary settings for WebView
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setAllowFileAccess(true);
        webView.getSettings().setAllowContentAccess(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setLoadWithOverviewMode(true);
        webView.getSettings().setUseWideViewPort(true);
        webView.getSettings().setAllowFileAccessFromFileURLs(true);
        webView.getSettings().setAllowUniversalAccessFromFileURLs(true);
        webView.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        // Set WebViewClient to handle web content
        webView.setWebViewClient(new WebViewClient());

        // Set WebChromeClient to handle JavaScript dialogs (alert, confirm, prompt)
        webView.setWebChromeClient(new WebChromeClient() {

            @Override
            public boolean onJsAlert(WebView view, String url, String message, android.webkit.JsResult result) {
                // Handle alert dialog
                Toast.makeText(activity, message, Toast.LENGTH_SHORT).show();
                result.confirm();  // Confirm the alert
                return true;  // Return true to indicate you handled the alert
            }

            @Override
            public boolean onJsConfirm(WebView view, String url, String message, android.webkit.JsResult result) {
                // Handle confirm dialog
                Toast.makeText(activity, "Confirm: " + message, Toast.LENGTH_SHORT).show();
                result.confirm();  // Call result.confirm() to simulate the user pressing "OK"
                return true;  // Return true to indicate you handled the confirm
            }

            @Override
            public boolean onJsPrompt(WebView view, String url, String message, String defaultValue, android.webkit.JsPromptResult result) {
                // Handle prompt dialog
                result.confirm("Response from prompt: " + message);  // Returning a value to the prompt
                return true;  // Return true to indicate you handled the prompt
            }
        });
    }
}
