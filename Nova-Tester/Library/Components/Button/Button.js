const BUTTON=(ELEMENT,WIDTH,HEIGHT,BGCOLOR,COLOR,TEXT,MARGIN,callback)=>{

    const ELEMENT1=document.createElement('button');

    ELEMENT1.style.width=WIDTH||'95%';
    ELEMENT1.style.height=HEIGHT||'50px';
    ELEMENT1.style.background=BGCOLOR||'#cdcdcd';
    ELEMENT1.style.left='0';
    ELEMENT1.style.color=COLOR||'#cdcdcd';
    ELEMENT1.style.borderRadius='10px';
    ELEMENT1.style.border='none';
    ELEMENT1.style.margin=MARGIN||'auto';

    ELEMENT1.innerHTML=TEXT||'Your Text';

    if (ELEMENT) {
        
        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    };

    ELEMENT1.addEventListener("click",()=>{

        callback(ELEMENT1);

    });

};
export{BUTTON};