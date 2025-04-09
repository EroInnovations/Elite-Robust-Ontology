const NEWSUPDATER=()=>{

    DATABASESAVER(LINk,'CommunityRiseNews','CommunityRiseNews','CommunityRiseNews',(returneddata)=>{

        if (returneddata === false ) {

            DATABASEUPDATER(LINk,'CommunityRiseNews','CommunityRiseNews','CommunityRiseNews','CommunityRiseNews');
        
        };

    });

};

const NEWSPAGE=(ELEMENT)=>{

    CLEAR(ELEMENT);

    LOADERPAGE(ELEMENT,(TS)=>{

        DATAGETTER('CommunityRiseNews','CommunityRiseNews',(data)=>{

            STYLED(TS,'display','none');

            VIEW(ELEMENT,'','','100%','auto',(ELEMENTS)=>{

                ICONED(ELEMENTS,'',data.ImageOne||data.ImageTwo||data.ImageThree||data.ImageFour,'100%',(IMG)=>{

                });

                TIMER(data.Date,(time)=>{

                    TEXTED(ELEMENTS,'','','Posted:'+time,'20px','',(ELE)=>{

                        STYLED(ELE,'text-align','left');
                        STYLED(ELE,'margin-left','0.5rem');

                    });

                })

                TEXTED(ELEMENTS,'','',data.UserName,'20px','blue',(ELE)=>{

                    STYLED(ELE,'text-align','right');
                    STYLED(ELE,'margin-right','0.5rem');

                });

                TEXTED(ELEMENTS,'','',data.UserStory,'20px','#000000',(ELE)=>{

                    STYLED(ELE,'text-align','left');
                    STYLED(ELE,'margin-left','0.5rem');

                });

                TEXTED(ELEMENTS,'','','Scene Events','20px','orange',(ELE)=>{

                    STYLED(ELE,'text-align','left');
                    STYLED(ELE,'margin-left','0.5rem');

                });

                VIEW(ELEMENTS,'','','100%','auto',(ELEMES)=>{

                    STYLED(ELEMES,'display','inline-flex');
                    STYLED(ELEMES,'overflow-y','hidden');
                    STYLED(ELEMES,'overflow-X','auto');

                    if (data.ImageOne) {

                        ICONED(ELEMES,'',data.ImageOne,'90%',(IMG)=>{

                            STYLED(IMG,'margin-left','0.5rem');
                            STYLED(IMG,'margin-right','0.5rem');

                        });
                        
                    } 

                    if (data.ImageTwo) {

                        ICONED(ELEMES,'',data.ImageTwo,'100%',(IMG)=>{

                            STYLED(IMG,'margin-left','0.5rem');
                            STYLED(IMG,'margin-right','0.5rem');
    
                        });
                        
                    }

                    if (data.ImageThree) {

                        ICONED(ELEMES,'',data.ImageThree,'100%',(IMG)=>{

                            STYLED(IMG,'margin-left','0.5rem');
                            STYLED(IMG,'margin-right','0.5rem');
    
                        });
                        
                    };

                    if (data.ImageFour) {

                        ICONED(ELEMES,'',data.ImageFour,'100%',(IMG)=>{

                            STYLED(IMG,'margin-left','0.5rem');
                            STYLED(IMG,'margin-right','0.5rem');
    
                        });
                        
                    };

                });

                BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);

            });

        });

    });

};