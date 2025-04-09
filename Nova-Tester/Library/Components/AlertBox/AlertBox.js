const ALERTBOX=(ELEMENT,MESSAGES)=>{

    const ELEMENT1=document.createElement('div');

    ELEMENT1.style.position='fixed';
    ELEMENT1.style.width='98%';
    ELEMENT1.style.height='100px';
    ELEMENT1.style.background='#cdcdcd';
    ELEMENT1.style.margin='auto';
    ELEMENT1.style.left='1%';
    ELEMENT1.style.top='45%';
    ELEMENT1.style.borderRadius='10px';
    ELEMENT1.style.display='inline-flex';

    const MESSAGE=document.createElement('h1');
    MESSAGE.style.position='absolute';
    MESSAGE.style.color='#000';
    MESSAGE.style.fontSize='25px';
    MESSAGE.style.top='-5px';
    MESSAGE.style.left='1%';

    MESSAGE.innerHTML='Alert';

    const MESSAGER=document.createElement('h1');
    MESSAGER.style.position='relative';
    MESSAGER.style.color='blue';
    MESSAGER.style.fontSize='18px';
    MESSAGER.style.margin='auto';
   
    MESSAGER.innerHTML=MESSAGES||'Your Message';

    ELEMENT1.append(MESSAGE);

    ELEMENT1.append(MESSAGER);

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1);
        
    } else {

        document.querySelector('body').append(ELEMENT1);
        
    }

    setTimeout(() => {

        ELEMENT1.style.display='none';
        
    }, 2000);

};
export{ALERTBOX}