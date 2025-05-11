const GMAIL=(EMAIL)=>{

    var mailtoLink='mailto:'+encodeURIComponent(EMAIL);window.open(mailtoLink);

};

export{GMAIL};