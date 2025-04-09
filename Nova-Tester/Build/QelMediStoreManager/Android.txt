const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const TEXTCOLOR='#cdcdcd';
const APPCOLORS='#0F990F';

const NOVASTART=()=>{

    APPDATA();

    APPMODE(localStorage.getItem('DarkMode')||APPCOLORS);

    CONDITION(localStorage.getItem('DarkMode'),()=>{

        MYACCOUNT();

    },()=>{

        CLEAR('');

        CENTERVIEW('','#333333',(ELEMENT)=>{
    
            CENTERTEXT(ELEMENT,'','Qel Manager',APPCOLORS,'30px','10% auto',()=>{
    
            });
    
            CENTERTEXT(ELEMENT,'','Choose App Mode',APPCOLORS,'15px','',()=>{
    
            });
    
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Dark Mode','',WHITEMOONICON,'50px','10% auto auto auto',()=>{
    
                STOREDATA(' ','DarkMode','#333333');
    
               RELOAD();

            });
    
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Light Mode','',WHITESUNICON,'50px','5% auto',()=>{
    
                STOREDATA(' ','DarkMode',TEXTCOLOR);
    
                RELOAD();
    
            });
    
        });

    });

};

const MYACCOUNT=()=>{

    ACCOUNTCHECKER(()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

    },()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });

};

const HOMEPAGE=()=>{

    USERMONITORING();

    APPDATA();

    CLEAR('');

    FULLSCROLLVIEW('',' ',(ELEMENTS)=>{

        PRODUCTS(ELEMENTS);

    });

    FLOATFIXEDBUTTON('',APPCOLORS,(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEPOSTICON,'20px','20px','',()=>{

            ROUTE(' ',CREATIONPAGE,'HOMEPAGE');

        });

    });

};

