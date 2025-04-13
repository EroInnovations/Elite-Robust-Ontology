const DISPLAY=(ELEMENT,DATA)=>{

    const Body=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.innerHTML=DATA;
        
    } else {
        
        Body.innerHTML=DATA;

    };

};