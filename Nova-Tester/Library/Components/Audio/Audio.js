const AUDIO=(ELEMENTS,SOURCE,callback)=>{

    const ELEMENT=document.createElement("audio");

    ELEMENT.style.width='97%';
    ELEMENT.style.height='50px';
    ELEMENT.style.background='#fff';
    ELEMENT.style.margin='1%';
    ELEMENT.style.border='none';
    ELEMENT.style.outline='none';

    ELEMENT.controls='true';

    ELEMENT.src=SOURCE||'#';

    if (ELEMENTS) {

        ELEMENTS.append(ELEMENT);
        
    } else {
        
        document.querySelector("body").append(ELEMENT);

    };

    callback(ELEMENT);

};
export{AUDIO};