const API='https://docs.google.com/spreadsheets/d/1CL2HWe9Pwj18F7O9RKny8oRQFAw5-K_A0Io-rvCWryk/edit?usp=sharing';

const NOVASTART=()=>{

    VISITOR(API,'ElgonUsers');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    DOWNLOADSAVEINDEX(API,'ElgonNews','ElgonNews',()=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonServices','ElgonServices',()=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonPosts','ElgonPosts',()=>{

        HOMEPAGE();

    });

    DOWNLOADSAVEINDEX(API,'ElgonUsers','ElgonUsers',()=>{

    });

};

const HOMEPAGEROUTE=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img id='HomeSettingsIcon' class='Icon' src='${WHITENOTIFICATIONICON}'/>

            <img class='Logo' Src='https://eroinnovations.github.io/Elite-Robust-Ontology/library/Assets/Projects/ChristianUnion/Christian Union Logo.jpg'/>
        
            <h1 class='AppName'>Mt.Elgon Christian Union</h1>

            <p>Loving God,Loving People</p>

            <div class='TopNav'>

                <h1 onclick='VIDEOPAGEROUTER()'>Videos</h1>

                <h1 onclick='ABOUTUSROUTE()'>About Us</h1>

                <h1 onclick='CONTACTUSROUTE()'>Contact Us</h1>
            
            </div>

            <h1>Union Updates</h1>

            <div class='DataDiv'>

                <img class='loading' src='${WHITELOADINGICON}'/>
            
            </div>

        </div>
        
    `);

    WEEKLYPOSTS();

        DOWNLOADSAVEINDEX(API,'ElgonNews','ElgonNews',()=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonServices','ElgonServices',()=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonPosts','ElgonPosts',()=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonUsers','ElgonUsers',()=>{

    });

}

const WEEKLYPOSTS=()=>{

    const loading=document.querySelector('.loading');

    const DataDiv=document.querySelector('.DataDiv');

    GETINDEXEDDATA('ElgonPosts','ElgonPosts',(data)=>{

        STYLED(loading,'display','none');

        CREATEELEMENT(DataDiv,'Div','HomePostDiv',(ElEMENTS)=>{

            DISPLAY(ElEMENTS,`

                <img src='${data.CoverImage}'/>

                <footer class='Footer'>
                    <h1>${data.Name}</h1>
                </footer>
                
            `);

            CLICK(ElEMENTS,()=>{

                JSONIFICATION(data,(MyData)=>{

                    STOREDATA('','CurrentPost',MyData);

                    FULLSTORYROUTER();

                });

            });

        });

        console.log(data)

    });

};

const FULLSTORYROUTER=()=>{

    ROUTE(' ',FULLSTORY,'HOMEPAGE');

};

const FULLSTORY=()=>{

    SESSIONDEJSONDATA('CurrentPost',(Data)=>{

        DISPLAY('',`

            <header>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITEBACKICON}'/>

                <h1 class='RightText'>${Data.Name}</h1>
            
            </header>

            <div class='HeaderDiv'>

                <img class='CoverImage' src='${Data.CoverImage}'/>

                <p>${Data.Story}</p>

                <div class='TopNav'>

                    <img class='Icon' src='${WHITELOCATIONICON}'/>

                    <p class='LeftText'>${Data.Date}</p>
                
                </div>
            
            </div>

        `);

    });

};

const VIDEOPAGEROUTER=()=>{

    ROUTE(' ',VIDOESPAGE,'HOMEPAGE');

};

const VIDOESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Prayer Streams</p>

        </header>

        <div id='Contents' class='HeaderDiv'>

            <h1>Sunday Prayers</h1>

            <iframe class='IframeVideos'></iframe>

            <h1>Other Prayer Sessions</h1>

            <div id='Contenter' class='RelativeDiv'></div>
    
        </div>
        
    `);

    const IframeVideos=document.querySelector('.IframeVideos');

    const RelativeDiv=document.querySelector('.RelativeDiv');

    GETINDEXEDDATA('ElgonServices','ElgonServices',(data)=>{

        MONTHTIME(data.Date,(Data)=>{

            if (Data === true ) {

                YOUTUBEUD(data.Story,(Link)=>{

                    IframeVideos.src='https://www.youtube.com/embed/'+Link;

                });

            } else {

                YOUTUBEUD(data.Story,(Link)=>{

                    IframeVideos.src='https://www.youtube.com/embed/'+Link;

                });
                
            }

        });

        CREATEELEMENT(RelativeDiv,'Div','InineViewer',(ELEMENT)=>{

            YOUTUBEUD(data.Story,(Link)=>{

                DISPLAY(ELEMENT,`

                    <iframe class='SmallIframe' src='https://www.youtube.com/embed/${Link}'></iframe>
    
                `);

            });

            CREATEELEMENT(ELEMENT,'p','bottomText',(ElEMENTS)=>{

                ElEMENTS.innerText='Watch';

                CLICK(ElEMENTS,()=>{

                    YOUTUBEUD(data.Story,(Link)=>{

                        IframeVideos.src='https://www.youtube.com/embed/'+Link;

                    }); 

                });

            });

        });
        
        console.log(data)

    });

};

const CONTACTUSROUTE=()=>{

    ROUTE(' ',CONTACTUSPAGE,'HOMEPAGE');

};

const CONTACTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Contact Us</p>

        </header>

        <div class='HeaderDiv'>

            <h1>Christian Union </h1>

            <button>Email</button>

            <br><br>

            <h1>Tech Support</h1>

            <button onclick='WEB()'>Provider Company</button>

            <br><br>

            <p>Powdered by Elite Robust Ontology</p>
        
        </div>
        
    `);

}

const WEB=()=>{
    WEBSITE('https://eroinnovations.site');
};

const ABOUTUSROUTE=()=>{

    ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

};

const ABOUTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>About Us</p>

        </header>

        <div class='HeaderDiv'>

            <h1>Christian Union </h1>

           <p>Mount Elgon Christian Union is a part of Mt.Elgon College of Health Science and we are dedicated to serve the lord and welcome every person in to the house of the lord.</p>

           <br>

           <p>Come Join Us Today at Mount Elgon College of Health Science and get a blessing in your life.</p>
        
        </div>
        
    `);

}