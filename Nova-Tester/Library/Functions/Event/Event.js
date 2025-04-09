const EVENT=(ELEMENT)=>{

    if (ELEMENT) {

        ELEMENT.addEventListener(ACTION,callback);
        
    } else {

        document.querySelector("body").addEventListener(ACTION,callback);
        
    }

};

export{EVENT};