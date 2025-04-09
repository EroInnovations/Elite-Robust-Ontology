const FOOTER=(ELEMENT,COLOR,WIDTH,HEIGHT,callback)=>{

    const ELEMENT1=document.createElement("footer");

    ELEMENT1.style.position='absolute';
    ELEMENT1.style.width=WIDTH||'100%';
    ELEMENT1.style.height=HEIGHT||'50px';
    ELEMENT1.style.background=COLOR||'#cdcdcd';
    ELEMENT1.style.display='inline-flex';
    ELEMENT1.style.left='0';
    ELEMENT1.style.bottom='0';


    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {


        document.querySelector("body").append(ELEMENT1);
        
    };

    callback(ELEMENT1);

};
export{FOOTER};