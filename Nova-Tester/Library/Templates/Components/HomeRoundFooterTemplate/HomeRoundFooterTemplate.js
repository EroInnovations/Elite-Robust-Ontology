const HOMEROUNDFOOTERTEMPLATE=(ELEMENT,FooterColor,HomeCallBack,FooterCallBack)=>{

    CLEAR(ELEMENT);

    FULLSCROLLVIEW(ELEMENT,'transparent',(ELEMS)=>{

        HomeCallBack(ELEMS);

    });

    ROUNDFOOTER(ELEMENT,FooterColor,'','50px','50px',(ELEMS)=>{

        STYLED(ELEMS,'border','1px solid #cdcdcd20');

        FooterCallBack(ELEMS);

    });

};

export{HOMEROUNDFOOTERTEMPLATE};