const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR='#ffffff';

const NOVASTART=()=>{

    HOSTINGCHECKER(()=>{

        APPMODE(localStorage.getItem('Color')||TEXTCOLOR);

        APPUPDATER();

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

};

const HOMEPAGE=()=>{
    
    DELETEDATA('','Backed');

    APPUPDATER();

    HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'h2','Qel Medicals',TEXTCOLOR,'20px','','',()=>{

        });

        CONDITION(localStorage.getItem('Color'),()=>{

            RIGHTIMAGE(ELEMENT,WHITESUNICON,'25px','25px','','',()=>{

                DELETEDATA(' ','Color');
    
                NOVASTART();
    
            });

        },()=>{

            RIGHTIMAGE(ELEMENT,WHITEMOONICON,'25px','25px','','',()=>{

                STOREDATA(' ','Color','#333333');
    
                NOVASTART();
    
            });

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERICON,'25px','25px','','',()=>{

            ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

        });

    },(ELEMENT)=>{

        STYLED(ELEMENT,'bottom','10px');

        LEFTTEXT(ELEMENT,'h2','Catergories','#0F990F','18px','','2%',()=>{

        });

        NAVTEMPLATE(ELEMENT,' ','97%','200px','1% auto',(ELEMENTS)=>{

            STYLED(ELEMENTS,'overflowX','auto');

            HOMECATERGORY(ELEMENTS);
                 
        });

        LEFTTEXT(ELEMENT,'h2','Trending Products','#0F990F','18px','','2%',()=>{

        });

        PRODUCTS(ELEMENT);

    });

    FOOTER('','#0F990F','','25px',(ELEMENTS)=>{

        TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{

        });

    });

};

const APPUPDATER=()=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(API,'Products',(data)=>{

            const MYDATA=
                {
                    "Name":'QelProducts',
                    'data':data
                }
            
            STOREINDEXED ('QelProducts', 'QelProducts',MYDATA,(data)=>{
    
                CHECKER(data === false,()=>{
    
                    UPDATEINDEX('QelProducts', 'QelProducts', MYDATA,()=>{
    
                    });
    
                } );
    
                CHECKER(data === true,()=>{
    
                    ROUTE('',HOMEPAGE,'HOMEPAGE');
    
                } );
                
            });
    
        },(data)=>{
    
            console.log(data);
    
        });
    
        GETDATA(API,'Catergory',(data)=>{
    
            const MYDATA=
                {
                    "Name":'QelCatergory',
                    'data':data
                }
            
            STOREINDEXED ('QelCatergory', 'QelCatergory',MYDATA,(data)=>{
    
                CHECKER(data === false,()=>{
    
                    UPDATEINDEX('QelCatergory', 'QelCatergory', MYDATA,()=>{
    
                    });
    
                } );
    
                CHECKER(data === true,()=>{
    
                    ROUTE('',HOMEPAGE,'HOMEPAGE');
    
                } );
                
            });
    
        },(data)=>{
    
            console.log(data);
    
        });

    });

};

const PRODUCTS=(ELEMENT)=>{

    GETINDEXEDDATA('QelProducts', 'QelProducts', (data)=>{

        CHECKER(data.Approved,()=>{

            VIEW(ELEMENT,'transparent','45%','25%','1% 1% 5% 1%',(ELEMENTS)=>{

                STYLED(ELEMENTS,'display','inline-table');
                   
                IMAGE(ELEMENTS,data.ProductImage,'100%','250px',' 0',()=>{
    
                });
    
                FOOTER(ELEMENTS,'#0F990F80','','50px',(ELEMENTSE)=>{
    
                    LEFTTEXT(ELEMENTSE,'',data.ProductName,TEXTCOLOR,'14.1px','0.3rem','',()=>{
    
                    });
    
                    RIGHTTEXT(ELEMENTSE,'',data.ProductPrice ,TEXTCOLOR,'16px','0.3rem','',()=>{
    
                    });
    
                });

                CLICK(ELEMENTS,()=>{

                    JSONIFICATION(data,(MyData)=>{
    
                        STOREDATA('','Product',MyData);
    
                        ROUTE(' ',PRODUCTPAGE,'HOMEPAGE');
    
                    });

                });
    
            });

        });

    });

};

