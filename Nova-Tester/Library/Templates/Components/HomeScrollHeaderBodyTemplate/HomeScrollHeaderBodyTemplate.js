const HOMESCROLLHEADERTEMPLATE=(ELEMENT,HeaderColor,BodyColor,callback,HomeCallBack)=>{

    CLEAR(ELEMENT);

    FULLSCROLLVIEW(ELEMENT,BodyColor||'transparent',(ELEMS)=>{

        CLEAR(ELEMS);

        HEADER(ELEMS,HeaderColor,(ELEMIS)=>{

            STYLED(ELEMIS,'position','relative');

            callback(ELEMIS);
    
        });

        VIEW(ELEMS,'transparent','100%','100%','auto',(ELEMENTS)=>{

            HomeCallBack(ELEMENTS);

        });

    });

};

export{HOMESCROLLHEADERTEMPLATE};