const LOGINPAGE=()=>{

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', (data)=>{

        STOREDATA('','UserEmail',data);

    });

    INPUT('', 'password', APPCOLORS, '********', (data)=>{

        STOREDATA('','UserPassword',data);

    });

    IMAGEBUTTON('',APPCOLORS,'Sign In','',WHITEENTERICON,'50px','10% auto',()=>{

        CONDITION(sessionStorage.getItem('UserEmail'),()=>{

            CONDITION(sessionStorage.getItem('UserPassword'),()=>{

                CONDITION(navigator.onLine,()=>{

                    MESSAGEDISPLAY('','Please Wait,While We Comfirm Admin','');

                    GETDATA(API,'AdminUsers',(data)=>{

                        FINDER(data,'UserEmail',sessionStorage.getItem('UserEmail'),(Users)=>{

                            CONDITION(Users.UserEmail === sessionStorage.getItem('UserEmail'),()=>{

                                CONDITION(Users.UserPassword === sessionStorage.getItem('UserPassword'),()=>{

                                    CONDITION(Users.Approved,()=>{

                                        JSONIFICATION(Users,(MyData)=>{

                                            STOREDATA(' ','UserData',MyData);
    
                                            ROUTE('',HOMEPAGE,'HOMEPAGE');
    
                                        });

                                    },()=>{

                                        MESSAGEDISPLAY('','Something Went Wrong','');

                                    });

                                } ,()=>{

                                    MESSAGEDISPLAY('','Wrong Admin Password','');

                                });

                            } ,()=>{

                                MESSAGEDISPLAY('','No Admin Found','');

                            });

                        });

                    });

                },()=>{
        
                    MESSAGEDISPLAY('','Your Offline,Check Your Internet','');
        
                });

            },()=>{
    
                MESSAGEDISPLAY('','Enter Admin Password','');
    
            });

        },()=>{

            MESSAGEDISPLAY('','Enter Admin Email','');

        });

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Forgot Password!','','16px','1rem','',()=>{

            ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};

const FORGOTPASSWORDPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', (data)=>{

        STOREDATA('','UserEmail',data);

    });


    IMAGEBUTTON('',APPCOLORS,'Recover','',WHITEENTERICON,'50px','10% auto',()=>{

        CONDITION( sessionStorage.getItem('UserEmail'),()=>{

            CONDITION(navigator.onLine,()=>{

                MESSAGEDISPLAY('','Please Wait While We Verify User','');

                GETDATA(API,'AdminUsers',(data)=>{
        
                    FINDER(data,'UserEmail',sessionStorage.getItem('UserEmail'),(Users)=>{

                        CONDITION(Users.UserEmail === sessionStorage.getItem('UserEmail'),()=>{

                            const MESSAGE=`Dear ${Users.UserName},\n\n Thank Your For Creating An Account With Qel Medistore\n\n Your Password To Your Account Is ====> ${Users.UserPassword}<====,\n\n Thank You ,From Qel Medistore Team;`

                            QELMAIL(sessionStorage.getItem('UserEmail'),'Medi Store Account Password',MESSAGE,()=>{

                                MESSAGEDISPLAY('','Password Link Sent to Your Email','');

                                ROUTE('',LOGINPAGE,'LOGINPAGE');

                            },()=>{

                                MESSAGEDISPLAY('','Failed to Send Verification Code','');

                            });

                        } ,()=>{

                            
                            MESSAGEDISPLAY('','No Admin Found With Email',''); 

                        });

                    });

                });

            },()=>{
    
                MESSAGEDISPLAY('','Check Your Internet','');
    
            });

        },()=>{

            MESSAGEDISPLAY('','Enter Admin Email','');

        });

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Login In','','16px','1rem','',()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');

        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            ROUTE('',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};

const CREATEACCOUNTPAGE=()=>{

    DELETEDATA('','UserEmail');

    DELETEDATA('','UserPassword');

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'text', APPCOLORS, 'Enter User Name', (data)=>{

        STOREDATA('','UserName',data);

    });

    INPUT('', 'email', APPCOLORS, 'Enter Admin Email', (data)=>{

        STOREDATA('','UserEmail',data);

    });

    INPUT('', 'password', APPCOLORS, '********', (data)=>{

        STOREDATA('','UserPassword',data);

    });

    IMAGEBUTTON('',APPCOLORS,'Sign Up','',WHITEENTERICON,'50px','10% auto',()=>{

        CONDITION(navigator.onLine,()=>{

            CONDITION(sessionStorage.getItem('UserName'),()=>{

                CONDITION(sessionStorage.getItem('UserEmail'),()=>{
    
                    CONDITION(sessionStorage.getItem('UserPassword'),()=>{
        
                        CONDITION(navigator.onLine,()=>{
        
                            MESSAGEDISPLAY('','Please Wait,While We Comfirm Admin','');
        
                            GETDATA(API,'AdminUsers',(data)=>{
        
                                FINDER(data,'UserEmail',sessionStorage.getItem('UserEmail'),(Users)=>{
        
                                    CONDITION(Users.UserEmail === sessionStorage.getItem('UserEmail'),()=>{
        
                                        MESSAGEDISPLAY('','Admin Found With Email',''); 
        
                                    } ,()=>{

                                        RANDOMCODE((code)=>{

                                            const MESSAGE=`Dear ${sessionStorage.getItem('UserName')},\n\n Thank Your For Creating An Account as A new Employee of Qel Medistore\n\n Your Verification Code is ${code},\n\n Thank You ,From Qel Medistore Team;`

                                            QELMAIL(sessionStorage.getItem('UserEmail'),'Medi Store Account Creation',MESSAGE,()=>{

                                                STOREDATA(' ','VeriifcationCode',code);

                                                ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

                                                const MaData={
                                                        'UserName':sessionStorage.getItem('UserName'),
                                                        'UserEmail':sessionStorage.getItem('UserEmail'),
                                                        'UserPassword':sessionStorage.getItem('UserPassword'),
                                                        'UserCode':code,
                                                        'UserPhoto':'',
                                                    }
                                                

                                                JSONIFICATION(MaData,(MyData)=>{
                        
                                                    STOREDATA(' ','UserDatata',MyData);
            
                                                });


                                            },()=>{
    
                                                MESSAGEDISPLAY('','Failed to Send Verification Code','');
    
                                            });

                                        });
             
                                    });
        
                                });
        
                            });
        
                        },()=>{
                
                            MESSAGEDISPLAY('','Your Offline,Check Your Internet','');
                
                        });
        
                    },()=>{
            
                        MESSAGEDISPLAY('','Enter Admin Password','');
            
                    });
        
                },()=>{
        
                    MESSAGEDISPLAY('','Enter Admin Email','');
        
                });
    
            },()=>{
    
                MESSAGEDISPLAY('','Enter Admin UserName','');
    
            });

        },()=>{

            MESSAGEDISPLAY('','Your Offline','');

        });

    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Privacy Policy!','','16px','1rem','',()=>{

        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Log In?','','16px','1rem','',()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');

        });

    });
    
};

