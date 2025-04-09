const WEBANDROIDPAGE=()=>{

    CLEAR("");

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        HEADER(ELEMENT,'','','','50px',(ELEMENTS)=>{

            STYLED(ELEMENTS,'position','relative');

            ICONED(ELEMENTS,'',localStorage.getItem('AppIcon'),'30px',(ELEMENTED)=>{

                STYLED(ELEMENTED,'background','#cdcdcd');
                STYLED(ELEMENTED,'padding','1%');

                EVENT(ELEMENTED,'click',()=>{

                    IMAGERPICKER(ELEMENT,(data)=>{
                        console.log(data)
                    });

                });

            });

           TEXTED(ELEMENTS,'p','','News','18px','#000000',(ELE)=>{

                EVENT(ELE,'click',()=>{
                    NAVIGATOR('Yes',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');
                })

           });

           TEXTED(ELEMENTS,'p','','Services','18px','#000000',(ELE)=>{

                EVENT(ELE,'click',()=>{
                    NAVIGATOR('Yes',WEBANDROIDSERVICESPAGE,'WEBANDROIDPAGE');
                })

           });

           TEXTED(ELEMENTS,'p','','About Us','18px','#000000',(ELE)=>{

                EVENT(ELE,'click',()=>{
                    NAVIGATOR('Yes',WEBANDROIDABOUTPAGE,'WEBANDROIDPAGE');
                })

           });

        });

        const MESSAGE=`Creating a smile and making a difference!<br><br>By One Donation at a time . <br><Br> Donate Today and change the world.`;

        TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',()=>{

        });

        TEXTED(ELEMENT,'p','','Upcoming Events','18px','blue',(ELEMENTS)=>{
            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','0.5rem');

        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'','./Pads.jpg','100%',(ELE)=>{

            });

        });

        TEXTED(ELEMENT,'p','','Get Our Amazing Works In The News Section','18px','#000000',(ELEMENTS)=>{
            STYLED(ELEMENTS,'text-align','left');
            STYLED(ELEMENTS,'margin-left','0.5rem');

        });

        ROUNDBUTTON(ELEMENT,'','blue','Latest News','','50%',()=>{

            NAVIGATOR('Yes',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

        });

        VIEW(ELEMENT,'','','','auto',(ELEMENTED)=>{

            ICONED(ELEMENTED,'',localStorage.getItem('AppIcon'),'100%',(ELE)=>{

            });

        });

        const DONATEBUTTON=`Become A Life Saver By Donating Now,<br><br> Click The Button Below To Get Started!!!`;

        TEXTED(ELEMENT,'p','',DONATEBUTTON,'18px','forestgreen',()=>{

        });

        ROUNDBUTTON(ELEMENT,'','blue','Donate Now','','50%',()=>{

            NAVIGATOR('Yes',WEBANDROIDDONATEPAGE,'WEBANDROIDPAGE');

        });

        FOOTER(ELEMENT,'','','','',(ELEMENTED)=>{

            STYLED(ELEMENTED,'position','relative');

            ICONED(ELEMENTED,'',WHITEXICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                EVENT(ELEMENTES,'click',()=>{

                    WEBSITE("https://x.com/communityriseve?s=11");
                });

            });

            ICONED(ELEMENTED,'',WHITEGMAILICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                EVENT(ELEMENTES,'click',()=>{

                    GMAIL('Communityriseventures@gmail.com')
                   
                });

            });

            ICONED(ELEMENTED,'',WHITEFACEBOOKICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                EVENT(ELEMENTES,'click',()=>{

                    WEBSITE("https://www.facebook.com/share/gGoc7h3UY95qyPvU/?mibextid=wwXIfr");
                });

            });

            ICONED(ELEMENTED,'',WHITEINSTAGRAMICON,'30px',(ELEMENTES)=>{

                STYLED(ELEMENTES,'background','#000000');
                STYLED(ELEMENTES,'padding','1%');
                STYLED(ELEMENTES,'border-radius','50px');

                
                EVENT(ELEMENTES,'click',()=>{

                    WEBSITE("https://www.instagram.com/community_rise_ventures/profilecard/?igsh=MXUwaGdkaTI0YTNvNQ==");
                });

            });

        });

    });

};

const WEBANDROIDNEWSPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Your Story','18px','#000000',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');

            EVENT(ELEMENT,'click',()=>{

                NAVIGATOR('Yes',WEBANDRROIDYOURSTORYPAGE,'WEBANDROIDPAGE');

            });

       });

    });

    SCROLLVIEW("",'','',(ELEMENT)=>{

        STYLED(ELEMENT,'botom','0');
        STYLED(ELEMENT,'top','50px');
       
        NEWSPAGE(ELEMENT);

    });

}

const WEBANDROIDSERVICESPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Our Services','18px','#000000',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');

       });

    });

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'',(ELEMENTED)=>{

            STYLED(ELEMENTED,'width','fit-content');
            STYLED(ELEMENTED,'height','50%');

        });

        TEXTED(ELEMENT,'p','','Community Rise Ventures','18px','blue',(ELEMENT)=>{

            
        });

        const MESSAGE=`At Community Rise Ventures ,We Solve Community Based Problem by Creating Long Lasting Solution as We Create Smiles on Peoples Faces and Create a Difference.<br><br>
        Our Services to the Community Include but Not Limited To:
        <br><br>
        =>Solve The Issue OF Water Scarcity
        <br><Br>
        =>Solve the Issue of Education by Construction of Schools
        <br><br>
        =>Solve the Issue of Worship by Construction of Churchies and Mosques
        <br><br>
        =>Solve the Issue of Poverty by We idenitifying the needy the deliver the service to the needy.
        <br><br>
        =>Solve the Issue of Unhealthy Life ,We try educate the Community About the Benefits of Health Life Styles

        `;
        
        TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',(ELEMENTED)=>{
             
             STYLED(ELEMENTED,'text-align','left');
             STYLED(ELEMENTED,'width','98%');
             STYLED(ELEMENTED,'margin-left','2%');
    
        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

    });


}

const WEBANDROIDABOUTPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Donate','18px','blue',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');

            EVENT(ELEMENT,'click',()=>{
                
                NAVIGATOR('Yes',WEBANDROIDDONATEPAGE,'WEBANDROIDABOUTPAGE');
            });
           
       });

    });

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'',(ELEMENTED)=>{

            STYLED(ELEMENTED,'width','fit-content');
            STYLED(ELEMENTED,'height','50%');

        });

        TEXTED(ELEMENT,'p','','Community Rise Ventures','18px','blue',(ELEMENT)=>{

            
       });

       const MESSAGE=`Welcome to Community Rise Ventures where we aid the community with resources to make life better.<br><br>We are Non-Government Funded Organisation Located in Mbale City.
       
       `;
       
       TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',(ELEMENTED)=>{
            
            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
   
       });

       IMAGEBUTTON(ELEMENT,'','forestgreen','Location','',WHITELOCATIONICON,()=>{
        
       });

       const MESSAGENT=`We Are Located Around Mbale College in Kasanvu in Mbale City ,Uganda .<br><br>
       
       `;
       
       TEXTED(ELEMENT,'p','',MESSAGENT,'18px','#000000',(ELEMENTED)=>{

            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
   
       });

       IMAGEBUTTON(ELEMENT,'','forestgreen','Mission','',WHITEGROUPICON,()=>{
        
       });

       const MESSAGET=`Creating Smiles and Making a Difference.
       `;
       
       TEXTED(ELEMENT,'p','',MESSAGET,'18px','#000000',(ELEMENTED)=>{

            STYLED(ELEMENTED,'text-align','left');
            STYLED(ELEMENTED,'width','98%');
            STYLED(ELEMENTED,'margin-left','2%');
            
       });

       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       
    });

};

