const CONNECTIONLINK='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?gid=0#gid=0';

const TEXTCOLOR='#000000';

const NOVASTART=()=>{

    VISITORS();

    HOSTINGCHECKER(()=>{

        APPMODE('#cdcdcd');

        DATATED();
    
        SCREENWIDTH((data)=>{
    
            CONDITION(data >800,
                ()=>{
    
                    ROUTE('',DESKTOPHOMEPAGE,'DESKTOPHOMEPAGE');
    
                },
                ()=>{
    
                    ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');
                    
                }
    
            );
    
        });

    });

};

const DATATED=()=>{

    GETDATA(CONNECTIONLINK,'News',(data)=>{
        
        const MYDATA={
            "Name":"CommunityRise",
            "Data":data
        }

        STOREINDEXED('CommunityRise','CommunityRise', MYDATA, (data)=>{

            if (data === true ) {

                
            } else {

                UPDATEINDEX('CommunityRise','CommunityRise', MYDATA,()=>{

                   
                });

            };

        });

    },(Error)=>{

        MESSAGEDISPLAY('','Something Went Wrong');

    });

};

const ANDROIDHOMEPAGE=()=>{

    HOMEHEADERTEMPLATE('','','',(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,COMMUNITYRISELOGO,'30px','30px','','',(ELEMENTS)=>{

        });

        TEXT(ELEMENT,'h2','News',TEXTCOLOR,'20px','',(ELE)=>{

            ROUTE(' ',ANDROIDNEWSPAGE,'ANDROIDHOMEPAGE');

        });

        TEXT(ELEMENT,'h2','Services',TEXTCOLOR,'20px','',(ELE)=>{

            ROUTE(' ',ANDROIDSERVICESPAGE,'ANDROIDHOMEPAGE');

        });

        TEXT(ELEMENT,'h2','About Us',TEXTCOLOR,'20px','',(ELE)=>{

            ROUTE(' ',ANDROIDABOUTUSPAGE,'ANDROIDHOMEPAGE');

        });

    },(ELEMENT)=>{

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','',(ELE)=>{

        });

        TEXT(ELEMENT,'p','Creating a Smile and making a difference!',TEXTCOLOR,'20px','2% auto',()=>{

        });

        TEXT(ELEMENT,'p','By One Donation at a time.',TEXTCOLOR,'20px','2% auto',()=>{

        });

        TEXT(ELEMENT,'p','Donate Today and Change The World',TEXTCOLOR,'20px','5% auto',()=>{

        });

        LEFTTEXT(ELEMENT,'h3','Updates','blue','25px','1rem','3% auto',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISEMOSQUECONSTRUCTION,'95%','50%','',(ELE)=>{

        });

        TEXT(ELEMENT,'p',' Whats Happening in Community Rise',TEXTCOLOR,'20px','2% auto',()=>{

        });

        ROUNDBUTTON(ELEMENT,'50%','50px','blue','','Latest News',(ELE)=>{

            ROUTE(' ',ANDROIDNEWSPAGE,'HOMEPAGE');

        });

        IMAGE(ELEMENT,CommunityRiseBoreHole,'95%','50%','2% auto',(ELE)=>{

        });

        TEXT(ELEMENT,'p',' Create a differences Today',TEXTCOLOR,'20px','',()=>{

        });

        ROUNDBUTTON(ELEMENT,'50%','50px','blue','','Donate Today',(ELE)=>{

            ROUTE(' ',ANDROIDDONATEPAGE,'ANDROIDHOMEPAGE');

        });

        LEFTTEXT(ELEMENT,'h3','Who We Are!','blue','25px','1rem','3% auto',()=>{

        });

        TEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that has taken steps to try and solve the community problems ,Our Vision is to create a stable and sustainable Community for enhanced Development`,TEXTCOLOR,'20px','',()=>{

        });

        LEFTTEXT(ELEMENT,'h3','Community Changes','blue','25px','1rem','3% auto',()=>{

        });

        TEXT(ELEMENT,'p',`Join Us Today in the Health and Safety of Girl Children Via the Information Below`,TEXTCOLOR,'20px','',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISEPADS,'95%','50%','2% auto',(EL)=>{

        });

        LEFTTEXT(ELEMENT,'h3','Reach Us Today','blue','25px','1rem','3% auto',()=>{

        });

        FOOTER(ELEMENT,'blue','95%','',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','relative');

            ICON(ELEMENTS,WHITETIKTOKICON,'25px','25px','',(ELEMENT)=>{


            });

            ICON(ELEMENTS,WHITEFACEBOOKICON,'25px','25px','',(ELEMENT)=>{

                FACEBOOK('');

            });

            ICON(ELEMENTS,WHITEINSTAGRAMICON,'25px','25px','',(ELEMENT)=>{

                INSTAGRAM('community_rise_ventures');

            });

            ICON(ELEMENTS,WHITEWHATSAPPICON,'25px','25px','',(ELEMENT)=>{

                WHATSAPP('0779332496');

            });

            ICON(ELEMENTS,WHITEGMAILICON,'25px','25px','',(ELEMENT)=>{

                GMAIL('Communityriseventures@gmail.com');;

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const ANDROIDNEWSPAGE=()=>{

    BACKPAGE('ANDROIDHOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    },'Latest News',TEXTCOLOR,()=>{

    },(ELEMENT)=>{

        ANDROIDNEWSDATA(ELEMENT);

        FLOATFIXEDBUTTON('','blue',(ELEMENTS)=>{

            IMAGE(ELEMENTS,WHITEADDICON,'25px','25px','',(IMAGER)=>{

                ROUTE(' ',ANDROIDUPDATENEWSPAGE,'ANDROIDNEWSPAGE');
    
            });

        });

    });

};

const ANDROIDNEWSDATA=(ELEMENT)=>{

    GETINDEXED ('CommunityRise', 'CommunityRise', (data)=>{

        REDUX(data,(Element)=>{

            REDUX(Element.Data,(Elements)=>{

                VIEW(ELEMENT,' ','98%','auto','',(ELEMENTS)=>{

                    STYLED(ELEMENTS,'overflow','hidden');

                    IMAGE(ELEMENTS,Elements.ImageOne,'100%','50%','',(ELE)=>{

                    });

                    LEFTTEXT(ELEMENTS,'p',Elements.Story,TEXTCOLOR,'20px','1rem','3% auto',()=>{

                    });

                    VIEW(ELEMENTS,'','98%','98%','1% auto',(ELEMENTSES)=>{

                        STYLED(ELEMENTSES,'overflow','hidden');
                        STYLED(ELEMENTSES,'overflowX','auto');
                        STYLED(ELEMENTSES,'display','inline-flex');
                           
                        IMAGE(ELEMENTSES,Elements.ImageOne||COMMUNITYRISELOGO,'90%','100%','2%',(ELEMENTSS)=>{

                               
                        });

                        IMAGE(ELEMENTSES,Elements.ImageTwo||COMMUNITYRISELOGO,'90%','100%','2%',(ELEMENTSS)=>{

                        });

                        IMAGE(ELEMENTSES,Elements.ImageThree||COMMUNITYRISELOGO,'90%','100%','2%',(ELEMENTSS)=>{

                        });

                        IMAGE(ELEMENTSES,Elements.ImageFour||COMMUNITYRISELOGO,'90%','100%','2%',(ELEMENTSS)=>{
    
                        });

                    });

                    BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

                });

            });

        });

    });

};

const ANDROIDSERVICESPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    },'Our Services',TEXTCOLOR,()=>{

    },(ELEMENT)=>{

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','3% auto',(ELE)=>{

        });

        TEXT(ELEMENT,'h2','Our Services','blue','20px','3% auto',(ELE)=>{

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,TEXTCOLOR,'18px','3% auto',()=>{

        });

        TEXT(ELEMENT,'h2','Quality Education','blue','20px','3% auto',(ELE)=>{


        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,TEXTCOLOR,'18px','3% auto',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','3% auto',(ELE)=>{

        });

        TEXT(ELEMENT,'h2','Quality Health','blue','20px','3% auto',(ELE)=>{

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,TEXTCOLOR,'18px','3% auto',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','3% auto',(ELE)=>{

        });

        
        TEXT(ELEMENT,'h2','Housing For Orphans','blue','20px','3% auto',(ELE)=>{

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','3% auto',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','3% auto',(ELE)=>{

        });

        
        TEXT(ELEMENT,'h2','Worship Center Constructions','blue','20px','3% auto',(ELE)=>{

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','','3% auto',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','3% auto',(ELE)=>{

        });

        TEXT(ELEMENT,'h2','Quality Water Supply','blue','20px','3% auto',(ELE)=>{

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is a Non Government Founded Organisation that is dedicated to solving community arising challenges and leave a great smile.<br>We Solve the Following Community Based Problems With Permanet Solutions`,'#000000','18px','','3% auto',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','','3% auto',(ELE)=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const ANDROIDABOUTUSPAGE=()=>{

    BACKPAGE('ANDROIDHOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

    },'Donate',TEXTCOLOR,()=>{

        ROUTE(' ',ANDROIDDONATEPAGE,'ANDROIDABOUTUSPAGE');

    },(ELEMENT)=>{

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','2% auto',(ELE)=>{

        });

        LEFTTEXT(ELEMENT,'h3','Who We Are!','blue','20px','',()=>{

        });

        LEFTTEXT(ELEMENT,'p',`We are Non Government Funded Organisation Located in Mbale City.`,'#000000','20px','',()=>{

        });

        LEFTBUTTONTEXT(ELEMENT,'98%','50px','blue','','location','',()=>{

        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures is Located In Kasanvu in Mbale City along Mbale College`,'#000000','20px','',()=>{

        });

        LEFTBUTTONTEXT(ELEMENT,'98%','50px','blue','','Mission','',()=>{

        });

        LEFTTEXT(ELEMENT,'p',`We are Aimed At Creating Smiles and Changing Community Lives for the Better`,'#000000','20px','','',()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const ANDROIDDONATEPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDABOUTUSPAGE,'ANDROIDABOUTUSPAGE');

    },'Donate',TEXTCOLOR,()=>{


    },(ELEMENT)=>{

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'','50%','2% auto',(ELE)=>{

        });

        TEXT(ELEMENT,'h2','Donate Today','blue','20px','5% auto',(ELE)=>{


        });

        LEFTTEXT(ELEMENT,'p',`Community Rise Ventures being a Non Government Funded Organisation uses Fundeds Collected From Donations to Render Better Services to the Community.<br><br>To Get Started Today Please Donate Via the Sources Below`,TEXTCOLOR,'18px','','3% auto',()=>{

        });

        TEXT(ELEMENT,'h2',`Bank Account Number <br><Br>60080462400 <br><br>Bank Name: Absa Bank. `,'forestgreen','20px','3% auto',(ELE)=>{


        });

        TEXT(ELEMENT,'p','Your Suppport is Greatly Appreciated','blue','20px','',(ELE)=>{

            
        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const ANDROIDUPDATENEWSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',ANDROIDABOUTUSPAGE,'ANDROIDABOUTUSPAGE');

    },'Your Story',TEXTCOLOR,()=>{

    },(ELEMENT)=>{

        ROUNDINPUT(ELEMENT,'text','#000','','Enter Your Name',(data)=>{

            STOREDATA('','Name',data);

        });

        ROUNDINPUT(ELEMENT,'text','#000','','Enter Your Location',(data)=>{

            STOREDATA('','Location',data);

        });

        ROUNDINPUT(ELEMENT,'email','#000','','Enter Your Email',(data)=>{

            STOREDATA('','Email',data);

        });
        
        TEXTAREA(ELEMENT,'text','#000','300px','Tell Us Your Story',(data)=>{

            STOREDATA('','Story',data);

        });

        CENTERTEXT(ELEMENT,'','Click On Images Below To Customize',TEXTCOLOR,'14px','',()=>{

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS,(data)=>{

                STOREDATA('','ImageOne',data);
            
            });

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS,(data)=>{

                STOREDATA('','ImageTwo',data);
            
            });

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS,(data)=>{

                STOREDATA('','ImageThree',data);
            
            });

        });

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'98%','70%','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS,(data)=>{

                STOREDATA('','ImageFour',data);
            
            });

        });

        BUTTON(ELEMENT,'','','#000','#fff','Share Your Story','',(ELEMENTS)=>{

            CONDITION(sessionStorage.getItem('Name'),()=>{

                CONDITION(sessionStorage.getItem('Location'),()=>{

                    CONDITION(sessionStorage.getItem('Email'),()=>{

                        CONDITION(sessionStorage.getItem('Story'),()=>{

                            CONDITION(sessionStorage.getItem('ImageOne')||sessionStorage.getItem('ImageTwo')||sessionStorage.getItem('ImageThree')||sessionStorage.getItem('ImageFour'),()=>{

                                CONDITION(navigator.onLine,()=>{

                                    DISPLAY(ELEMENTS,'Please Wait');

                                    const HEADERS=['Name','Location','Email','Story','ImageOne','ImageTwo','ImageThree','ImageFour'];

                                    const DATA=[sessionStorage.getItem('Name'),sessionStorage.getItem('Location'),sessionStorage.getItem('Email'),sessionStorage.getItem('Story'),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('ImageThree'),sessionStorage.getItem('ImageFour'),]

                                    INSERTDATA(CONNECTIONLINK,'News',HEADERS,DATA,(data)=>{

                                        GETDATA(CONNECTIONLINK,'News',(data)=>{
        
                                            const MYDATA={
                                                "Name":"CommunityRise",
                                                "Data":data
                                            }
                                    
                                            STOREINDEXED('CommunityRise','CommunityRise', MYDATA, (data)=>{
                                    
                                                if (data === true ) {
                                    
                                                    ROUTE(' ',ANDROIDNEWSPAGE,'ANDROIDHOMEPAGE');
                                                    
                                                } else {
                                    
                                                    UPDATEINDEX('CommunityRise','CommunityRise', MYDATA,()=>{
                                    
                                                        ROUTE(' ',ANDROIDNEWSPAGE,'ANDROIDHOMEPAGE');
                                    
                                                    });
                                    
                                                };
                                    
                                            });
                                    
                                        },(Error)=>{
                                    
                                            MESSAGEDISPLAY('','Something Went Wrong');
                                    
                                        });
        
                                    },(Error)=>{
        
                                        MESSAGEDISPLAY('','Something Went Wrong');
        
                                    });
        

                                },()=>{

                                    MESSAGEDISPLAY('','Check Your Internet');

                                });

                            },()=>{
                
                                MESSAGEDISPLAY('','Add Atleast One Image');
                
                            });

                        },()=>{
            
                            MESSAGEDISPLAY('','Tell Us Your Story');
            
                        });

                    },()=>{
        
                        MESSAGEDISPLAY('','Enter Your Email');
        
                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter Your Location');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter Your Name');

            });

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });

};

const VISITORS=()=>{

    DEVICE((data)=>{

        CHECKER(navigator.onLine,()=>{

            GETDATA(CONNECTIONLINK,'Visitors',(MyData)=>{

                FINDER(MyData,'ID',localStorage.getItem('ID'),(Users)=>{

                    CONDITION(Users.ID === localStorage.getItem('ID'),()=>{

                        JSONADDER ( Users.RevistDate,[new Date()],(dataDat)=>{

                            const INFO=[data,Users.Date,Users.Language,Users.DeviceScreen,dataDat,Users.VistedTimes+1];
                        
                            UPDATEDATA(CONNECTIONLINK,'Visitors',Users.ID,INFO,(datata)=>{
            
                            },()=>{
            
                            });

                        });

                    },()=>{
                        
                        JSONADDER ( new Date(),[new Date()],(dataDat)=>{

                            const HEADERS=['Users','Date','Language','DeviceScreen','RevistDate','VistedTimes'];

                            const INFO=[data,new Date(),data.language,data.screen,dataDat,1];
                            
                            INSERTDATA(CONNECTIONLINK,'Visitors',HEADERS,INFO,(datata)=>{
    
                                STOREDATA(' ','ID',datata.uniqueId);
            
                            },()=>{
            
                            });

                        });

                    } );                  
                });


            },()=>{

            })

        });

    })

};

const DESKTOPHOMEPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        IMAGE(ELEMENT,COMMUNITYRISELOGO,'70%','70%','1% auto',()=>{

        });

        NAVTEMPLATE(ELEMENT,'','90%','50px','',(ELEMENTS)=>{

            TEXT(ELEMENTS,'','Updates',TEXTCOLOR,'20px','',()=>{

            });

            TEXT(ELEMENTS,'','About Us',TEXTCOLOR,'20px','',()=>{

            });

            TEXT(ELEMENTS,'','Contact Us',TEXTCOLOR,'20px','',()=>{

            });

            TEXT(ELEMENTS,'','Donate',TEXTCOLOR,'20px','',()=>{

            });

        });

    });

};