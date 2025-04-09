const ANDROIDLOGINPAGE=()=>{

    DELETESTORAGE('','UserName');
    DELETESTORAGE('','UserEmail');
    DELETESTORAGE('','UserPassword');

    CLEAR('');

    SCROLLVIEW('','','',(ELEMENT)=>{

        STYLED(ELEMENT,'background','transparent');

        APPLOGO(ELEMENT,'',localStorage.getItem('AppIcon'),'transparent','50%','50%',()=>{

            RELOADPAGE();

        });

        ROUNDINPUT(ELEMENT,'','Enter Email','email',(data)=>{

            STORE('','UserEmail',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Password','password',(data)=>{

            STORE('','UserPassword',data);

        });

        RIGHTTEXT(ELEMENT,'','','Forgot Password?','','','5%',()=>{

            NAVIGATOR('Yes',ANDROIDFORGOTPASSWORDPAGE,'ANDROIDLOGINPAGE');
            
        });

        IMAGEBUTTON(ELEMENT,'','forestgreen','Sign In','',WHITEENTERICON,()=>{

            if (!sessionStorage.getItem('UserEmail')) {
                
                TOAST('Enter User Email');

                return;

            }

            if (!sessionStorage.getItem('UserPassword')) {
                
                TOAST('Enter User Password');

                return;

            }

            NETWORKFUNCTIONS('',()=>{

                LOADERPAGE(ELEMENT,(LOADING)=>{

                    MYACCOUNTED(sessionStorage.getItem('UserEmail'),(data)=>{

                        if (data === false) {
                          
                            TOAST('No User Account Found');

                            STYLED(LOADING,'display','none');
                            
                        } else {
    
                            if (data.UserPassword === sessionStorage.getItem('UserPassword') ) {
                                
                                JSONIFICATION(data,(User)=>{
    
                                    STORE('local','UserData',User);
    
                                    NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');
    
                                });
    
                            } else {
                              
                                TOAST('Wrong User Password');

                                STYLED(LOADING,'display','none');
                                
                            };
                            
                        };
    
                    });

                })

            });

        });

        IMAGEBUTTON(ELEMENT,'','blue','Create Account','',WHITERIGHTBACKICON,()=>{

            NAVIGATOR('Yes',ANDROIDCREATEACCOUNTPAGE,'ANDROIDLOGINPAGE');

        });

    });

    STOPSCREENRECORD();

};

const ANDROIDCREATEACCOUNTPAGE=()=>{

    DELETESTORAGE('','UserName');
    DELETESTORAGE('','UserEmail');
    DELETESTORAGE('','UserPassword');

    CLEAR('');

    SCROLLVIEW('','','',(ELEMENT)=>{

        STYLED(ELEMENT,'background','transparent');

        APPLOGO(ELEMENT,'',localStorage.getItem('AppIcon'),'transparent','50%','50%',()=>{

            RELOADPAGE();

        });

        ROUNDINPUT(ELEMENT,'','Enter Your Name','',(data)=>{

            STORE('','UserName',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Email','email',(data)=>{

            STORE('','UserEmail',data);

        });

        ROUNDINPUT(ELEMENT,'','Enter Password','password',(data)=>{

            STORE('','UserPassword',data);

        });

        IMAGEBUTTON(ELEMENT,'','forestgreen','Sign Up','',WHITEENTERICON,()=>{

            if (!sessionStorage.getItem('UserName')) {
                
                TOAST('Enter User Name');

                return;

            }

            if (!sessionStorage.getItem('UserEmail')) {
                
                TOAST('Enter User Email');

                return;

            }

            if (!sessionStorage.getItem('UserPassword')) {
                
                TOAST('Enter User Password');

                return;

            }

            NETWORKFUNCTIONS('',()=>{

                LOADERPAGE(ELEMENT,(LOADING)=>{

                    MYACCOUNTED(sessionStorage.getItem('UserEmail'),(data)=>{

                        if (data === false) {

                            RANDOMCODE((code)=>{

                                const USER={
                                    "UserName":sessionStorage.getItem('UserName'),
                                    "UserEmail":sessionStorage.getItem('UserEmail'),
                                    "UserPassword":sessionStorage.getItem('UserPassword'),
                                    "UserCode":code,
                                }

                                const MESS=`Dear ${sessionStorage.getItem('UserName')}\n\n Thank You For Creating A Movie Lander Account \n\n Your Access Code is \n\n ${code}.\n\n Regards Movie Lander Team.`

                                APPPOSTMAIL(MOVIELANDEREMAILAPI,sessionStorage.getItem('UserEmail'),'Account Creation',MESS,(EmailBack)=>{

                                    if (EmailBack.status === 'success') {

                                        STORE("local",'Email',code);

                                        JSONIFICATION(USER,(MyDaata)=>{

                                            STORE("local",'MyDaa',MyDaata);

                                            NAVIGATOR('',ANDROIDVERIFICATIONPAGE,'ANDROIDVERIFICATIONPAGE');
                                        });
                                       
                                    } else {
                                        
                                        TOAST('Failed To Send Verification Code');

                                        STYLED(LOADING,'display','none');

                                    };

                                });

                            });
                          
                        } else {
    
                            TOAST('User With Email Exists');

                            STYLED(LOADING,'display','none');
                            
                        };
    
                    });

                });

            });

        });

        IMAGEBUTTON(ELEMENT,'','blue','LogIn','',WHITERIGHTBACKICON,()=>{

            NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

        });

    });

};

const ANDROIDVERIFICATIONPAGE=()=>{

    DELETESTORAGE('','UserName');
    DELETESTORAGE('','UserEmail');
    DELETESTORAGE('','UserPassword');

    CLEAR('');

    SCROLLVIEW('','','',(ELEMENT)=>{

        STYLED(ELEMENT,'background','transparent');

        APPLOGO(ELEMENT,'',localStorage.getItem('AppIcon'),'transparent','50%','50%',()=>{

            RELOADPAGE();

        });

        ROUNDINPUT(ELEMENT,'','Enter Verification Code','tel',(data)=>{

            STORE('','Code',data);

        });

        IMAGEBUTTON(ELEMENT,'','forestgreen','Verify','',WHITEENTERICON,()=>{

            if (!sessionStorage.getItem('Code')) {
                
                TOAST('Enter Verification Code');

                return;

            }

            if (sessionStorage.getItem('Code') === localStorage.getItem("Email") ) {
                
                NETWORKFUNCTIONS('',()=>{

                    LOADERPAGE(ELEMENT,(LOADING)=>{

                        DEJSON('local','MyDaa',(MyDatata)=>{

                            MYACCOUNTED(MyDatata.UserEmail,(data)=>{
    
                                if (data === false) {

                                    DEVICED((device)=>{

                                        const MyData=[MyDatata.UserName,MyDatata.UserEmail,MyDatata.UserPassword,MyDatata.UserCode,new Date(),device,"","","","","","","","","","","","","","","","","","",""];

                                        INSERTDATA(DATABASEINK,'Users',MOVIEUSERSHEADER,MyData,(ReturnedData)=>{

                                            if (ReturnedData.error === false ) {

                                                MYACCOUNTED(MyDatata.UserEmail,(User)=>{

                                                    if (User === false ) {

                                                        TOAST('Failed To Complete Account Creation');
        
                                                        STYLED(LOADING,'display','none');
                                                        
                                                    } else {


                                                        JSONIFICATION(User,(MeData)=>{

                                                            STORE('local','UserData',MeData);

                                                            DELETESTORAGE("local",'Email');

                                                            DELETESTORAGE("local",'MyDaa');

                                                            NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

                                                        });;
                                                        
                                                    };

                                                });
                                                
                                            } else {
                                                
                                                TOAST('Failed To Complete Account Creation');
        
                                                STYLED(LOADING,'display','none');

                                            };

                                        });

                                    });

                                } else {
            
                                    TOAST('User With Email Exists');
        
                                    STYLED(LOADING,'display','none');
                                    
                                };
            
                            });

                        });
    
                    });
    
                });
    
            } else {
                
                TOAST('Wrong Verification Code');

            };

        });

        IMAGEBUTTON(ELEMENT,'','blue','Cancel','',WHITERIGHTBACKICON,()=>{

            DELETESTORAGE("local",'Email');

            DELETESTORAGE("local",'MyDaa');

            NAVIGATOR('',ANDROIDCREATEACCOUNTPAGE,'ANDROIDLOGINPAGE');

        });

    });

};

const ANDROIDHOMEPAGE=()=>{

    CLEAR('');

    SCROLLVIEW('','','transparent',(ELEMENT)=>{

        CLEAR(ELEMENT);

        HOMEMOVIES(ELEMENT);

    });

    ROUNDFOOTER('','','#00000080','','50px',(ELEMENT)=>{

        ICON(ELEMENT,'',WHITELIBRARYICON,'25px',()=>{

            NAVIGATOR('Yes',ANDROIDCATERGORYPAGE,'ANDROIDHOMEPAGE');

        });

        ICON(ELEMENT,'',WHITEMOVIESICON,'25px',()=>{

            NAVIGATOR('Yes',ANDROIDMOVIESPAGE,'ANDROIDHOMEPAGE');

        });

        ICON(ELEMENT,'',WHITEUSERHOLDERICON,'25px',()=>{

            NAVIGATOR('Yes',ANDROIDUSERACCOUNTPAGE,'ANDROIDHOMEPAGE');

        });

    });

};

const ANDROIDUSERACCOUNTPAGE=()=>{

    CLEAR('');

    HEADER('','','transparent','','',(ELEMENT)=>{

        LEFTICON(ELEMENT,'',WHITEBACKICON,'25px','','15px',()=>{

            NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'h2','','Profile','25px','','3%',()=>{

        });

    });

    SCROLLVIEW('','','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'position','absolute');
        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'bottom','0');
        STYLED(ELEMENT,'height','auto');

        CLEAR(ELEMENT);

    });
    
};

const ANDROIDCATERGORYPAGE=()=>{

    CLEAR('');

    HEADER('','','transparent','','',(ELEMENT)=>{

        LEFTICON(ELEMENT,'',WHITEBACKICON,'25px','','15px',()=>{

            NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'h2','','Catergory','25px','','3%',()=>{

        });

    });
    
    SCROLLVIEW('','','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'position','absolute');
        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'bottom','0');
        STYLED(ELEMENT,'height','auto');

        CLEAR(ELEMENT);

        CATERGORIESMOVIES(ELEMENT);

    });
    
};

