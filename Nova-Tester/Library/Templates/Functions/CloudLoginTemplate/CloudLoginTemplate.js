const CLOUDLOGINTEMPLATE=(ELEMENT,API,DATABASENAME,ELEMENTLOADINGMESSAGE,CLOUDEMAIL,EMAIL,CLOUDPASSWORD,PASSWORD,ORIGINALTEXT,EMAILERRORMESSAGE,PASSWORDERRORMESSAGE,callback)=>{

    CONDITION(navigator.onLine,()=>{

        DISPLAY(ELEMENT,ELEMENTLOADINGMESSAGE);

        GETDATA(API,DATABASENAME,(data)=>{

            FINDER(data,CLOUDEMAIL,EMAIL,(ReturnedData)=>{

                CONDITION(ReturnedData[CLOUDEMAIL] === EMAIL ,()=>{

                    CONDITION(ReturnedData[CLOUDPASSWORD] === PASSWORD,()=>{

                        CONDITION(ReturnedData.AccountDeleted ,()=>{

                            DISPLAY(ELEMENT,ORIGINALTEXT);
    
                            MESSAGEDISPLAY('','Unable to Login','');

                        },()=>{

                            callback(ReturnedData);

                        });

                    },()=>{

                        DISPLAY(ELEMENT,ORIGINALTEXT);

                        MESSAGEDISPLAY('',PASSWORDERRORMESSAGE,'');

                    });

                },()=>{

                    DISPLAY(ELEMENT,ORIGINALTEXT);

                    MESSAGEDISPLAY('',EMAILERRORMESSAGE,'');

                });

            });
            
        },(data)=>{

            DISPLAY(ELEMENT,ORIGINALTEXT);

            MESSAGEDISPLAY('','Something Went Wrong','');

        });
        
    },()=>{

        MESSAGEDISPLAY('','Check Your Internet Connection','');

    });

};

export{CLOUDLOGINTEMPLATE};