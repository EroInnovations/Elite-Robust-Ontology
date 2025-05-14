package com.elite.community_rise_ventures;

import android.webkit.WebView;

public class WebViewLoader {
    public static void load(WebView webView, String url) {
        webView.loadUrl(url);
    }

    public static void loadFromAssets(WebView webView, String assetFileName) {
        webView.loadUrl("file:///android_asset/" + assetFileName);
    }
}