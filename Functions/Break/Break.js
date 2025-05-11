const BREAK=(ELEMENT)=>{

    let ELEMENT1=document.createElement('br');

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {
        
        document.querySelector("body").append(ELEMENT1);

    };

};

export{BREAK};