const BATTERY=(callback)=>{var batteryStatus = Android.getBatteryStatus();callback(batteryStatus);};
const VIBRATION=(TIME)=>{if (localStorage.getItem('Environment') === 'Production' ) {Android.vibrate(TIME||500);};};
const NOTIFICATION=(TITLE,MESSAGE)=>{Android.showNotification(TITLE,MESSAGE);};