const USERACCOUNTPAGE=()=>{

    HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px','0.1rem','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'h2','Profile',TEXTCOLOR,'20px','','',()=>{

        });

    },(ELEMENT)=>{

        STYLED(ELEMENT,'bottom','10px');

        VIEW(ELEMENT,'#0F990F','98%','300px','1% auto',(ELEMENTS)=>{

            STYLED(ELEMENTS,'border-radius','5px');

        });

        IMAGEBUTTON(ELEMENT,'#0F990F','Become A Seller','#ffffff',WHITECREATEDONICON,'50px','1% auto',()=>{

        });

        IMAGEBUTTON(ELEMENT,'#0F990F','Contact Us','#ffffff',WHITEPHONEICON,'50px','1% auto',()=>{

        });

        IMAGEBUTTON(ELEMENT,'#0F990F','Terms And Conditions','#ffffff',WHITEPRIVACYPOLICYICON,'50px','1% auto',()=>{

        });

        IMAGEBUTTON(ELEMENT,'#0F990F','Settings','#ffffff',WHITESETTINGSICON,'50px','1% auto',()=>{

        });

        IMAGEBUTTON(ELEMENT,'#0F990F','Sync','#ffffff',WHITERETRYICON,'50px','1% auto',()=>{

            RELOAD();

        });

        IMAGEBUTTON(ELEMENT,'#0F990F','Updates','#ffffff',WHITEMOBILEDEVELOPMENTICON,'50px','1% auto',()=>{

        });

    });

    FOOTER('','#0F990F','','25px',(ELEMENTS)=>{

        TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{

        });

    });

};

const PRODUCTPAGE=()=>{

    DEJSON(sessionStorage.getItem('Product'),(data)=>{

        HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

            LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px','0.1rem','',()=>{

                CONDITION(sessionStorage.getItem('Backed'),()=>{

                    ROUTE('',PRODUCTSECTIONPAGE,'PRODUCTSECTIONPAGE');

                },()=>{

                    ROUTE('',HOMEPAGE,'HOMEPAGE');

                })
    
            });

            RIGHTTEXT(ELEMENT,'h2',data.ProductName,TEXTCOLOR,'20px','','',()=>{
    
            });

        },(ELEMENT)=>{

            STYLED(ELEMENT,'bottom','10px');
    
            IMAGE(ELEMENT,data.ProductImage,'50%','250px','2% auto',()=>{

            });

            CENTERTEXT(ELEMENT,'h2','Price:'+data.ProductPrice,'#0F990F','20px','','2% auto',()=>{

            });

            NAVTEMPLATE(ELEMENT,'#0F990F','95%','50px','1% auto',(ELEMENTS)=>{

                
                ICON(ELEMENTS,WHITESAVEICON,'25px','25px','','',()=>{
        
        
                });

                ICON(ELEMENTS,WHITEUNHEARTICON,'25px','25px','','',()=>{

        
                });

                ICON(ELEMENTS,WHITECOMMENTICON,'25px','25px','','',()=>{
        
        
                });

            });

            LEFTTEXT(ELEMENT,'h2','About','#0F990F','20px','1rem','3%',()=>{

            });

            TEXT(ELEMENT,'',data.ProductDetails,'#0F990F','20px','1rem','3%',()=>{

            });

            ROUNDBUTTON(ELEMENT,'50%','50px','#0F990F','','Buy',()=>{

            });
    
        });

        FOOTER('','#0F990F','','25px',(ELEMENTS)=>{

            TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{
    
            });
    
        });

    });

};

const SEARCHPAGE=()=>{

    DELETEDATA('','SearchItem');

    HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px','0.1rem','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'h2','Search',TEXTCOLOR,'20px','','',()=>{

        });

    },(ELEMENT)=>{

        STYLED(ELEMENT,'bottom','10px');

        NAVTEMPLATE(ELEMENT,'#0F990F','95%','50px','1% auto',(ELEMENTS)=>{

            INPUT(ELEMENTS, '', 'orange', 'Search For An Item', (data)=>{

                PRODUCTSEARCH(ELEMENT,data);

            });

        });

    });

    FOOTER('','#0F990F','','25px',(ELEMENTS)=>{

        TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{

        });

    });

};

