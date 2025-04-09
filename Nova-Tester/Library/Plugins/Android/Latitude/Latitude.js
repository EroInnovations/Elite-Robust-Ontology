const LATITUDE=(callback)=>{

    var ME = Android.getLatitude();
    
    callback(ME);

};

export{LATITUDE};