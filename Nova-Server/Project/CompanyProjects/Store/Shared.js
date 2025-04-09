const APPDATAUPDATES=()=>{

    NETWORKTASKER(()=>{
        
        DATABASESAVER(STORELINK,'Store','Store','Store',(data)=>{

            CHECKER(data === true,() =>{

                AUTORUN();
    
            } );

            CHECKER(data === false,()=>{

                DATABASEUPDATER(STORELINK,'Store','Store','Store');

            });

        });

        const URL=`https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?usp=sharing`;

        GETDATA(URL,'StoreDesign',(data)=>{

            if (localStorage.getItem('StorePage')) {

                JSONIFICATION(data,(MyData)=>{

                    STORE('local','StorePage',MyData);

                });
                
            } else {

                JSONIFICATION(data,(MyData)=>{

                    STORE('local','StorePage',MyData);

                    HIDER(500,()=>{

                        ANDROIDHOMEPAGE();

                    });

                });
                
            };

        });

    });

};