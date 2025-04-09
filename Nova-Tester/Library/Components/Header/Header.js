const HEADER=(ELEMENT,COLOR,callback)=>{

    const ELEMENT1=document.createElement("header");

    ELEMENT1.style.position='absolute';
    ELEMENT1.style.width='100%';
    ELEMENT1.style.height='50px';
    ELEMENT1.style.background=COLOR||'#cdcdcd';
    ELEMENT1.style.display='inline-flex';
    ELEMENT1.style.left='0';
    ELEMENT1.style.top='0';
    ELEMENT1.style.margin='auto';

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {


        document.querySelector("body").append(ELEMENT1);
        
    };

    callback(ELEMENT1);

};
export{HEADER};