const FULLMENUTEMPLATE=(ELEMENT,COLOR,WIDTH,POSITION,callback)=>{

    VIEW(ELEMENT,COLOR,WIDTH||'50%','100%','',(ELEMENTSES)=>{

        STYLED(ELEMENTSES,'display','block');

        HEADER(ELEMENTSES,' ',(ELEMENTS)=>{

            CONDITION(POSITION === 'right',()=>{

                STYLED(ELEMENTSES,'border-left','1px solid #cdcdcd');

                LEFTIMAGE(ELEMENTS,WHITECLOSEICON,'20px','20px','1rem','',(ELMS)=>{

                    STYLED(ELEMENTSES,'display','none');

                });

                RIGHTTEXT(ELEMENTS,'','Menu','','25px','0.5rem','',(ELE)=>{

                });

            },()=>{

                STYLED(ELEMENTSES,'border-right','1px solid #cdcdcd');

                LEFTTEXT(ELEMENTS,'','Menu','','25px','0.5rem','',(ELE)=>{

                });

                RIGHTIMAGE(ELEMENTS,WHITECLOSEICON,'20px','20px','1rem','',(ELMS)=>{

                    STYLED(ELEMENTSES,'display','none');

                });

            });

        });

        STYLED(ELEMENTSES,'position','absolute');
        STYLED(ELEMENTSES,'overflow','hidden');
        STYLED(ELEMENTSES,'top','0');
        STYLED(ELEMENTSES,POSITION,'0');

        VIEW(ELEMENTSES,'transparent','100%','auto','',(ELEMENTSE)=>{

            STYLED(ELEMENTSE,'position','absolute');
            STYLED(ELEMENTSE,'top','50px');
            STYLED(ELEMENTSE,'bottom','0');
            STYLED(ELEMENTSE,'overflow','hidden');
            STYLED(ELEMENTSE,'overflow-Y','auto');
            STYLED(ELEMENTSE,'border-top','1px solid #000000');

            callback(ELEMENTSE);

        });

    });

};

export{FULLMENUTEMPLATE};