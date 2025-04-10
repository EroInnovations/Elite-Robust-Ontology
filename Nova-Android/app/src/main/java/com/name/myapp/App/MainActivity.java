package com.eroinnovations.app;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {

    private WebView webView;
    private WebChromeClientImpl webChromeClient;
    private BackPressHandler backPressHandler;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize WebView
        webView = findViewById(R.id.webview);
        WebViewInitializer.initializeWebView(this, webView);

        // Allow JavaScript execution
        webView.getSettings().setJavaScriptEnabled(true);

        // Set WebViewClient
        webView.setWebViewClient(new WebViewClientImpl());

        // Set WebChromeClient
        webChromeClient = new WebChromeClientImpl(this);
        webView.setWebChromeClient(webChromeClient);

        // Add JavaScript Interface
        webView.addJavascriptInterface(new WebAppInterface(this, webView), "Android");

        // Load HTML content from assets folder
        webView.loadUrl("file:///android_asset/index.html");

        // Handle back press
        backPressHandler = new BackPressHandler(this, webView);

        // Add download listener with permission handling
        webView.setDownloadListener(new DownloadHandler(this));
    }

    @Override
    public void onBackPressed() {
        backPressHandler.handleBackPressed();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        // Handle file chooser result
        if (requestCode == WebChromeClientImpl.FILE_CHOOSER_REQUEST_CODE) {
            webChromeClient.handleActivityResult(resultCode, data);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

        // Delegate permission result handling to PermissionManager
        PermissionManager.handlePermissionsResult(this, requestCode, permissions, grantResults);
    }
}
