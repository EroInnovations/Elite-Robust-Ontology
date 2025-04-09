const AUTORUN=()=>{

     ENVIRONMENTCHECKER();

};

const ANDROIDDEVICE=()=>{

     
};

const DESKTOPDEVICE=()=>{

 
};

const WEBDEVICE=()=>{

     SCREENWIDTH((data)=>{

          STORE('local','Width',data);

          HIDER(100,()=>{

               DEJSON("local",'Width',(Screen)=>{

                    if (Screen.screenWidth <= 800 ) {

                         NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');
                         
                    }else{

                         NAVIGATOR('',WEBANDROIDPAGE,'WEBANDROIDPAGE');
                         
                    };
               });

          });

     });

};