const AUTORUN=()=>{

     MOVIELANDERUPDATER();

     ENVIRONMENTCHECKER(ANDROIDDEVICE);

};

const ANDROIDDEVICE=()=>{

     if (localStorage.getItem('UserData')) {

          NAVIGATOR('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');
          
     } else {
          
          NAVIGATOR('',ANDROIDLOGINPAGE,'ANDROIDLOGINPAGE');

     };
    

};

const DESKTOPDEVICE=()=>{

 
};

const WEBDEVICE=()=>{

};

