const FORGOTPASSWORDTEMPLATE=(ELEMENT,API,DATABASENAME,LOADINGTEXT,ORIGINALTEXT,CLOUDEMAIL,EMAIL,ERRORMESSAGE,RECOVERYFAILMESSAGE,callback)=>{

    CONDITION(navigator.onLine,()=>{

        DISPLAY(ELEMENT,LOADINGTEXT);

        GETDATA(API,DATABASENAME,(data)=>{

            FINDER(data,CLOUDEMAIL,EMAIL,(ReturnedData)=>{

                CONDITION(ReturnedData[CLOUDEMAIL] === EMAIL,()=>{

                    callback(ReturnedData);

                },()=>{

                    DISPLAY(ELEMENT,ORIGINALTEXT);

                    MESSAGEDISPLAY('',RECOVERYFAILMESSAGE,'');

                });

            });
            
        },(data)=>{

            DISPLAY(ELEMENT,ORIGINALTEXT);

            MESSAGEDISPLAY('',ERRORMESSAGE,'');

        });

    },()=>{

        MESSAGEDISPLAY('','Check Your Internet','');

    });

};
export{FORGOTPASSWORDTEMPLATE};