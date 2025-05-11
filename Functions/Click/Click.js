const CLICK=(ELEMENT,callback)=>{

    ELEMENT.addEventListener("click",()=>{

        callback();

    });

};

export{CLICK};