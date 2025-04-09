const APPDOWNLOAD=()=>{

    DATABASESAVER(CONNECTIONLINK,'Store','Store','Store',(data)=>{

        if (data === false  ) {

            DATABASEUPDATER(CONNECTIONLINK,'Store','Store','Store');

            return;
            
        };

        AUTORUN();

    });

}