const HOMEAPPS=(ELEMENT,TYPE)=>{

    GETINDEXED('Store','Store',(data)=>{

        REDUX(data,(element)=>{

            REDUX(element.data,(Element)=>{

                CHECKER(Element.AppType === TYPE ,()=>{

                    VIEW(ELEMENT,(ELEMENTED)=>{

                        STYLED(ELEMENTED,'width','48%');
                        STYLED(ELEMENTED,'display','inline-table');
                        STYLED(ELEMENTED,'margin','auto');
                        STYLED(ELEMENTED,'margin-left','0.5%');
                        STYLED(ELEMENTED,'margin-right','0.5%');
                        STYLED(ELEMENTED,'margin-top','3%');
    
                        ICON(ELEMENTED,Element.AppImage,(ELEMENTEDS)=>{
    
                            STYLED(ELEMENTEDS,'width','100%');
                            STYLED(ELEMENTEDS,'height','80%');
                            
                        });
    
                        TEXT(ELEMENTED,'',Element.AppName,(ELEMENTEDS)=>{
    
                            STYLED(ELEMENTEDS,'text-align','right');
                            STYLED(ELEMENTEDS,'margin-right','5%');
                            STYLED(ELEMENTEDS,'margin-top','3%');
    
                        })
    
                        ICON(ELEMENTED,WHITESTARICON,(ELEMENTEDS)=>{
    
                            STYLED(ELEMENTEDS,'position','absolute');
                            STYLED(ELEMENTEDS,'bottom','9%');
                            STYLED(ELEMENTEDS,'left','2%');
                            
                        });
    
                        TEXT(ELEMENTED,'',Element.AppRatings,(ELEMENTEDS)=>{
    
                            STYLED(ELEMENTEDS,'position','absolute');
                            STYLED(ELEMENTEDS,'text-align','left');
                            STYLED(ELEMENTEDS,'bottom','8%');
                            STYLED(ELEMENTEDS,'left','20%');
                            STYLED(ELEMENTEDS,'font-size','25px');
                            STYLED(ELEMENTEDS,'color','forestgreen');
                        })
                       
                        if (Element.ID === 'acb46b20f5afbeb05aa453e' ) {
    
                            STYLED(ELEMENTED,'display','none');
                            
                        };
    
                        CLICKED(ELEMENTED,()=>{
    
                            JSONIFICATION(Element,(MyDaa)=>{
    
                                STORE('','AppDetails',MyDaa);
    
                                NAVIGATOR('Yes',APPPAGE,'ANDROIDHOMEPAGE');
        
                            });
    
                        });
    
                    });

                });

            });

        });

    });

};

const HOMEDESIGNAPPS=(ELEMENT)=>{

    GETINDEXED('StoreDesign','StoreDesign',(data)=>{

        REDUX(data,(element)=>{

            REDUX(element.data,(Elements)=>{

                if (Elements.Display === 'Single' ) {

                    VIEW(ELEMENT,(ELEMENTA)=>{

                        STYLED(ELEMENTA,'overflow','hidden');
                        
                        GETINDEXED('Store','Store',(data)=>{

                            REDUX(data,(element)=>{
                    
                                REDUX(element.data,(Element)=>{

                                    if (Elements.Section === Element.AppCatergory ) {
                                    
                                        CLEAR(ELEMENTA);

                                        ICON(ELEMENTA,Element.AppImage,(ELEMENTEDS)=>{
    
                                            STYLED(ELEMENTEDS,'width','100%');
                                            STYLED(ELEMENTEDS,'height','100%');
                                            
                                        });

                                        CLICKED(ELEMENTA,()=>{
                        
                                            JSONIFICATION(Element,(MyDaa)=>{
                    
                                                STORE('','AppDetails',MyDaa);
                    
                                                NAVIGATOR('Yes',APPPAGE,'ANDROIDHOMEPAGE');
                        
                                            });
                    
                                        });

                                    };
                    
                                });
                    
                            });
                    
                        });

                    });

                } else {

                    VIEW(ELEMENT,(ELEMENTA)=>{

                        STYLED(ELEMENTA,'overflow','hidden');
                        STYLED(ELEMENTA,'display','inline-flex');
                        STYLED(ELEMENTA,'overflowX','auto');

                        CLEAR(ELEMENTA);

                        TEXT(ELEMENTA,'',Elements.Title,(ELEMENTEDS)=>{

                            STYLED(ELEMENTEDS,'position','absolute');
                            STYLED(ELEMENTEDS,'text-align','left');
                            STYLED(ELEMENTEDS,'margin-left','2%');
                            STYLED(ELEMENTEDS,'margin-top','2%');
                
                        });

                        GETINDEXED('Store','Store',(data)=>{

                            REDUX(data,(element)=>{
                    
                                REDUX(element.data,(Element)=>{

                                    if (Elements.Section === Element.AppCatergory ) {
                                    
                                        VIEW(ELEMENTA,(ELE)=>{

                                            STYLED(ELE,'width','40%');
                                            STYLED(ELE,'height','80%');
                                            STYLED(ELE,'top','15%');
                                            STYLED(ELE,'flexShrink','0');
                                            STYLED(ELE,'margin-left','2%');
                                            STYLED(ELE,'margin-right','5%');
    
                                            ICON(ELE,Element.AppImage,(ELEMENTEDS)=>{
    
                                                STYLED(ELEMENTEDS,'width','100%');
                                                STYLED(ELEMENTEDS,'height','80%');
                                                
                                            });
                        
                                            TEXT(ELE,'',Element.AppName,(ELEMENTEDS)=>{
                        
                                                STYLED(ELEMENTEDS,'text-align','right');
                                                STYLED(ELEMENTEDS,'margin-right','1.5%');
                                                STYLED(ELEMENTEDS,'margin-top','5%');
                                                STYLED(ELEMENTEDS,'fontSize','16px');
                        
                                            });
                        
                                            ICON(ELE,WHITESTARICON,(ELEMENTEDS)=>{
                        
                                                STYLED(ELEMENTEDS,'position','absolute');
                                                STYLED(ELEMENTEDS,'bottom','5%');
                                                STYLED(ELEMENTEDS,'left','1%');
                                                
                                            });
                        
                                            TEXT(ELE,'',Element.AppRatings,(ELEMENTEDS)=>{
                        
                                                STYLED(ELEMENTEDS,'position','absolute');
                                                STYLED(ELEMENTEDS,'text-align','left');
                                                STYLED(ELEMENTEDS,'bottom','5%');
                                                STYLED(ELEMENTEDS,'left','25%');
                                                STYLED(ELEMENTEDS,'font-size','20px');
                                                STYLED(ELEMENTEDS,'color','forestgreen');
                                            });
                                           
                                            if (Element.ID === 'acb46b20f5afbeb05aa453e' ) {
                        
                                                STYLED(ELE,'display','none');
                                                
                                            };
                        
                                            CLICKED(ELE,()=>{
                        
                                                JSONIFICATION(Element,(MyDaa)=>{
                        
                                                    STORE('','AppDetails',MyDaa);
                        
                                                    NAVIGATOR('Yes',APPPAGE,'ANDROIDHOMEPAGE');
                            
                                                });
                        
                                            });
    
                                        });

                                    };
                    
                                });
                    
                            });
                    
                        });

                    });  
                };

            });

        });

    });

};