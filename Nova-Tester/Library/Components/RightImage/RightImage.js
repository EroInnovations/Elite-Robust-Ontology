const RIGHTIMAGE=(ELEMENT,SOURCE,WIDTH,HEIGHT,RIGHT,MARGIN,callback)=>{

    const ELEMENT1=document.createElement('img');

    ELEMENT1.style.width=WIDTH||'95%';
    ELEMENT1.style.height=HEIGHT||'95%';
    ELEMENT1.style.margin=MARGIN||'auto';
    ELEMENT1.style.marginRight=RIGHT||'1%';

    ELEMENT1.src=SOURCE;

    if (ELEMENT) {
        
       ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector("body").append(ELEMENT1);
        
    }

    ELEMENT1.addEventListener('click',()=>{

        callback(ELEMENT1);

    });

};
export{RIGHTIMAGE};