package com.eroinnovations.qelmedistore;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

public class WebAppInterface {
    private VibrationInterface vibrationInterface;
    private NotificationInterface notificationInterface;
    private NavigationBarHider navigationBarHider;
    private NavigationBarShower navigationBarShower;
    private ContactsInterface contactsInterface;
    private WebView webView;

    public WebAppInterface(Context context, WebView webView) {
        vibrationInterface = new VibrationInterface(context);
        notificationInterface = new NotificationInterface(context);
        navigationBarHider = new NavigationBarHider((MainActivity) context); 
        navigationBarShower = new NavigationBarShower((MainActivity) context); 
        contactsInterface = new ContactsInterface(context);
        this.webView = webView; 
    }

    @JavascriptInterface
    public void vibrate(long milliseconds) {
        vibrationInterface.vibrate(milliseconds);
    }

    @JavascriptInterface
    public void showNotification(String title, String message) {
        notificationInterface.showNotification(title, message);
    }

    @JavascriptInterface
    public void hideNavigationBar() {
        navigationBarHider.hideNavigationBar();
    }

    @JavascriptInterface
    public void showNavigationBar() {
        navigationBarShower.showNavigationBar();
    }

    @JavascriptInterface
    public String getContacts() {
        return contactsInterface.getContacts();
    }

    @JavascriptInterface
    public void reloadWebViewUsingJS() {
        if (webView != null) {
            webView.evaluateJavascript("window.location.reload();", null);
        }
    }
}