const EMAILVERIFICATIONPAGE=()=>{

    CLEAR('');

    CENTERTEXT('','','Qel Manager',APPCOLORS,'30px','20% auto',()=>{

    });

    INPUT('', 'tel', APPCOLORS, 'Enter Verification Code', (data)=>{

        STOREDATA('','Code',data);

    });

    IMAGEBUTTON('',APPCOLORS,'Verify','',WHITECHECKICON,'50px','10% auto',()=>{

        CONDITION(sessionStorage.getItem('Code'),()=>{

            CONDITION(sessionStorage.getItem('Code') === localStorage.getItem('VeriifcationCode') ,()=>{

                CONDITION(navigator.onLine,()=>{

                    MESSAGEDISPLAY('','Please Wait Admin Is Being Created','');

                    DEJSON(localStorage.getItem('UserDatata'),(DAta)=>{

                        console.log(DAta);

                        STOREDATA('','Users',DAta.UserEmail);
        
                        const HEADER=['UserName','UserEmail','UserPassword','Date','RandomCode','UserPhoto','Approved'];
            
                        const INFO=[DAta.UserName,DAta.UserEmail,DAta.UserPassword,new Date(),DAta.UserCode,'','Approved'];

                        INSERTDATA(API,'AdminUsers',HEADER,INFO,()=>{
            
                            GETDATA(API,'AdminUsers',(data)=>{

                                FINDER(data,'UserEmail',sessionStorage.getItem('Users'),(Users)=>{

                                    CONDITION(Users.UserEmail === sessionStorage.getItem('Users'),()=>{

                                        JSONIFICATION(Users,(MyData)=>{

                                            STOREDATA(' ','UserData',MyData);

                                            ROUTE('',HOMEPAGE,'HOMEPAGE');

                                        });

                                    } ,()=>{

                                        MESSAGEDISPLAY('','No Admin Found','');

                                    });

                                });

                            });

                        },()=>{

                        });

                    });

                },()=>{

                    MESSAGEDISPLAY('','Check Your Internet','');

                });
            
            },()=>{
    
                MESSAGEDISPLAY('','Wrong Verification Code','');
    
            });

        },()=>{

            MESSAGEDISPLAY('','Enter Verification Code','');

        });
        
    });

    NAVTEMPLATE('',APPCOLORS,'80%','50px','30% auto',(ELEMENT)=>{

        LEFTTEXT(ELEMENT,'','Login In','','16px','1rem','',()=>{

            DELETEDATA(' ','VeriifcationCode');

            ROUTE('',LOGINPAGE,'LOGINPAGE');


        });

        CENTERTEXT(ELEMENT,'','||','Orange','38px','',()=>{

        });

        RIGHTTEXT(ELEMENT,'','Create Account?','','16px','1rem','',()=>{

            DELETEDATA(' ','VeriifcationCode');

            ROUTE('',CREATEACCOUNTPAGE,'LOGINPAGE');

        });

    });
    
};

const CREATIONPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'Management',APPCOLORS,'',(ELEMENT)=>{

        IMAGEBUTTON(ELEMENT,APPCOLORS,'New Catergory','',WHITEGROUPICON,'50px','1% auto',()=>{

            ROUTE(' ',NEWCATERGORYPAGE,'CREATIONPAGE');
    
        });
        
        IMAGEBUTTON(ELEMENT,APPCOLORS,'New Product','',WHITEGROUPICON,'50px','1% auto',()=>{

            DELETEDATA('','Category');
            DELETEDATA('','CategoryName');
            DELETEDATA('','Name');
            DELETEDATA('','Price');
            DELETEDATA('','Details');
            DELETEDATA('','Image');
            DELETEDATA('','ImageOne');
            DELETEDATA('','ImageTwo');
            DELETEDATA('','ImageThree');
            DELETEDATA('','Number');

            ROUTE(' ',NEWPRODUCTPAGE,'CREATIONPAGE');
    
        });

        IMAGEBUTTON(ELEMENT,APPCOLORS,'All Catergories','',WHITEGROUPICON,'50px','1% auto',()=>{

            ROUTE(' ',ALLCATERGORYPAGE,'CREATIONPAGE');
    
        });

        IMAGEBUTTON(ELEMENT,APPCOLORS,'HireEmployee','',WHITESUITCASEICON,'50px','1% auto',()=>{

            alert('Still Under Development');
    
        });

        IMAGEBUTTON(ELEMENT,APPCOLORS,'Sync App','',WHITEGROUPICON,'50px','1% auto',()=>{

            RELOAD();
    
        });

        IMAGEBUTTON(ELEMENT,APPCOLORS,'Log Out','',WHITELOGOUTICON,'50px','1% auto',()=>{

            DELETEDATA(' ','UserData');

            RELOAD();
    
        });

    });

};

const NEWCATERGORYPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CREATIONPAGE,'CREATIONPAGE');

    },'Catergory',APPCOLORS,'',(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Create a New Catergory',APPCOLORS,'30px','10% auto',()=>{

        });
    
        INPUT(ELEMENT, '', APPCOLORS, 'Enter Catergory Name', (data)=>{

            STOREDATA('','Name',data);
    
        });

        TEXTAREA(ELEMENT,'',APPCOLORS,'300px','Describe The Catergory',(data)=>{

            STOREDATA('','Details',data);

        });

        CENTERTEXT(ELEMENT,'','Add Catergory Image',APPCOLORS,'20px','10% auto',()=>{

        });

        IMAGE(ELEMENT,WHITEHOMEICON,'','300px','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS, (data)=>{

                STOREDATA('','Image',data);

            });

        });
    
        IMAGEBUTTON(ELEMENT,APPCOLORS,'Create','',WHITEENTERICON,'50px','10% auto',()=>{
    
            CONDITION(sessionStorage.getItem('Name'),()=>{

                CONDITION(sessionStorage.getItem('Details'),()=>{

                    CONDITION(sessionStorage.getItem('Image'),()=>{

                        CONDITION(navigator.onLine,()=>{

                            MESSAGEDISPLAY('','Please Wait','');

                            GETDATA(API,'Catergory',(data)=>{

                                FINDER(data,'ProductName',sessionStorage.getItem('Name'),(resback)=>{

                                    CONDITION(resback.ProductName === sessionStorage.getItem('Name'),()=>{

                                        MESSAGEDISPLAY('','Catergory Name Exists','');

                                    },()=>{

                                        MESSAGEDISPLAY('','Creating New Catergory','');

                                        const HEADERS=['ProductName','ProductDetails','ProductImage','ProductDate','Approved','CreatedBy'];

                                        const INFO=[sessionStorage.getItem('Name'),sessionStorage.getItem('Details'),sessionStorage.getItem('Image'),new Date(),'Approved',sessionStorage.getItem('UserID')];

                                        INSERTDATA(API,'Catergory',HEADERS,INFO,()=>{

                                            GETDATA(API,'Catergory',(data)=>{

                                                const MYDATA={
                                                    'Name':'Catergory',
                                                    'data':data
                                                }

                                                STOREINDEXED('Catergory', 'Catergory', MYDATA, (datata)=>{

                                                    CONDITION(datata === false,()=>{

                                                        UPDATEINDEX('Catergory', 'Catergory', MYDATA,()=>{
                                                          
                                                            ROUTE('',HOMEPAGE,'HOMEPAGE');
                                                            
                                                        })

                                                    } ,()=>{

                                                        ROUTE('',HOMEPAGE,'HOMEPAGE');

                                                    });

                                                });

                                            });

                                        },()=>{

                                            MESSAGEDISPLAY('','Failed To Create New Catergory','');

                                        });

                                    });

                                    console.log(resback);
                                });

                            },(data)=>{

                                console.log(data);

                            });

                        },()=>{
            
                            MESSAGEDISPLAY('','Your OffLine,Check Your Internet','');
            
                        });

                    },()=>{
        
                        MESSAGEDISPLAY('','Add Catergory Image','');
        
                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter Catergory Details','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Enter Catergory Name','');

            });

        });

    });

};

const NEWPRODUCTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',CREATIONPAGE,'CREATIONPAGE');

    },'Product',APPCOLORS,'',(ELEMENT)=>{

        CENTERTEXT(ELEMENT,'','Create a New Product',APPCOLORS,'30px','10% auto',()=>{

        });

        IMAGEBUTTON(ELEMENT,APPCOLORS,sessionStorage.getItem('CategoryName')||'Select Catergory','',sessionStorage.getItem('CategoryImage')||WHITEGROUPICON,'50px','',()=>{

            CENTERVIEW('',APPCOLORS,(ELEMENTS)=>{

                STYLED(ELEMENTS,'overflow','hidden');

                HEADER(ELEMENTS,'#ffffff',(ELEMS)=>{

                    LEFTTEXT(ELEMS,'','Catergories',APPCOLORS,'20px','','',()=>{

                    });

                    RIGHTTEXT(ELEMS,'','Close',APPCOLORS,'20px','','',()=>{

                        STYLED(ELEMENTS,'display','none');

                    });

                });

                VIEW(ELEMENTS,' ','','','',(ELEMENTSERS)=>{

                    CLEAR(ELEMENTSERS);

                    STYLED(ELEMENTSERS,'top','50px');

                    GETINDEXEDDATA('Catergory', 'Catergory', (data)=>{

                        CHECKER(data.Approved,()=>{

                            IMAGEBUTTON(ELEMENTSERS,'#333',data.ProductName,'',data.ProductImage,'50px','1% auto',(ELEMENT)=>{

                                STOREDATA('','Category',data.ID);

                                STOREDATA('','CategoryName',data.ProductName);

                                STOREDATA('','CategoryImage',data.ProductImage);

                                STYLED(ELEMENTS,'display','none');

                                NEWPRODUCTPAGE();

                            });
                
                        });
                
                    });

                })

            });
    
        });
    
        INPUT(ELEMENT, '', APPCOLORS,sessionStorage.getItem('Name')|| 'Enter Product Name', (data)=>{

            STOREDATA('','Name',data);
    
        });

        INPUT(ELEMENT, 'tel', APPCOLORS,sessionStorage.getItem('Price')|| 'Enter Product Price', (data)=>{

            STOREDATA('','Price',data);
    
        });

        INPUT(ELEMENT, 'tel', APPCOLORS,sessionStorage.getItem('Number')|| 'Enter Product Qantity', (data)=>{

            STOREDATA('','Number',data);
    
        });

        TEXTAREA(ELEMENT,'',APPCOLORS,'300px',sessionStorage.getItem('Details')||'Describe The Product',(data)=>{

            STOREDATA('','Details',data);

        });

        CENTERTEXT(ELEMENT,'','Add Product Image',APPCOLORS,'20px','10% auto',()=>{

        });

        IMAGE(ELEMENT,sessionStorage.getItem('Image')||WHITEHOMEICON,'','300px','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS, (data)=>{

                STOREDATA('','Image',data);

            });

        });

        CENTERTEXT(ELEMENT,'','Add Other Image Of Same Product',APPCOLORS,'20px','10% auto',()=>{

        });

        IMAGE(ELEMENT,sessionStorage.getItem('ImageOne')||WHITEHOMEICON,'','300px','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS, (data)=>{

                STOREDATA('','ImageOne',data);

            });

        });

        IMAGE(ELEMENT,sessionStorage.getItem('ImageTwo')||WHITEHOMEICON,'','300px','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS, (data)=>{

                STOREDATA('','ImageTwo',data);

            });

        });

        IMAGE(ELEMENT,sessionStorage.getItem('ImageThree')||WHITEHOMEICON,'','300px','',(ELEMENTS)=>{

            IMAGEPICKER(ELEMENTS, (data)=>{

                STOREDATA('','ImageThree',data);

            });

        });

        IMAGEBUTTON(ELEMENT,APPCOLORS,'Add Product','',WHITECHECKICON,'50px','10% auto',()=>{
    
            CONDITION(sessionStorage.getItem('Category'),()=>{

                CONDITION(sessionStorage.getItem('Name'),()=>{

                    CONDITION(sessionStorage.getItem('Price'),()=>{

                        CONDITION(sessionStorage.getItem('Number'),()=>{

                            CONDITION(sessionStorage.getItem('Details'),()=>{

                                CONDITION(sessionStorage.getItem('Image'),()=>{
        
                                    CONDITION(navigator.onLine,()=>{
        
                                        MESSAGEDISPLAY('','Please Wait','');
        
                                        const HEADERS=['ProductName','ProductPrice','ProductDetails','ProductCatergory','ProductImage','ProductImageOne','ProductImageTwo','ProductImageThree','CreatedOn','CreatedBy','Approved','ProductNumber'];
                        
                                        const INFO=[sessionStorage.getItem('Name'),sessionStorage.getItem('Price'),sessionStorage.getItem('Details'),sessionStorage.getItem('Category'),sessionStorage.getItem('Image'),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('ImageThree'),new Date(),sessionStorage.getItem('UserID'),'Approved',sessionStorage.getItem('Number')];
        
                                        INSERTDATA(API,'Products',HEADERS,INFO,()=>{
    
                                            GETDATA(API,'Products',(data)=>{
    
                                                const MYDATA={
                                                    'Name':'Products',
                                                    'data':data
                                                }
    
                                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                                    CONDITION(datata === false,()=>{
    
                                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                                          
                                                            ROUTE('',HOMEPAGE,'HOMEPAGE');
                                                            
                                                        })
    
                                                    } ,()=>{
    
                                                        ROUTE('',HOMEPAGE,'HOMEPAGE');
    
                                                    });
    
                                                });
    
                                            });
    
                                        },()=>{
    
                                            MESSAGEDISPLAY('','Failed to Add Product','');
    
                                        });
        
                                    },()=>{
                        
                                        MESSAGEDISPLAY('','Check Your Internet','');
                        
                                    });
        
                                },()=>{
                    
                                    MESSAGEDISPLAY('','Add Product Details','');
                    
                                });
        
                            },()=>{
                
                                MESSAGEDISPLAY('','Product Details','');
                
                            });

                        },()=>{

                            MESSAGEDISPLAY('','Enter Product Qantity','');

                        });

                    },()=>{

                        MESSAGEDISPLAY('','Enter Product Price','');

                    });

                },()=>{
    
                    MESSAGEDISPLAY('','Enter Product Name','');
    
                });

            },()=>{

                MESSAGEDISPLAY('','Select Product Catergory','');

            });

        });

    });

};

