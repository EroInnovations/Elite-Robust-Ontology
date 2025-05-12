import { DELETEDATA } from "../../../Functions/DeleteStorage/DeleteStorage.js";
import { FINDER } from "../../../Functions/Finder/Finder.js";
import { GETDATA } from "../../../Functions/GetData/GetData.js"
import { RELOAD } from "../../../Functions/Reload/Reload.js";
import { TOAST } from "../../../Functions/Toast/Toast.js";
import { UPDATEDATA } from "../../../Functions/UpdateData/UpdateData.js";

export const DELETEACCOUNT=()=>{

    const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

    GETDATA(API,'Users',(data)=>{

        FINDER(data,'ID',localStorage.getItem('User'),(User)=>{

            if (User.ID === localStorage.getItem('User')) {

                const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Date,sessionStorage.getItem('AccountDeleted'),User.Photo,User.Activity,User.Device,User.SavedItems,User.Settings,User.Notifications,User.Updates,User.Versions,User.BoughtProducts,User.ShoppedProducts]

                UPDATEDATA(API,'Users',User.ID,INFO,(Reason)=>{

                    DELETEDATA(' ','User');

                    DELETEDATA(' ','UserData');

                    RELOAD();

                    console.log(Reason);

                },(error)=>{

                    TOAST('Failed to Delete Account')

                });
                
            } 

        });

    });

};