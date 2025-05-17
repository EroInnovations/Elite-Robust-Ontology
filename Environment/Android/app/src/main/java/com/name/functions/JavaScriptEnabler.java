package com.elite.elgon_christian_union;

import android.webkit.WebSettings;
import android.webkit.WebView;

public class JavaScriptEnabler {
    public static void enable(WebView webView) {
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true); 
        webSettings.setDomStorageEnabled(true); 
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true); 
        webSettings.setAllowFileAccess(true); 
        webSettings.setSupportZoom(false);
    }
}