const PRODUCTSEARCH=(ELEMENT,SearchedData)=>{

    GETINDEXEDDATA('QelProducts', 'QelProducts', (data)=>{

        CHECKER(data.Approved,()=>{

            CHECKER(SearchedData === data.ProductName,()=>{

                VIEW(ELEMENT,' ','45%','45%','2.5% 2.5% 10% 2.5%',(ELEMENTS)=>{

                    STYLED(ELEMENTS,'display','inline-table');
                    
        
                    IMAGE(ELEMENTS,data.ImageOne,'100%','250px','',()=>{
        
                    });
        
                    FOOTER(ELEMENTS,'#09cc09','','50px',(ELEMENTSE)=>{
        
                        LEFTTEXT(ELEMENTSE,'',data.ProductName,TEXTCOLOR,'14.1px','0.3rem','',()=>{
        
                        });
        
                        RIGHTTEXT(ELEMENTSE,'',data.ProductPrice ,TEXTCOLOR,'16px','0.3rem','',()=>{
        
                        });
        
                    });
    
                    CLICK(ELEMENTS,()=>{
    
                        JSONIFICATION(data,(MyData)=>{
        
                            STOREDATA('','Product',MyData);
        
                            ROUTE(' ',PRODUCTPAGE,'HOMEPAGE');
        
                        });
    
                    });
        
                });

            } );

        });

    });

};

const HOMECATERGORY=(ELEMENT)=>{

    GETINDEXEDDATA('QelCatergory', 'QelCatergory', (data)=>{

        CHECKER(data.Approved,()=>{

            VIEW(ELEMENT,' ','30%','95%','auto 1%',(ELEMENTS)=>{

                STYLED(ELEMENTS,'flex-shrink','0');
                STYLED(ELEMENTS,'overflow','hidden');

                STYLED(ELEMENTS,'border','1px solid #0F990F50');

                IMAGE(ELEMENTS,data.ProductImage,'100%','100%','',()=>{
    
                });
    
                FOOTER(ELEMENTS,'#0F990F50','','50px',(ELEMENTSE)=>{
    
                    CENTERTEXT(ELEMENTSE,'',data.ProductName,TEXTCOLOR,'14px','','',()=>{
    
                    });
    
                });

                CLICK(ELEMENTS,()=>{

                    STOREDATA('','Section',data.ID);

                    STOREDATA('','SectionName',data.ProductName);

                    ROUTE(' ',PRODUCTSECTIONPAGE,'HOMEPAGE');

                });

            });

        });

    });

};

const PRODUCTSECTIONPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    APPUPDATER();

    HOMEHEADERTEMPLATE('','#0F990F','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITESINGLEBACKICON,'20px','20px','0.1rem','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'h2',sessionStorage.getItem('SectionName'),TEXTCOLOR,'20px','','',()=>{

        });

    },(ELEMENT)=>{

        STYLED(ELEMENT,'bottom','10px');

        GETINDEXEDDATA('QelProducts', 'QelProducts', (data)=>{

            CHECKER(data.Approved,()=>{

                CHECKER( sessionStorage.getItem('Section') === data.ProductCatergory,()=>{

                    VIEW(ELEMENT,'transparent','45%','25%','1% 1% 5% 1%',(ELEMENTS)=>{

                        STYLED(ELEMENTS,'display','inline-table');
                           
                        IMAGE(ELEMENTS,data.ProductImage,'100%','250px',' 0',()=>{
            
                        });
            
                        FOOTER(ELEMENTS,'#0F990F80','','50px',(ELEMENTSE)=>{
            
                            LEFTTEXT(ELEMENTSE,'',data.ProductName,TEXTCOLOR,'14.1px','0.3rem','',()=>{
            
                            });
            
                            RIGHTTEXT(ELEMENTSE,'',data.ProductPrice ,TEXTCOLOR,'16px','0.3rem','',()=>{
            
                            });
            
                        });
        
                        CLICK(ELEMENTS,()=>{
        
                            JSONIFICATION(data,(MyData)=>{
            
                                STOREDATA('','Product',MyData);

                                STOREDATA('','Backed','On');
            
                                ROUTE(' ',PRODUCTPAGE,'PRODUCTSECTIONPAGE');
            
                            });
        
                        });
            
                    });

                });
        
            });
    
        });

    });

    FOOTER('','#0F990F','','25px',(ELEMENTS)=>{

        TEXT(ELEMENTS,'h2','© Qel MediStore 2025','','15px','','',()=>{

        });

    });

}