const ANDROIDMOVIESPAGE=()=>{

    CLEAR('');

    HEADER('','','transparent','','',(ELEMENT)=>{

        LEFTICON(ELEMENT,'',WHITEBACKICON,'25px','','15px',()=>{

            NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

        });

        RIGHTTEXT(ELEMENT,'h2','','Cinema','25px','','3%',()=>{

        });

    });
    
    SCROLLVIEW('','','transparent',(ELEMENT)=>{

        STYLED(ELEMENT,'position','absolute');
        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'bottom','0');
        STYLED(ELEMENT,'height','auto');

        CLEAR(ELEMENT);

        CATERGORIESMOVIES(ELEMENT);

    });
    
};

const ANDROIDMOVIEDETAILSPAGE=()=>{

    DEJSON("",'CurrentMovie',(data)=>{

        CLEAR('');

        HEADER('','','transparent','','',(ELEMENT)=>{

            LEFTICON(ELEMENT,'',WHITEBACKICON,'25px','','15px',()=>{

                NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

            RIGHTTEXT(ELEMENT,'h4','',data.MovieName,'25px','','3%',()=>{

            });

        });
    
        SCROLLVIEW('','','transparent',(ELEMENT)=>{

            STYLED(ELEMENT,'position','absolute');
            STYLED(ELEMENT,'top','50px');
            STYLED(ELEMENT,'bottom','0');
            STYLED(ELEMENT,'height','auto');

            CLEAR(ELEMENT);

            IFRAMEHOLDER(ELEMENT,'',YOUTUBELINK+data.Link,'40%','95%',(HOLD)=>{

            });

            ROUNDBUTTON(ELEMENT,'','brown','Watch','','70%',()=>{

            });

            VIEW(ELEMENT,'','transparent','95%','30%',(ELEMENST)=>{

                TEXT(ELEMENST,'h3','',data.MovieName,'20px','',()=>{

                });

                STYLED(ELEMENST,'border-radius','10px 0px 10px 0px');
                STYLED(ELEMENST,'overflow-y','hidden');
                STYLED(ELEMENST,'border','1px solid brown');

                VIEW(ELEMENST,'','#00000080','100%','auto',(ELEMENTST)=>{

                    STYLED(ELEMENTST,'border-top','1px solid brown');
                    STYLED(ELEMENTST,'top','40px');
                    STYLED(ELEMENTST,'position','absolute');
                    STYLED(ELEMENTST,'border-radius','0');
                    STYLED(ELEMENTST,'overflow-y','hidden');
                
                });

            });

        });

        FOOTER('','','#00000080','','50px',(ELEMENT)=>{

            VIEW(ELEMENT,'','transparent','35%','100%',(ELEMENTST)=>{

                STYLED(ELEMENTST,'margin-left','auto');
                STYLED(ELEMENTST,'margin-right','auto');
                STYLED(ELEMENTST,'margin-top','0rem');
                STYLED(ELEMENTST,'border-radius','0');
                STYLED(ELEMENTST,'display','inline-flex');
                STYLED(ELEMENTST,'border-right','1px solid brown');

                CENTERTEXT(ELEMENTST,'h3','','Insight','20px','',()=>{

                });
            
            });
            
            VIEW(ELEMENT,'','transparent','35%','100%',(ELEMENTST)=>{

                STYLED(ELEMENTST,'margin-left','auto');
                STYLED(ELEMENTST,'margin-right','auto');
                STYLED(ELEMENTST,'margin-top','0rem');
                STYLED(ELEMENTST,'border-radius','0');
                STYLED(ELEMENTST,'display','inline-flex');
                STYLED(ELEMENTST,'border-right','1px solid brown');

                CENTERTEXT(ELEMENTST,'h3','','Details','20px','',()=>{

                });
            
            });

            VIEW(ELEMENT,'','transparent','35%','100%',(ELEMENTST)=>{

                STYLED(ELEMENTST,'margin-left','auto');
                STYLED(ELEMENTST,'margin-right','auto');
                STYLED(ELEMENTST,'margin-top','0rem');
                STYLED(ELEMENTST,'border-radius','0');
                STYLED(ELEMENTST,'display','inline-flex');

                CENTERTEXT(ELEMENTST,'h3','','Comments','20px','',()=>{

                });
            
            });

        });
    
    });

};

const ANDROIDFORGOTPASSWORDPAGE=()=>{

    DELETESTORAGE('','UserName');
    DELETESTORAGE('','UserEmail');
    DELETESTORAGE('','UserPassword');

    CLEAR('');

    SCROLLVIEW('','','',(ELEMENT)=>{

        STYLED(ELEMENT,'background','transparent');

        APPLOGO(ELEMENT,'',localStorage.getItem('AppIcon'),'transparent','50%','50%',()=>{

            RELOADPAGE();

        });

        ROUNDINPUT(ELEMENT,'','Enter Account Email ','email',(data)=>{

            STORE('','UserEmail',data);

        });

        IMAGEBUTTON(ELEMENT,'','forestgreen','Recover','',WHITEENTERICON,()=>{

            if (!sessionStorage.getItem('UserEmail')) {
                
                TOAST('Enter User Email ');

                return;

            };

            NETWORKFUNCTIONS('',()=>{

                LOADERPAGE(ELEMENT,(LOADING)=>{

                    MYACCOUNT(sessionStorage.getItem('UserEmail'),(data)=>{

                        if (data === false) {

                            
                            TOAST('No User With Email Found');

                            STYLED(LOADING,'display','none');
                            

                        } else {

                            const MES=`Dear ${data.UserName}\n\n Your Movie Lander Account Password is ${data.UserPassword}\n\n Thank You For Using Movie Lander`
    
                            APPPOSTMAIL(MOVIELANDEREMAILAPI,sessionStorage.getItem('UserEmail'),'Account Recovery',MES,(databack)=>{

                                if (databack.status === 'success' ) {

                                    NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

                                    TOAST('Check Your Email For Instructions');
                                    
                                } else {
                                   
                                    TOAST('Something Went Wrong');

                                    STYLED(LOADING,'display','none');
                                    
                                };

                            });
                              
                        };
    
                    });
                    
                });

            });

        });

        IMAGEBUTTON(ELEMENT,'','blue','Cancel','',WHITERIGHTBACKICON,()=>{

            NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

        });

    });

};