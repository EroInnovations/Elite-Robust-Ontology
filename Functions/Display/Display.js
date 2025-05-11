const DISPLAY=(ELEMENT,DATA)=>{

    if (ELEMENT) {

        ELEMENT.innerHTML=DATA;
        
    } else {

        document.querySelector("body").innerHTML=DATA;
        
    };

};

export{DISPLAY};