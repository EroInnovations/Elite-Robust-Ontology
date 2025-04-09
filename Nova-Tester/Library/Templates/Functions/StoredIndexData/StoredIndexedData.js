const STOREINDEXEDDATA=(API,NAME)=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(API,NAME,(data)=>{

            const DATA={
                'Name':NAME,
                'data':data
            };

            STOREINDEXED(NAME, NAME, DATA, (data)=>{

                CHECKER(data === false,()=>{

                    UPDATEINDEX(NAME, NAME,DATA,()=>{

                    });

                } );

            });

        },(data)=>{
    
            console.log(data);
    
        });

    });

};
export{STOREINDEXEDDATA};