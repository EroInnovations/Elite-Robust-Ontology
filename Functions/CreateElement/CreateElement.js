const CREATEELEMENT=(ELEMENT,TYPE,callback)=>{

    const ELEMENT1=document.createElement(TYPE);

    callback(ELEMENT1);

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector('body').append(ELEMENT1);
        
    };

};
export{CREATEELEMENT};