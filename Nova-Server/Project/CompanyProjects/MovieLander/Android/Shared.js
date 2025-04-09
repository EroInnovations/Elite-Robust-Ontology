const MOVIELANDERUPDATER=()=>{

    NETWORKTASKER(()=>{

        DATABASESAVER(DATABASEINK,'MovieLander','MovieLander','MovieLander',(data)=>{

            CHECKER(data === false,()=>{

                DATABASEUPDATER(DATABASEINK,'MovieLander','MovieLander','MovieLander');

            });

        });

        DATABASESAVER(DATABASEINK,'Catergory','Catergory','Catergory',(data)=>{

            CHECKER(data === false,()=>{

                DATABASEUPDATER(DATABASEINK,'Catergory','Catergory','Catergory');

            } );

        });

        DATABASESAVER(DATABASEINK,'Policies','Policies','Policies',(data)=>{

            CHECKER(data === false,()=>{

                DATABASEUPDATER(DATABASEINK,'Policies','Policies','Policies');

            } );

        });

        GETDATA(DATABASEINK,'HomePage',(data)=>{

            JSONIFICATION(data,(Mydata)=>{

                STORE('local','HomePageLayOut',Mydata);

            });

        });

    });

};

const MYACCOUNTED=(Email,callback)=>{

    GETDATA(DATABASEINK,'Users',(data)=>{

        FINDER(data,'UserEmail',Email,(Users)=>{

            if (Users.UserEmail === Email ) {
                
                callback(Users);

            } else {
               
                callback(false);
            }

        });

    });

};