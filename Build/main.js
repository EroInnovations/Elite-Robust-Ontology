const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const NOVASTART=()=>{

    APPDATA();

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='Holder'>

            <div class='HomeHeader'>

                <h1 class='AppName'>Elite</h1>

                <img class='RightIcon' src='${WHITEUSERICON}'/>
            
            </div>

            <div class='MainContent'>

                <br><br><br><br><br><br><br><br>

                <img class='LoadingIcon' src='${WHITELOADINGICON}'/>   
            
            </div>

        </div>

        <footer>

            <img src='${WHITEINTERNETICON}'/>

            <img src='${WHITEMOBILEDEVELOPMENTICON}'/>

            <img src='${WHITESETTINGSICON}'/>

        </footer>
        
    `);

    const MainContent=document.querySelector('.MainContent');

    GETINDEXED('HomePosts','HomePosts',(data)=>{

        DISPLAY(MainContent,'');

        REDUX(data,(Element)=>{

            REDUX(Element.data.reverse(),(element)=>{

                CREATEELEMENT(MainContent,'div','MainDiv',(ELEMENT)=>{

                    DISPLAY(ELEMENT,`

                        <img class='DetailsLogo' src='${element.PostImage||EROINNOVATIONSLOGOONE}'/>
                        
                        <div class='ContentDiv'>

                            <br>

                            <h1 class='HomePostName'>${element.PostName}</h1>

                            <br>

                            <hr>

                            <br>
                        
                            <p class='PostShortStory'>${element.PostShortStory}</p>

                        </div>



                    `);

                });

                console.log(element)

            });

        });

    });

};

const APPDATA=()=>{

    CHECKER(navigator.onLine,()=>{

        GETDATA(API,'HomePosts',(data)=>{

            const MYDATA={
                'Name':'Posts',
                'data':data
            }

            
            STOREINDEXED('HomePosts','HomePosts',MYDATA,(resback)=>{

                CONDITION(resback  === true,()=>{

                    NOVASTART();

                },()=>{

                    UPDATEINDEX('HomePosts','HomePosts',MYDATA,()=>{

                    });

                });

            });

        });

    });

};