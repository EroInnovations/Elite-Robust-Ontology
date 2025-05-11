const SITECLOSE=()=>{

    if (localStorage.getItem('Environment') === 'Production'||localStorage.getItem('OperatingSystem') === 'Android' ) {
        
        Android.reloadApp();

    } else {

        window.close();
        
    };
  
};
export{SITECLOSE}