const AUTORUN=()=>{

     APPMANAGERPROJECTS();

     ENVIRONMENTCHECKER(DESKTOPDEVICE);

};

const ANDROIDDEVICE=()=>{

    

};

const DESKTOPDEVICE=()=>{

     if (localStorage.getItem('UserData')) {

          NAVIGATOR('',DESKTOPHOMEPAGE,'DESKTOPHOMEPAGE');
          
     } else {
          
          NAVIGATOR('',DESKTOPLOGINPAGE,'DESKTOPLOGINPAGE');

     };
 
};

const WEBDEVICE=()=>{

};

