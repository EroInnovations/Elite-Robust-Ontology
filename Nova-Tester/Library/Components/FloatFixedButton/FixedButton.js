const FLOATFIXEDBUTTON=(ELEMENT,COLOR,callback)=>{

    const ELEMENT1=document.createElement("div");

    ELEMENT1.style.position='fixed';
    ELEMENT1.style.background=COLOR||'#000';
    ELEMENT1.style.width='50px';
    ELEMENT1.style.height='50px';
    ELEMENT1.style.display='inline-flex';
    ELEMENT1.style.bottom='5%';
    ELEMENT1.style.right='5%';
    ELEMENT1.style.borderRadius='10px';

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    }

    callback(ELEMENT1);

};
export{FLOATFIXEDBUTTON}