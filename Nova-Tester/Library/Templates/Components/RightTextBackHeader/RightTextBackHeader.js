const RIGHTTEXTBACKHEADER=(ELEMENT,Backcallback,WORD,COLOR,TextCallback)=>{

    HEADER(ELEMENT,' ',(ELEMENTS)=>{

        LEFTTEXT(ELEMENTS,'p',WORD,COLOR,'20px','0.5rem','',(ELEMS)=>{

            TextCallback();

        });

        RIGHTIMAGE(ELEMENTS,WHITENEXTICON,'20px','20px','0.5rem','',(ELEMS)=>{

            Backcallback();

        });

    });

};

export{RIGHTTEXTBACKHEADER};