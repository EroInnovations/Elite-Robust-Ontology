const RIGHTTEXTBACKHEADERBODY=(ELEMENT,Backcallback,WORD,COLOR,TextCallback,BodyCallBack)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,' ',(ELEMENTS)=>{

        LEFTTEXT(ELEMENTS,'p',WORD,COLOR,'20px','0.5rem','',(ELEMS)=>{

            TextCallback();

        });

        RIGHTIMAGE(ELEMENTS,WHITENEXTICON,'20px','20px','0.5rem','',(ELEMS)=>{
           
            Backcallback();

        });

    });

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        STYLED(ELEMS,'top','50px');

        BodyCallBack(ELEMS);

    });

};

export{RIGHTTEXTBACKHEADERBODY};