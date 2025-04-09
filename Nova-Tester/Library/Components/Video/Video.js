const VIDEO=(ELEMENTS,SOURCE,callback)=>{

    const ELEMENT=document.createElement("video");

    ELEMENT.style.width='97%';
    ELEMENT.style.height='50%';
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
export{VIDEO};