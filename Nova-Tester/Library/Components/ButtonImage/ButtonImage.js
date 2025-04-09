const BUTTONIMAGE=(ELEMENTS,COLOR,TEXTED,TCOLOR,SOURCE,HEIGHT,MARGIN,callback)=>{

    const ELEMENT1=document.createElement("div");

    ELEMENT1.style.position='relative';
    ELEMENT1.style.width='98%';
    ELEMENT1.style.height=HEIGHT||'50px';
    ELEMENT1.style.background=COLOR||'#000000';
    ELEMENT1.style.margin=MARGIN||'auto';
    ELEMENT1.style.borderRadius='5px';
    ELEMENT1.style.display='inline-flex';

    const IMAGER=document.createElement("img");

    IMAGER.style.position='relative';
    IMAGER.style.margin='auto';
    IMAGER.style.width='20px';
    IMAGER.style.height='20px';
    IMAGER.style.marginLeft='0.5rem';
    IMAGER.style.background='transparent';
    
    IMAGER.src=SOURCE;

    ELEMENT1.append(IMAGER);

    const TEXTER=document.createElement("p");

    TEXTER.style.position='relative';
    TEXTER.style.margin='auto';
    TEXTER.style.marginRight='1rem';
    TEXTER.style.color=TCOLOR||'#cdcdcd';

    TEXTER.innerHTML=TEXTED||'Your Text';

    ELEMENT1.append(TEXTER);

    if (ELEMENTS) {

        ELEMENTS.append(ELEMENT1);
        
    } else {

        document.querySelector('body').append(ELEMENT1);
        
    };

    ELEMENT1.addEventListener('click',()=>{

        callback(ELEMENT1);

    });

};

export{BUTTONIMAGE};