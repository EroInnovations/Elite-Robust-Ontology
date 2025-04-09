const TEXTAREA=(ELEMENT,TYPE,COLOR,HEIGHT,PLACEHOLDER,callback)=>{

    const ELEMENTS=document.createElement("textarea");
 
    ELEMENTS.style.width='95%';
    ELEMENTS.style.height=HEIGHT||'100px';
    ELEMENTS.style.border='1px solid'+COLOR||'cdcdcd';
    ELEMENTS.style.background='transparent';
    ELEMENTS.style.outline='none';
    ELEMENTS.style.borderRadius='5px';
    ELEMENTS.style.color=COLOR||'#cdcdcd';
    ELEMENTS.style.marginTop='1%';
    ELEMENTS.style.marginBottom='1%';

    ELEMENTS.maxLength=49000;
    ELEMENTS.type=TYPE||'text';
    ELEMENTS.placeholder=PLACEHOLDER||'Your Text';
    ELEMENTS.autocomplete='off';

    const style = document.createElement("style");
    style.innerHTML = `
        textarea::placeholder {
            color: ${COLOR || '#cdcdcd'};
        }
    `;
    document.head.appendChild(style);
 
    if (ELEMENT) {
 
        ELEMENT.append(ELEMENTS);
 
    } else {
 
        document.querySelector("body").append(ELEMENTS);
 
    };
 
    ELEMENTS.addEventListener("input",()=>{
 
        callback(ELEMENTS.value);
 
    });
 
};
export{TEXTAREA};