const OPERATINGSYSTEM = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let os = "Unknown OS";
  
    if (/windows phone/i.test(userAgent)) os = "Windows Phone";
    else if (/win/i.test(userAgent)) os = "Windows";
    else if (/android/i.test(userAgent)) os = "Android";
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) os = "iOS";
    else if (/Macintosh/i.test(userAgent)) os = "MacOS";
    else if (/Linux/i.test(userAgent)) os = "Linux";
  
    // Store the detected OS in localStorage
    localStorage.setItem("OperatingSystem", os);
  
    return os;
};
  
export { OPERATINGSYSTEM };
  