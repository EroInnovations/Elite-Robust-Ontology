package com.eroinnovations.app;

import android.content.Intent;
import android.net.Uri;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewClientImpl extends WebViewClient {

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        String url = request.getUrl().toString();

        if (url.startsWith("mailto:")) {
            Intent intent = new Intent(Intent.ACTION_SENDTO);
            intent.setData(Uri.parse(url));
            try {
                view.getContext().startActivity(intent);
            } catch (Exception e) {
                view.loadUrl(url);
            }
            return true;

        } else if (url.startsWith("tel:")) {
            Intent intent = new Intent(Intent.ACTION_DIAL);
            intent.setData(Uri.parse(url));
            try {
                view.getContext().startActivity(intent);
            } catch (Exception e) {
                view.loadUrl(url);
            }
            return true;

        } else if (url.startsWith("sms:")) {
            Intent intent = new Intent(Intent.ACTION_SENDTO);
            intent.setData(Uri.parse(url));
            try {
                view.getContext().startActivity(intent);
            } catch (Exception e) {
                view.loadUrl(url);
            }
            return true;

        } else if (url.startsWith("market://")) {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            try {
                view.getContext().startActivity(intent);
            } catch (Exception e) {
                // Open in WebView as fallback
                view.loadUrl("https://play.google.com/store/apps/" + url.substring(11));
            }
            return true;

        } else if (url.startsWith("intent://")) {
            try {
                Intent intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
                if (intent != null && intent.resolveActivity(view.getContext().getPackageManager()) != null) {
                    view.getContext().startActivity(intent);
                } else {
                    // Fallback to opening in WebView
                    String fallbackUrl = intent.getStringExtra("browser_fallback_url");
                    if (fallbackUrl != null) {
                        view.loadUrl(fallbackUrl);
                    }
                }
            } catch (Exception e) {
                // If parsing fails, open as web URL
                view.loadUrl(url);
            }
            return true;

        } else if (url.startsWith("https://drive.google.com/") || url.startsWith("https://docs.google.com/")) {
            view.getContext().startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
            return true;

        } else if (url.contains("facebook.com") ||
                   url.contains("instagram.com") ||
                   url.contains("tiktok.com") ||
                   url.contains("twitter.com") ||
                   url.contains("youtube.com") ||
                   url.contains("wa.me") ||
                   url.contains("whatsapp://")) {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            if (intent.resolveActivity(view.getContext().getPackageManager()) != null) {
                view.getContext().startActivity(intent);
            } else {
                // Fallback: open in WebView
                view.loadUrl(url);
            }
            return true;

        } else if (url.startsWith("http://") || url.startsWith("https://")) {
            // Open normal web links inside the WebView
            view.loadUrl(url);
            return true;

        } else {
            // Fallback for unknown schemes
            try {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                if (intent.resolveActivity(view.getContext().getPackageManager()) != null) {
                    view.getContext().startActivity(intent);
                } else {
                    view.loadUrl(url);
                }
            } catch (Exception e) {
                view.loadUrl(url);
            }
            return true;
        }
    }
}