const APPDATA=()=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(API,'Catergory',(data)=>{

            const MYDATA={
                'Name':'Catergory',
                'data':data
            }
    
            STOREINDEXED('Catergory', 'Catergory', MYDATA, (datata)=>{
    
                CONDITION(datata === false,()=>{
    
                    UPDATEINDEX('Catergory', 'Catergory', MYDATA,()=>{
                 
                    })
    
                } ,()=>{
    
    
                });
    
            });
    
        });

        GETDATA(API,'Products',(data)=>{

            const MYDATA={
                'Name':'Products',
                'data':data
            }
    
            STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                CONDITION(datata === false,()=>{
    
                    UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                 
                    })
    
                } ,()=>{
    
    
                });
    
            });
    
        });

    });

};

const PRODUCTS=(ELEMENT)=>{

    GETINDEXEDDATA('Products', 'Products', (data)=>{

        VIEW(ELEMENT,'transparent','45%','25%','1% 1% 5% 1%',(ELEMENTS)=>{

            STYLED(ELEMENTS,'display','inline-table');
               
            IMAGE(ELEMENTS,data.ProductImage,'100%','250px',' 0',()=>{

            });

            CONDITION(data.Approved,()=>{

                FOOTER(ELEMENTS,'#0F990F80','','50px',(ELEMENTSE)=>{

                    LEFTTEXT(ELEMENTSE,'',data.ProductName,TEXTCOLOR,'14.1px','0.3rem','',()=>{
    
                    });
    
                    RIGHTTEXT(ELEMENTSE,'',data.ProductPrice ,TEXTCOLOR,'16px','0.3rem','',()=>{
    
                    });
    
                });

            },()=>{

                FOOTER(ELEMENTS,'red','','50px',(ELEMENTSE)=>{

                    LEFTTEXT(ELEMENTSE,'',data.ProductName,TEXTCOLOR,'14.1px','0.3rem','',()=>{
    
                    });
    
                    RIGHTTEXT(ELEMENTSE,'',data.ProductPrice ,TEXTCOLOR,'16px','0.3rem','',()=>{
    
                    });
    
                });

            })

            CLICK(ELEMENTS,()=>{

                JSONIFICATION(data,(MyData)=>{

                    STOREDATA('','Product',MyData);

                    ROUTE(' ',PRODUTVIEWPAGE,'HOMEPAGE');

                });

            });

        });

    });

};

