const WEBANDROIDHOMESTORE=()=>{

    CLEAR('');

    SCROLLVIEW('','','',(ELEMENT)=>{

        TEXTED(ELEMENT,'h1','','E-corp Store','16px','',(ELEMENTS)=>{

            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','10%');

        });

        ICONED(ELEMENT,'',WHITEMENUICON,'25px',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','absolute');
            STYLED(ELEMENTS,'right','3%');
            STYLED(ELEMENTS,'top','3%');

        });

        ICONED(ELEMENT,'',WHITEGRIDICON,'30px',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','absolute');
            STYLED(ELEMENTS,'left','1%');
            STYLED(ELEMENTS,'top','3%');

        });

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'25px',(ELEMENTS)=>{

            STYLED(ELEMENTS,'width','95%');
            STYLED(ELEMENTS,'height','50%');
            STYLED(ELEMENTS,'top','1%');

        });

        const MES=`Get The Latest Apps From Our E-corp Company Group and Save Your Self  Billion of Years in Finding The Perfect App <br><br>Get Started Today By Clicking On Download Now;
        
        `;

        TEXTED(ELEMENT,'p','',MES,'18px','',(ELEMENTS)=>{

            STYLED(ELEMENTS,'text-align','left');   
            STYLED(ELEMENTS,'padding','2%');

        });

        ROUNDBUTTON(ELEMENT,'','forestgreen','Download','','50%',()=>{

           const WEBS='https://drive.google.com/uc?export=download&id=1-O8NakhP7A8TX2Smkp9kgI4-DCqfY8D1';

           WEBSITE(WEBS);

        });

    });

};

const WEBDESKTOPSTORE=()=>{

    const SOFTLINK=`https://drive.google.com/uc?export=download&id=1FKJN2pwoCoQ2-uLMPBY55e1BPedtd_YW`;

    CLEAR('');

    SCROLLVIEW('','','',(ELEMENT)=>{

        ICONED(ELEMENT,'',WHITEGRIDICON,'25px',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','absolute');
            STYLED(ELEMENTS,'left','10px');
            STYLED(ELEMENTS,'top','10px');

        });

        TEXTED(ELEMENT,'h3','','E-corp Store','25px','forestgreen',(ELEMENTS)=>{
            STYLED(ELEMENTS,'position','absolute');
            STYLED(ELEMENTS,'left','50px');
            STYLED(ELEMENTS,'top','0px');
            STYLED(ELEMENTS,'margin-top','10px');
        });

        
        TEXTED(ELEMENT,'h3','','Download','25px','',(ELEMENTS)=>{
            STYLED(ELEMENTS,'position','absolute');
            STYLED(ELEMENTS,'right','50px');
            STYLED(ELEMENTS,'top','0px');
            STYLED(ELEMENTS,'border-radius','10px');
            STYLED(ELEMENTS,'padding','5px');
            STYLED(ELEMENTS,'margin-top','10px');
            STYLED(ELEMENTS,'background','forestgreen');

            EVENT(ELEMENTS,'click',()=>{

                WEBSITE(SOFTLINK);

            });

        });

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'30%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','absolute');
            STYLED(ELEMENTS,'left','10px');
            STYLED(ELEMENTS,'height','90%');
            STYLED(ELEMENTS,'top','50px');

        });
        
    });

};