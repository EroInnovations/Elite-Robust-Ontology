const ACCOUNTCHECKER=(HomeCallBack,VerificationCallBack,LoginCallBack)=>{

    CONDITION(localStorage.getItem('UserData'),()=>{

        HomeCallBack();
    
    },()=>{
    
        CONDITION(localStorage.getItem('VeriifcationCode'),()=>{
    
            VerificationCallBack();
    
        },()=>{
    
            LoginCallBack();
    
        });
    
    });

};

export{ACCOUNTCHECKER};

