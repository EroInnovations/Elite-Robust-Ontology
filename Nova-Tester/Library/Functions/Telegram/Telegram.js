const TELEGRAM=(NAME)=>{

    var telegramLink='https://t.me/'+encodeURIComponent(NAME);
    
    window.open(telegramLink);

};

export{TELEGRAM};