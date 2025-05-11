const BODY=()=>{

    const ELEMENT=document.querySelector('body');

    ELEMENT.style.width='100%';
    ELEMENT.style.height='100%';
    ELEMENT.style.textAlign='center';
    ELEMENT.style.margin='0';
    ELEMENT.style.padding='0';
    ELEMENT.style.listStyle='none';
    ELEMENT.style.textDecoration='none';
    ELEMENT.style.fontFamily='sans-serif,Camberia';

    if (localStorage.getItem('Environment') === 'Web'||'Development' ) {

        ELEMENT.style.overflowY='auto';
        ELEMENT.style.overflowX='hidden';
        ELEMENT.style.position='relative';
        
    }else{

        ELEMENT.style.overflow='hidden';
        ELEMENT.style.position='fixed';
        
    };
 
};

export{BODY};