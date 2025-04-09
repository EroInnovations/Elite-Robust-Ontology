const APPMANAGERPROJECTS=()=>{

    const LINKUSERS=`https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?usp=sharing`;

    NETWORKTASKER(()=>{

        DATABASESAVER(LINKUSERS,'AppManager','AppManager','AppManager',(data)=>{

            if (data === false ) {

                DATABASEUPDATER(LINKUSERS,'AppManager','AppManager','AppManager');
                
            };

        });

    });
  
};

const UPDATEDDATACHECKER=(ELEMENT,Data1)=>{

    DECLARATION(ELEMENT,(ELEMENT1)=>{

        EVENT(ELEMENT1,'input',()=>{

            if (ELEMENT1.value === Data1) {

                STYLED(ELEMENT1,'border','1px solid orange');
                
            }else{

                STYLED(ELEMENT1,'border','1px solid blue');
                
            }
            
        });

        EVENT(ELEMENT1, 'blur', () => {
            if (ELEMENT1.value === Data1) {
              ELEMENT1.value = '';
            }
        });
    });

};