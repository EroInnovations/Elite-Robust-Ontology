const VISITOR=(API,NAME)=>{

    CONDITION(localStorage.getItem('Environment') === 'Development',()=>{

        console.log('Under Building');

    },()=>{

        DEVICE((data)=>{

            CHECKER(navigator.onLine,()=>{
    
                GETDATA(API,NAME,(MyData)=>{
    
                    FINDER(MyData,'ID',localStorage.getItem('ID'),(Users)=>{
    
                        CONDITION(Users.ID === localStorage.getItem('ID'),()=>{
    
                            JSONADDER ( Users.RevistDate,[new Date()],(dataDat)=>{
    
                                const INFO=[data,Users.Date,Users.Language,Users.DeviceScreen,dataDat,Users.VistedTimes+1,localStorage.getItem('OperatingSystem')];
                            
                                UPDATEDATA(API,NAME,Users.ID,INFO,(datata)=>{
                
                                },()=>{
                
                                });
    
                            });
    
                        },()=>{
                            
                            JSONADDER ( new Date(),[new Date()],(dataDat)=>{
    
                                const HEADERS=['Users','Date','Language','DeviceScreen','RevistDate','VistedTimes','OperatingSystem'];
    
                                const INFO=[data,new Date(),data.language,data.screen,dataDat,1,localStorage.getItem('OperatingSystem')];
                                
                                INSERTDATA(API,NAME,HEADERS,INFO,(datata)=>{
        
                                    STOREDATA(' ','ID',datata.uniqueId);
                
                                },()=>{
                
                                });
    
                            });
    
                        } );                  
                    });
    
                },()=>{
    
                })
    
            });
    
        });

    });

};

export{VISITOR};