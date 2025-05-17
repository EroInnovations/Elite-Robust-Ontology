package com.elite.elgon_christian_union;

import android.webkit.WebView;

public class WebViewBackHandler {
    public static boolean canGoBack(WebView webView) {
        return webView != null && webView.canGoBack();
    }
}
