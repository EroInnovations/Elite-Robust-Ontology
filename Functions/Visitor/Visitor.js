import { CHECKER } from "../Checker/Checker.js";
import { CONDITION } from "../Condition/Condition.js";
import { DEVICE } from "../Device/Device.js";
import { FINDER } from "../Finder/Finder.js";
import { GETDATA } from "../GetData/GetData.js";
import { INSERTDATA } from "../InsertData/InsertData.js";
import { JSONADDER } from "../JsonAdder/JsonAdder.js";
import { STOREDATA } from "../StoreData/StoreData.js";
import { UPDATEDATA } from "../UpdateData/UpdateData.js";

const VISITOR=(API,NAME)=>{

    CONDITION(localStorage.getItem('Environment') === 'Development',()=>{

        console.log('Under Building');

    },()=>{

        if (sessionStorage.getItem('Visited')) {

            console.log('Already Visited');
            
        }else{

            DEVICE((data)=>{

                CHECKER(navigator.onLine,()=>{
        
                    GETDATA(API,NAME,(MyData)=>{
        
                        FINDER(MyData,'ID',localStorage.getItem('ID'),(Users)=>{
        
                            CONDITION(Users.ID === localStorage.getItem('ID'),()=>{
        
                                JSONADDER ( Users.RevistDate,[new Date()],(dataDat)=>{
        
                                    const INFO=[data,Users.Date,Users.Language,Users.DeviceScreen,dataDat,Users.VistedTimes+1,localStorage.getItem('OperatingSystem')];
                                
                                    UPDATEDATA(API,NAME,Users.ID,INFO,(datata)=>{

                                        STOREDATA('','Visited','true');
                    
                                    },()=>{
                    
                                    });
        
                                });
        
                            },()=>{
                                
                                JSONADDER ( new Date(),[new Date()],(dataDat)=>{
        
                                    const HEADERS=['Users','Date','Language','DeviceScreen','RevistDate','VistedTimes','OperatingSystem'];
        
                                    const INFO=[data,new Date(),data.language,data.screen,dataDat,1,localStorage.getItem('OperatingSystem')];
                                    
                                    INSERTDATA(API,NAME,HEADERS,INFO,(datata)=>{
            
                                        STOREDATA(' ','ID',datata.uniqueId);

                                        STOREDATA('','Visited','true');
                    
                                    },()=>{
                    
                                    });
        
                                });
        
                            } );                  
                        });
        
                    },()=>{
        
                    })
        
                });
        
            });

        }



    });

};

export{VISITOR};