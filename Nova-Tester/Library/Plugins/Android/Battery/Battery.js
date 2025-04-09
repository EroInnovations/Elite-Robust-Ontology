const BATTERY=(callback)=>{

    var battery=JSON.parse(Android.getBatteryLevel());

    callback(battery);
    
};

export{BATTERY};