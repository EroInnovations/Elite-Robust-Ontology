const FULLSCROLLVIEW=(ELEMENT,COLOR,callback)=>{

    const ELEMENT1=document.createElement('div');

    ELEMENT1.style.position='fixed';
    ELEMENT1.style.width='100%';
    ELEMENT1.style.height='auto';
    ELEMENT1.style.overflow='hidden';
    ELEMENT1.style.overflowY='auto';
    ELEMENT1.style.display='block';
    ELEMENT1.style.background=COLOR||'#cdcdcd';
    ELEMENT1.style.textAlign='center';
    ELEMENT1.style.margin='auto';
    ELEMENT1.style.left='0';
    ELEMENT1.style.top='0';
    ELEMENT1.style.bottom='0';

    if (ELEMENT) {
        
        ELEMENT.append(ELEMENT1);

    } else {

        document.querySelector("body").append(ELEMENT1);
        
    }

    callback(ELEMENT1);

};
export{FULLSCROLLVIEW};