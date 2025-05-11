const WHATSAPP=(NUMBER)=>{

    var whatsappLink='https://wa.me/'+encodeURIComponent(NUMBER);window.open(whatsappLink);

};

export{WHATSAPP};