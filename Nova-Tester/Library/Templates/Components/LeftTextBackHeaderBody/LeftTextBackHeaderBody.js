const LEFTTEXTBACKHEADERBODY=(ELEMENT,Backcallback,WORD,COLOR,TextCallback,BodyCallBack)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,' ',(ELEMENTS)=>{

        LEFTIMAGE(ELEMENTS,WHITELEFTBACKICON,'20px','20px','0.5rem','',(ELEMS)=>{

            Backcallback();

        });

        RIGHTTEXT(ELEMENTS,'p',WORD,COLOR,'20px','0.5rem','',(ELEMS)=>{

            TextCallback();

        });

    });

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        STYLED(ELEMS,'top','50px');

        BodyCallBack(ELEMS);

    });

};

export{LEFTTEXTBACKHEADERBODY};