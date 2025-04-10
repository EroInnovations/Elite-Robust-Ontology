package com.eroinnovations.app;

import android.app.Activity;
import android.view.View;

public class NavigationBarShower {
    private Activity mActivity;

    public NavigationBarShower(Activity activity) {
        mActivity = activity;
    }

    public void showNavigationBar() {
        mActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                View decorView = mActivity.getWindow().getDecorView();
                int uiOptions = View.SYSTEM_UI_FLAG_VISIBLE;
                decorView.setSystemUiVisibility(uiOptions);
            }
        });
    }
}
