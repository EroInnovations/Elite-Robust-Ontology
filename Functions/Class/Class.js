const CLASS=(ELEMENT,NAME,callback)=>{

    ELEMENT.classList.add(NAME);

    callback(ELEMENT);

};

export{CLASS};