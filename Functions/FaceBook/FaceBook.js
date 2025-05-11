const FACEBOOK=(NAME)=>{

    var facebookLink='https://www.facebook.com/'+encodeURIComponent(NAME);
    
    window.open(facebookLink);

};

export{FACEBOOK};