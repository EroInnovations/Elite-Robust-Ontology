const IFRAME=(ELEMENT,callback)=>{

    const ELEMENT1=document.createElement("iframe");
    ELEMENT1.style.width='100%';
    ELEMENT1.style.height='100%';
    ELEMENT1.style.overflow='auto';
    ELEMENT1.style.border='none';

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {
        
        document.querySelector("body").append(ELEMENT1);

    };

    callback(ELEMENT1);

};
export{IFRAME};