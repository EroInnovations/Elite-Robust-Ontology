const API='https://docs.google.com/spreadsheets/d/1CL2HWe9Pwj18F7O9RKny8oRQFAw5-K_A0Io-rvCWryk/edit?usp=sharing';

const NOVASTART=()=>{

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

            <img id='HomeSettingsIcon' class='Icon' src='${WHITESETTINGSICON}'/>

            <img class='Logo' Src='https://eroinnovations.github.io/Elite-Robust-Ontology/library/Assets/Projects/ChristianUnion/Christian Union Logo.jpg'/>
        
            <h1 class='AppName'>Mt.Elgon Christian Union</h1>

            <p>Loving God,Loving People</p>

            <div class='TopNav'>

                <h1>Videos</h1>

                <h1>About Us</h1>

                <h1>Contact Us</h1>
            
            </div>

            <h1>Weekly Updates</h1>

            <div class='DataDiv'>

                <img class='loading' src='${WHITELOADINGICON}'/>
            
            </div>

        </div>
        
    `);

    WEEKLYPOSTS();

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

};