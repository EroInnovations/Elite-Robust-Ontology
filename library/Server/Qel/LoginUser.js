import { FINDER } from "../../../Functions/Finder/Finder.js";
import { GETDATA } from "../../../Functions/GetData/GetData.js";
import { JSONIFICATION } from "../../../Functions/Jsonification/Jsonification.js";
import { RELOAD } from "../../../Functions/Reload/Reload.js";
import { STOREDATA } from "../../../Functions/StoreData/StoreData.js";
import { TOAST } from "../../../Functions/Toast/Toast.js";

export const LOGINUSER=()=>{

    const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';
    
    GETDATA(API,'Users',(data)=>{
    
        FINDER(data,'UserEmail',sessionStorage.getItem('Email'),(User)=>{

            if (User.UserEmail === sessionStorage.getItem('Email')) {

                if (User.UserPassword === sessionStorage.getItem('Password')) {

                    if (!User.Deleted) {

                        STOREDATA(' ','User',User.ID);

                        JSONIFICATION(User,(MyData)=>{

                            STOREDATA(' ','UserData',MyData);

                            RELOAD();

                        });
                        
                    } else {

                        TOAST('Something Went Wrong');
                        
                    };
                    
                } else {

                    TOAST('Wrong User Password');
                    
                };
                
            } else {

                TOAST('User Not Found');
                
            };
    
        });
    
    });
    
};