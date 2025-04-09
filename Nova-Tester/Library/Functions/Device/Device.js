const DEVICE=(callback)=> {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth
        },
        online: navigator.onLine,
        memory: navigator.deviceMemory || 'Unknown',
        cores: navigator.hardwareConcurrency || 'Unknown'
    };
    
    if (typeof callback === 'function') {
        callback(deviceInfo);
    }
}

export{DEVICE}