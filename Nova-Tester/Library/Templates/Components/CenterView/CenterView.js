const CENTERVIEW=(ELEMENT,COLOR,callback)=>{

    VIEW(ELEMENT,COLOR||' ','80%','80%','5% auto',(ELEMENTS)=>{

        STYLED(ELEMENTS,'border','1px solid #333333');

        callback(ELEMENTS);

    });

};

export{CENTERVIEW};