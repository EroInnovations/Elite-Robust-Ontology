const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    DATADOWNLOADING();

};

const DATADOWNLOADING=()=>{

    DOWNLOADSAVEINDEX(API,'Products','Products',()=>{

        HOMEPAGE();

    });

    DOWNLOADSAVEINDEX(API,'Catergory','Catergory',()=>{

    });

    DOWNLOADSAVEINDEX(API,'Policies','Policies',()=>{

    });

};

const LOCATIONPAGEROUTE=()=>{

    ROUTE(' ',LOCATIONPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTE=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const SECTIONSPAGEROUTE=()=>{

    ROUTE(' ',SECTIONSPAGE,'HOMEPAGE');

};

const SAVEDPAGEROUTE=()=>{

    ROUTE(' ',SAVEDPAGE,'HOMEPAGE');

};

const SETTINGSPAGEROUTE=()=>{

    ROUTE(' ',SETTINGSPAGE,'HOMEPAGE');

};

const USERACCOUNTPAGEROUTE=()=>{

    ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

};

const SHOPPINGPAGEROUTE=()=>{

    ROUTE(' ',SHOPPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeHolderDiv'>

            <div class='TopNav'>

                <div class='ImageTextHolderSlide' onclick='LOCATIONPAGEROUTE()'>

                    <img src='${WHITELOCATIONICON}'/>

                    <p>${localStorage.getItem('Area')||'Kampala'}</p>
                
                </div>

                <div class='ImageTextHolderSlider' onclick='USERACCOUNTPAGEROUTE()'>

                    <img src='${WHITEUSERPROFILEICON}'/>

                    <p>User</p>
                
                </div>
            
            </div>

            <div class='TopNav'>

                <input class='SearchInput' type='Search' placeholder='Search For Items' />

                <button class='SearchFilterButton'>

                    <img class='FilterIcon' src='${WHITESETTINGSSLIDERICON}'/>
                
                </button>

            </div>

            <div class='AdSection'></div>

            <div class='TopNav'>

                <h1 class='Catergories'>Catergory</h1>

                <div class='ImageTextHolderSlidered' >

                    <p class='SeeAllName'>See All</p>

                    <img class='SeeAllImages' src='${WHITENEXTICON}'/>

                </div>
                
            </div>

            <div class='AdSection' id='CatergoryDiv'></div>

            <br><br><br>
            
        </div>

        <footer>

            <div class='ImageTextHolder' onclick='SECTIONSPAGEROUTE()'>

                <img class='FooterImage' src='${WHITEGRIDICON}'/>

                <p>Sections</p>
            
            </div>

            <div class='ImageTextHolder' onclick='SAVEDPAGEROUTE()'>

                <img class='FooterImage' src='${WHITESAVEDICON}'/>

                <p>Saved</p>
            
            </div>

            <div class='ImageTextHolder' onclick='SHOPPINGPAGEROUTE()'>

                <img class='FooterImage' src='${WHITESHOPPINGCART}'/>

                <p>Shop</p>
            
            </div>

            <div class='ImageTextHolder' onclick='SETTINGSPAGEROUTE()'>

                <img class='FooterImage' src='${WHITESETTINGSICON}'/>

                <p>Settings</p>
            
            </div>
        
        </footer>
        
    `);

};

const LOCATIONPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Districts</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

    const CountryDiv=document.querySelector('.CountryDiv');

    REDUX(UGANDANDISTRICITS,(element)=>{

        CREATEELEMENT(CountryDiv,'div','CountryDivs',(ELEMENTS)=>{

            DISPLAY(ELEMENTS,`

                <p class='LeftDistrict'>${element.District}</p>

                <img class='RightDistricitImage'src='${WHITELOCATIONICON}'/>

            `);

            CLICK(ELEMENTS,()=>{
                STOREDATA(' ','Area',element.District);

                HOMEPAGEROUTE();

            });

        });

    });

};

const SHOPPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Shop</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

};

const SECTIONSPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Sections</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

};

const SAVEDPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Saved</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'></div>
        
    `);

};

const SETTINGSPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Preferences</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>App Mode</p>

                <img class='RightDistricitImage'src='${WHITECONTRASTICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Notifications</p>

                <img class='RightDistricitImage'src='${WHITENOTIFICATIONICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Sync</p>

                <img class='RightDistricitImage'src='${WHITERETRYICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Updates</p>

                <img class='RightDistricitImage'src='${WHITEMOBILEDEVELOPMENTICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Privacy Policy</p>

                <img class='RightDistricitImage'src='${WHITEPRIVACYPOLICYICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>App Version</p>

                <img class='RightDistricitImage'src='${WHITEUPLOADICON}'/>
            
            </button>
        
        </div>
        
    `);

};

const USERACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header>

            <div class='ImageTextHolderSlided' onclick='HOMEPAGEROUTE()'>

                <img src='${WHITESINGLEBACKICON}'/>

                <p>Back</p>
                
            </div>

            <div class='ImageTextHolderSlider'>

                <p>Profile</p>
                
            </div>
        
        </header>

        <div class='CountryDiv'>

            <div class='ProfileHolder'>
            
            </div>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Community</p>

                <img class='RightDistricitImage'src='${WHITEGROUPICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Messages</p>

                <img class='RightDistricitImage'src='${WHITECHATICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Seller Account</p>

                <img class='RightDistricitImage'src='${WHITESUBSCRIPTIONICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Delete Account</p>

                <img class='RightDistricitImage'src='${WHITEDELETEICON}'/>
            
            </button>

            <button class='CountryDivs'>

                <p class='LeftDistrict'>Seller Account</p>

                <img class='RightDistricitImage'src='${WHITESUBSCRIPTIONICON}'/>
            
            </button>
        
        
        </div>
        
    `);

};