const WEBANDRROIDYOURSTORYPAGE=()=>{

    DELETESTORAGE("",'UserName');
    DELETESTORAGE("",'UserLocation');
    DELETESTORAGE("",'UserEmail');
    DELETESTORAGE("",'UserStory');
    DELETESTORAGE("",'ImageOne');
    DELETESTORAGE("",'ImageTwo');
    DELETESTORAGE("",'ImageThree');
    DELETESTORAGE("",'ImageFour');
    DELETESTORAGE("",'ImageFive');

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','1%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Share With Us','18px','#000000',(ELEMENT)=>{
       
            STYLED(ELEMENT,'margin-right','2%');

            
       });

    });

    SCROLLVIEW("",'','#00000050',(ELEMENT)=>{

        STYLED(ELEMENT,'botom','0');
        STYLED(ELEMENT,'top','50px');

        TEXT(ELEMENT,'','','Share Your Story','20px','#000000',()=>{

            alert('The Story You Share Should Be Connected With Community Rise Ventures,Not Works Not Connected To Our Organisation!')

        });

        ROUNDINPUT(ELEMENT,'','Enter Your Name','',(data)=>{

            STORE("",'UserName',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your location','',(data)=>{

            STORE("",'UserLocation',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your Email','',(data)=>{

            STORE("",'UserEmail',data);

        });

        TEXTAREA(ELEMENT,'','Share Your Story',(data)=>{

            STORE("",'UserStory',data);

        });

        TEXT(ELEMENT,'','','Add Images If Any','20px','#000000',()=>{

            alert('The Story You Share Should Be Connected With Community Rise Ventures,Not Works Not Connected To Our Organisation!')

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageOne',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageTwo',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageThree',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageFour',data);

                });

            });

        });

        ICONED(ELEMENT,'',WHITEUSERICON,"100%",(ELEMENTS)=>{

            STYLED(ELEMENTS,'height','fit-content');
            STYLED(ELEMENTS,'background','#cdcdcd');

            EVENT(ELEMENTS,'click',()=>{

                IMAGERPICKER(ELEMENTS,(data)=>{

                    STORE("",'ImageFive',data);

                });

            });

        });

        ROUNDBUTTON(ELEMENT,'SendButton','blue','Share Now','','50%',()=>{

            if (!sessionStorage.getItem("UserName")) {

                alert("Enter Your Name");

                return
                
            };

            if (!sessionStorage.getItem("UserLocation")) {

                alert("Enter Your Location");

                return
                
            };

            if (!sessionStorage.getItem("UserEmail")) {

                alert("Enter Your Email");

                return
                
            };

            if (!sessionStorage.getItem("UserStory")) {

                alert("Please Tell Us Your  Story");

                return
                
            };

            NETWORKFUNCTIONS('',()=>{

                LOADERPAGE('',(FTS)=>{

                    const HEADER=['UserName','UserEmail','UserStory','UserLocation','Date','ImageOne','ImageTwo','ImageThree','ImageFour','ImageFive','Device','Admin'];

                    DEVICED((device)=>{

                        const DATA=[sessionStorage.getItem('UserName'),sessionStorage.getItem('UserEmail'),sessionStorage.getItem('UserStory'),sessionStorage.getItem('UserLocation'),new Date(),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('ImageThree'),sessionStorage.getItem('ImageFour'),sessionStorage.getItem('ImageFive'),device,'NotAdmin'];

                        INSERTDATA(LINk,'CommunityRiseNews',HEADER,DATA,(res)=>{

                            if (res.error === true ) {

                                alert("Story Adding Failed");

                                STYLED(FTS,'Display','none');
                                
                            }

                            DATABASESAVER(LINk,'CommunityRiseNews','CommunityRiseNews','CommunityRiseNews',(returneddata)=>{

                                if (returneddata === false ) {

                                    DATABASEUPDATER(LINk,'CommunityRiseNews','CommunityRiseNews','CommunityRiseNews','CommunityRiseNews');
                                    
                                    HIDER(1000,()=>{

                                        NAVIGATOR('',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

                                    });

                                };

                                NAVIGATOR('',WEBANDROIDNEWSPAGE,'WEBANDROIDPAGE');

                            });

                        });

                    });

                });

            });
        
        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
    
    });

};

const WEBANDROIDDONATEPAGE=()=>{

    CLEAR("");

    HEADER('','','','','50px',(ELEMENTS)=>{

        STYLED(ELEMENTS,'position','sticky');

        ICONED(ELEMENTS,'',WHITEBACKICON,'25px',(ELEMENTED)=>{

            STYLED(ELEMENTED,'background','#cdcdcd');
            STYLED(ELEMENTED,'margin-left','1%');
            STYLED(ELEMENTED,'padding','2%');
            STYLED(ELEMENTED,'border-radius','50px');

            EVENT(ELEMENTED,'click',()=>{

                NAVIGATOR('',WEBANDROIDABOUTPAGE,'WEBANDROIDABOUTPAGE');

            });

        });

       TEXTED(ELEMENTS,'p','','Donate','18px','blue',(ELEMENT)=>{

            STYLED(ELEMENT,'margin-right','2%');
           

       });

    });

    SCROLLVIEW("",'','transparent',(ELEMENT)=>{

        ICONED(ELEMENT,'',localStorage.getItem('AppIcon'),'',(ELEMENTED)=>{

            STYLED(ELEMENTED,'width','fit-content');
            STYLED(ELEMENTED,'height','50%');

        });

        TEXTED(ELEMENT,'p','','Community Rise Ventures','18px','blue',(ELEMENT)=>{

            
       });

        ROUNDINPUT(ELEMENT,'','Enter Your Name','',(data)=>{

            STORE("",'UserName',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your location','',(data)=>{

            STORE("",'UserLocation',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Your Email','',(data)=>{

            STORE("",'UserEmail',data);

        });

        TEXTAREA(ELEMENT,'','Information About the Donation',(data)=>{

            STORE("",'UserStory',data);

        });

        const MESSAGE=`When You Donate Today ,You Officially Join the Parthnership Program .<br><br>This Officailly Enables You Track The Activities of Our Organisation and be Updated on the Events Happening Now!!!.
       
        `;
       
        TEXTED(ELEMENT,'p','',MESSAGE,'18px','#000000',(ELEMENTED)=>{
                
                STYLED(ELEMENTED,'text-align','left');
                STYLED(ELEMENTED,'width','98%');
                STYLED(ELEMENTED,'margin-left','2%');
    
        });

       IMAGEBUTTON(ELEMENT,'','blue','Donate Now','',WHITESUBSCRIPTIONICON,()=>{
        
       });

       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       
    });

};