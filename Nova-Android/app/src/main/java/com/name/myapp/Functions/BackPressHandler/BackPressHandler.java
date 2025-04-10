package com.eroinnovations.app;

import android.app.Activity;
import android.webkit.WebView;

public class BackPressHandler {

    private final Activity activity;
    private final WebView webView;

    public BackPressHandler(Activity activity, WebView webView) {
        this.activity = activity;
        this.webView = webView;
    }

    public void handleBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            activity.finish();
        }
    }
}
