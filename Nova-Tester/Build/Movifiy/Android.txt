const NOVASTART=()=>{

    HOSTINGCHECKER(()=>{

       ACCOUNTCHECKER(()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

       },()=>{

            ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

       },()=>{

            ROUTE('',LOGINPAGE,'LOGINPAGE');

       });

    });

};

const LOGINPAGE=()=>{

    CLEAR('');

    IMAGE('',MOVIZ,'50%','40%','5% auto',()=>{

    });

    INPUT('', 'email', '', 'Enter User Email', ()=>{

    });

    INPUT('', 'password', '', '********', ()=>{

    });

    RIGHTTEXT('','','Forgot Password?','','20px','1rem','3% auto',()=>{

        ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');

    });

    BUTTON('','95%','50px','forestgreen','','Sign In','5% auto',()=>{

        STOREDATA(' ','UserData','On');

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

    BUTTON('','95%','50px','blue','','Create Account','',()=>{

        ROUTE(' ',CREATEACCOUNTPAGE,'CREATEACCOUNTPAGE');

    });

};

const CREATEACCOUNTPAGE=()=>{

    CLEAR('');

    IMAGE('',MOVIZ,'50%','40%','5% auto',()=>{

    });

    INPUT('', '', '', 'Enter User Name', ()=>{

    });

    INPUT('', 'email', '', 'Enter User Email', ()=>{

    });

    INPUT('', 'password', '', '********', ()=>{

    });

    BUTTON('','95%','50px','forestgreen','','Sign Up','5% auto',()=>{

        ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

    });

    BUTTON('','95%','50px','blue','','Log In','',()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });

};

const EMAILVERIFICATIONPAGE=()=>{

    CLEAR('');

    IMAGE('',MOVIZ,'50%','40%','5% auto',()=>{

    });

    INPUT('', 'tel', '', 'Enter Verification Code', ()=>{

    });

    BUTTON('','95%','50px','forestgreen','','Sign Up','5% auto',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

    BUTTON('','95%','50px','Blue','','Cancel','5% auto',()=>{

        ROUTE('',CREATEACCOUNTPAGE,'CREATEACCOUNTPAGE');

    });

};

const FORGOTPASSWORDPAGE=()=>{

    CLEAR('');

    IMAGE('',MOVIZ,'50%','40%','5% auto',()=>{

    });

    INPUT('', 'email', '', 'Enter User Email ', ()=>{

    });

    BUTTON('','95%','50px','forestgreen','','Recover','5% auto',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

    BUTTON('','95%','50px','Blue','','Cancel','5% auto',()=>{

        ROUTE('',LOGINPAGE,'LOGINPAGE');

    });

};

const HOMEPAGE=()=>{

    CLEAR('');

    FULLSCROLLVIEW('',' ',(ELEMENT)=>{

        NAVTEMPLATE(ELEMENT,' ','95%','50px','',(ELEMENTS)=>{

            LEFTTEXT(ELEMENTS,'h3','Moviz','red','20px','','',()=>{

            });

            RIGHTIMAGE(ELEMENTS,WHITEUSERICON,'25px','25px','0.5rem','',()=>{

            });

        });

    });

    ROUNDFOOTER('','forestgreen','95%','50px','50px',(ELEMENT)=>{

        ICON(ELEMENT,WHITELIBRARYICON,'25px','25px','',()=>{

        });

        ICON(ELEMENT,WHITESCREENICON,'25px','25px','',()=>{

        });

        ICON(ELEMENT,WHITESETTINGSICON,'25px','25px','',()=>{

        });

    });

};