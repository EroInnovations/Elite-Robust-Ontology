const ADD=(ELEMENT,DATA)=>{

    if (ELEMENT) {
        
        ELEMENT.append(DATA);

    } else {

        document.querySelector("body").append(DATA);
        
    };

};

export{ADD};