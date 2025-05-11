const APPMODE = (COLOR) => {
    const body = document.querySelector("body");

    body.style.background = COLOR || '#cdcdcd';

    if (localStorage.getItem('Environment') === 'Production' ) {

       // changeWebViewBackground(COLOR);
        
    };
    
};

export { APPMODE };