const PRODUTVIEWPAGE=()=>{

    DEJSON(sessionStorage.getItem('Product'),(data)=>{

        LEFTTEXTBACKHEADERBODY('',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');
    
        },data.ProductName,APPCOLORS,'',(ELEMENT)=>{

            CENTERTEXT(ELEMENT,'',data.ProductName,APPCOLORS,'20px','',()=>{

            });

            INPUT(ELEMENT, '', APPCOLORS, data.ProductName||'Enter Product New Name', (data)=>{

                STOREDATA('','NewName',data);

            });
        
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Update Product Name','',WHITECHECKICON,'50px','auto auto 5% auto',()=>{

                CONDITION(sessionStorage.getItem('NewName'),()=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[sessionStorage.getItem('NewName'),data.ProductPrice,data.ProductDetails,data.ProductCatergory,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,'Admin','Approved',data.ProductNumber];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });

                },()=>{

                    MESSAGEDISPLAY('','Enter New Product Name','');

                });
        
            });

            INPUT(ELEMENT, 'tel', APPCOLORS, data.ProductPrice||'Enter Product New Price', (data)=>{

                STOREDATA('','NewPrice',data);

            });
        
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Update Product Price','',WHITECHECKICON,'50px','',()=>{

                CONDITION(sessionStorage.getItem('NewPrice'),()=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[data.ProductName,sessionStorage.getItem('NewPrice'),data.ProductDetails,data.ProductCatergory,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });

                },()=>{

                    MESSAGEDISPLAY('','Enter New Product Price','');

                });
        
            });

            INPUT(ELEMENT, 'tel', APPCOLORS, data.ProductNumber||'Enter Product New Quantity', (data)=>{

                STOREDATA('','NewNumber',data);

            });
        
            IMAGEBUTTON(ELEMENT,APPCOLORS,'Update Product Quantity','',WHITECHECKICON,'50px','',()=>{

                CONDITION(sessionStorage.getItem('NewNumber'),()=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,data.ProductCatergory,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',sessionStorage.getItem('NewNumber')];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });

                },()=>{

                    MESSAGEDISPLAY('','Enter New Product Quantity','');

                });
        
            });

            TEXTAREA(ELEMENT,'',APPCOLORS,'300px',data.ProductDetails,(data)=>{

                STOREDATA('','NewDetails',data);
    
            });

            IMAGEBUTTON(ELEMENT,APPCOLORS,'Update Product Details','',WHITECHECKICON,'50px','',()=>{

                CONDITION(sessionStorage.getItem('NewDetails'),()=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[data.ProductName,data.ProductPrice,sessionStorage.getItem('NewDetails'),data.ProductCatergory,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });

                },()=>{

                    MESSAGEDISPLAY('','Enter New Product Details','');

                });
        
            });

            CENTERTEXT(ELEMENT,'','Click Image to Update',APPCOLORS,'20px','5% auto',()=>{

            });
    
            IMAGE(ELEMENT,data.ProductImage||WHITEHOMEICON,'','300px','1% auto',(ELEMENTS)=>{

                IMAGEPICKER(ELEMENTS, (datata)=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,data.ProductCatergory,datata,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });
    
                });
    
            });

            IMAGE(ELEMENT,data.ProductImageOne||WHITEHOMEICON,'','300px','1% auto',(ELEMENTS)=>{

                IMAGEPICKER(ELEMENTS, (datata)=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,data.ProductCatergory,data.ProductImage,datata,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });
    
                });
    
            });

            IMAGE(ELEMENT,data.ProductImageTwo||WHITEHOMEICON,'','300px','1% auto',(ELEMENTS)=>{

                IMAGEPICKER(ELEMENTS, (datata)=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,data.ProductCatergory,data.ProductImage,data.ProductImageOne,datata,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });
    
                });
    
            });

            IMAGE(ELEMENT,data.ProductImageThree||WHITEHOMEICON,'','300px','1% auto',(ELEMENTS)=>{

                IMAGEPICKER(ELEMENTS, (datata)=>{

                    CONDITION(navigator.onLine,()=>{

                        MESSAGEDISPLAY('','Product Is Being Updated','');
    
                        const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,data.ProductCatergory,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,datata,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];
        
                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
    
                            GETDATA(API,'Products',(data)=>{
    
                                const MYDATA={
                                    'Name':'Products',
                                    'data':data
                                }
    
                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
    
                                    CONDITION(datata === false,()=>{
    
                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                          
                                            MESSAGEDISPLAY('','Product Updated','');
                                            
                                        })
    
                                    } ,()=>{
    
                                        MESSAGEDISPLAY('','Product Updated','');
    
                                    });
    
                                });
    
                            });
    
                        },()=>{
    
                            MESSAGEDISPLAY('','Failed to Update Product','');
    
                        });
    
                    },()=>{
    
                        MESSAGEDISPLAY('','Check Your Internet','');
    
                    });
    
                });
    
            });

            IMAGEBUTTON(ELEMENT,'blue','Now In Stock','',WHITECHECKICON,'50px','1% auto',()=>{

                CONDITION(navigator.onLine,()=>{

                    MESSAGEDISPLAY('','Product Is Being Updated','');

                    const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,data.ProductCatergory,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];

                    UPDATEDATA(API,'Products',data.ID,INFO,()=>{

                        GETDATA(API,'Products',(data)=>{

                            const MYDATA={
                                'Name':'Products',
                                'data':data
                            }

                            STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{

                                CONDITION(datata === false,()=>{

                                    UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                      
                                        ROUTE('',HOMEPAGE,'HOMEPAGE');
                                        
                                    })

                                } ,()=>{

                                    ROUTE('',HOMEPAGE,'HOMEPAGE');

                                });

                            });

                        });

                    },()=>{

                        MESSAGEDISPLAY('','Failed to Update Product','');

                    });

                },()=>{

                    MESSAGEDISPLAY('','Check Your Internet','');

                });
  
            });

            IMAGEBUTTON(ELEMENT,APPCOLORS,'Catergory','',WHITEGROUPICON,'50px','',()=>{

                CENTERVIEW('',APPCOLORS,(ELEMENTS)=>{
    
                    STYLED(ELEMENTS,'overflow','hidden');
    
                    HEADER(ELEMENTS,'#ffffff',(ELEMS)=>{
    
                        LEFTTEXT(ELEMS,'','Catergories',APPCOLORS,'20px','','',()=>{
    
                        });
    
                        RIGHTTEXT(ELEMS,'','Close',APPCOLORS,'20px','','',()=>{
    
                            STYLED(ELEMENTS,'display','none');
    
                        });
    
                    });
    
                    VIEW(ELEMENTS,' ','','','',(ELEMENTSERS)=>{
    
                        CLEAR(ELEMENTSERS);
    
                        STYLED(ELEMENTSERS,'top','50px');
    
                        GETINDEXEDDATA('Catergory', 'Catergory', (datate)=>{
    
                            CHECKER(datate.Approved,()=>{
    
                                IMAGEBUTTON(ELEMENTSERS,'#333',datate.ProductName,'',WHITEGROUPICON,'50px','1% auto',()=>{

                                    CONDITION(navigator.onLine,()=>{

                                        MESSAGEDISPLAY('','Product Is Being Updated','');
                    
                                        const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,datate.ID,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'Approved',data.ProductNumber];
                        
                                        UPDATEDATA(API,'Products',data.ID,INFO,()=>{
                    
                                            GETDATA(API,'Products',(data)=>{
                    
                                                const MYDATA={
                                                    'Name':'Products',
                                                    'data':data
                                                }
                    
                                                STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{
                    
                                                    CONDITION(datata === false,()=>{
                    
                                                        UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                                          
                                                            MESSAGEDISPLAY('','Product Updated','');

                                                            STYLED(ELEMENTS,'display','none');
                                                            
                                                        })
                    
                                                    } ,()=>{
                    
                                                        MESSAGEDISPLAY('','Product Updated','');

                                                        STYLED(ELEMENTS,'display','none');
                    
                                                    });
                    
                                                });
                    
                                            });
                    
                                        },()=>{
                    
                                            MESSAGEDISPLAY('','Failed to Update Product','');
                    
                                        });
                    
                                    },()=>{
                    
                                        MESSAGEDISPLAY('','Check Your Internet','');
                    
                                    });
    
                                });
                    
                            });
                    
                        });
    
                    })
    
                });
        
            });
    
            IMAGEBUTTON(ELEMENT,'brown','Out Of Stock','',WHITECLOSEICON,'50px','1% auto',()=>{

                CONDITION(navigator.onLine,()=>{

                    MESSAGEDISPLAY('','Product Is Being Updated','');

                    const INFO=[data.ProductName,data.ProductPrice,data.ProductDetails,data.ProductCatergory,data.ProductImage,data.ProductImageOne,data.ProductImageTwo,data.ProductImageThree,data.CreatedOn,sessionStorage.getItem('UserID'),'',data.ProductNumber];
    
                    UPDATEDATA(API,'Products',data.ID,INFO,()=>{

                        GETDATA(API,'Products',(data)=>{

                            const MYDATA={
                                'Name':'Products',
                                'data':data
                            }

                            STOREINDEXED('Products', 'Products', MYDATA, (datata)=>{

                                CONDITION(datata === false,()=>{

                                    UPDATEINDEX('Products', 'Products', MYDATA,()=>{
                                      
                                        ROUTE('',HOMEPAGE,'HOMEPAGE');
                                        
                                    })

                                } ,()=>{

                                    ROUTE('',HOMEPAGE,'HOMEPAGE');

                                });

                            });

                        });

                    },()=>{

                        MESSAGEDISPLAY('','Failed to Update Product','');

                    });

                },()=>{

                    MESSAGEDISPLAY('','Check Your Internet','');

                });

            });

        });

    });

};

const ALLCATERGORYPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    },'All Catergories',APPCOLORS,'',(ELEMENT)=>{

        GETINDEXEDDATA('Catergory', 'Catergory', (data)=>{

            CHECKER(data.Approved,()=>{
    
                IMAGEBUTTON(ELEMENT,APPCOLORS,data.ProductName,'',data.ProductImage,'50px','1% auto',(ELEMENT)=>{
        
                });
    
            });
    
        });
    
    });

};

const USERMONITORING=()=>{

    DEJSON(localStorage.getItem('UserData'),(MaData)=>{

        GETDATA(API,'AdminUsers',(data)=>{

            FINDER(data,'UserEmail',MaData.UserEmail,(Users)=>{
    
                CONDITION(Users.UserEmail === MaData.UserEmail,()=>{
    
                    CONDITION(Users.Approved,()=>{
    
                        JSONIFICATION(Users,(MyData)=>{

                            STOREDATA(' ','UserData',MyData);

                            STOREDATA('','UserData',Users.UserEmail);

                            STOREDATA('','UserID',Users.ID);

                        });

                    },()=>{

                        DELETEDATA(' ','UserData');

                        RELOAD();

                    });
    
                } ,()=>{
    
                    MESSAGEDISPLAY('','No Admin Found','');

                    DELETEDATA(' ','UserData');

                    RELOAD();
    
                });
    
            });
    
        });

    });

}