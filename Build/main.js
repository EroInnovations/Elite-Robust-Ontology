const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const NOVASTART=()=>{

    APPDATA();

    APPMODE(localStorage.getItem('Color')||'#333333');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const APPDATA=()=>{

    if (navigator.onLine) {

        GETDATA(API,'Products',(data)=>{

            const DATA={
                'Name':'QelProducts',
                'data':data
            };

            STOREINDEXED('QelProducts','QelProducts',DATA,(resback)=>{

                if (resback === false ) {

                    UPDATEINDEX('QelProducts','QelProducts',DATA,()=>{

                    });
                    
                }else{

                    NOVASTART();
                };

            });

        },(Error)=>{

            console.log(Error);

        });

        GETDATA(API,'Catergory',(data)=>{

            const DATA={
                'Name':'Catergory',
                'data':data
            };

            STOREINDEXED('Catergory','Catergory',DATA,(resback)=>{

                if (resback === false ) {

                    UPDATEINDEX('Catergory','Catergory',DATA,()=>{

                    });
                    
                }else{

                };

            });

        },(Error)=>{

            console.log(Error);

        });
        
    }

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img  class='LoadingIcon' id='Loaded'src='${WHITELOADINGICON}'/>

            <br><br>

            <h1 class='SectionName'>Categories </h1>

            <h1 class='SectionName' id='AllProducts' onclick='AllProductsNav()'>All Products</h1>

            <br>

            <div class='CatergorySection' id='HomeCatergories'></div>

            <br><br>

            <h1 class='SectionName'>New Stock </h1>

            <div class='DataDiv' ></diV>

            <br><br>

            <h1 class='SectionName'>Top Selling Products </h1>

            <div class='DataDiv' ></diV>

            <br><br>

            <h1 class='SectionName'>Most Liked  Products </h1>

            <div class='DataDiv' ></diV>

            <br><br><br><br>
        
        </div>

        <footer class='RoundFooter'>

            <img src='${WHITESHOPPINGCART}' onclick='ShoppingPageNav()' />

            <img src='${WHITEHEARTICON}' onclick='HeartPageNav()'/>

            <img src='${WHITENOTIFICATIONICON}' onclick='NotificationsPageNav()' />

            <img src='${WHITESETTINGSICON}' onclick='SettingsPageNav()' />

        </footer>
        
    `);

    CATEGORIESDATA();

    APPDATA();

};

const AllProductsNav=()=>{

    ROUTE(' ',ALLPRODUCTSPAGE,'HOMEPAGE');

};

const HomeNav=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const CATEGORIESDATA=()=>{

    const HomeCatergories=document.querySelector('#HomeCatergories');

    const Loaded=document.querySelector('#Loaded');

    GETINDEXED('Catergory','Catergory',(data)=>{

        DISPLAY(HomeCatergories,'');

        Loaded.style.display='none';

        REDUX(data,(Element)=>{

            REDUX(Element.data,(element)=>{

                CREATEELEMENT(HomeCatergories,'div','CatergoriesDisplay',(ELEMENT)=>{

                    DISPLAY(ELEMENT,`
                    
                       <img class='AllProductsImage' src='${element.ProductImage}'/>

                        <div class='AllProductsDivBottom'>

                            <p class='AllProductName'>${element.ProductName}</p>

                            <h1 class='AllProductPrice'>See All</h1>
                        
                        </div>

                    `);

                    CLICK(ELEMENT,()=>{

                        STOREDATA('','CatergoryName',element.ProductName);

                        STOREDATA('','CatergoryID',element.ID);

                        CatergoryProductsNav();

                    });

                });

            });

        });

    });

};

const ALLPRODUCTSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>All Products</h1>
    
    </header>

    <div class='TopDiv'>

        <img id='Loader' class='LoadingIcon' src='${WHITELOADINGICON}'/>
    
    </div>
        
    `);

    const HomeCatergories=document.querySelector('.TopDiv');

    GETINDEXED('QelProducts','QelProducts',(data)=>{

        DISPLAY(HomeCatergories,'');

        REDUX(data,(Element)=>{

            REDUX(Element.data,(element)=>{

                CREATEELEMENT(HomeCatergories,'div','AllProductsDiv',(ELEMENT)=>{

                    DISPLAY(ELEMENT,`

                        <img class='AllProductsImage' src='${element.ProductImage}'/>

                        <div class='AllProductsDivBottom'>

                            <p class='AllProductName'>${element.ProductName}</p>

                            <h1 class='AllProductPrice'>Ugx${element.ProductPrice}</h1>
                        
                        </div>

                    `);

                });

                console.log(element);

            });

        });

    });

};

const CatergoryProductsNav=()=>{

    ROUTE(' ',CATERGORYPRODUCTSPAGE,'HOMEPAGE');

};

const CATERGORYPRODUCTSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>${sessionStorage.getItem('CatergoryName')}</h1>
    
    </header>

    <div class='TopDiv'>

        <img id='Loader' class='LoadingIcon' src='${WHITELOADINGICON}'/>
    
    </div>
        
    `);

    const HomeCatergories=document.querySelector('.TopDiv');

    GETINDEXED('QelProducts','QelProducts',(data)=>{

        DISPLAY(HomeCatergories,'');

        REDUX(data,(Element)=>{

            REDUX(Element.data,(element)=>{

                CHECKER(sessionStorage.getItem('CatergoryID') === element.ProductCatergory,()=>{

                    CREATEELEMENT(HomeCatergories,'div','AllProductsDiv',(ELEMENT)=>{

                        DISPLAY(ELEMENT,`
    
                            <img class='AllProductsImage' src='${element.ProductImage}'/>
    
                            <div class='AllProductsDivBottom'>
    
                                <p class='AllProductName'>${element.ProductName}</p>
    
                                <h1 class='AllProductPrice'>Ugx${element.ProductPrice}</h1>
                            
                            </div>
    
                        `);
    
                    });

                });

            });

        });

    });

};

const SettingsPageNav=()=>{

    ROUTE(' ',SETTINGSPRODUCTSPAGE,'HOMEPAGE');

};

const SETTINGSPRODUCTSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>Settings</h1>
    
    </header>

    <div class='TopDiv'>

        <div class='ProfileHolder'>

            <img class='ProfileIcon' src='${WHITEPROFILEICON}'/>

            <div class='MyDetailsHolder'>

                <p class='UserName'>Qel Medi User</p>

                <p>user@gmail.com</p>

                <p></p>
            
            </div>

            <div class='DetailsHolder'>

                <button class='inlineButton' onclick='FollowerPageNav()'>

                    <img class='LeftImage' src='${WHITEGROUPICON}'/>

                    <p class='RightTexter'>Followers</p>
                
                </button>

                <button class='inlineButton' onclick='LocationUserNav()'>

                    <img class='LeftImage' src='${WHITELOCATIONICON}'/>

                    <p class='RightTexter'>Mbale</p>
                
                </button>

                <button class='inlineButton' onclick='UpdateProfileNav()'>

                    <img class='LeftImage' src='${WHITEPENCILICON}'/>

                    <p class='RightTexter'>Profile Update</p>
                
                </button>

                <button class='inlineButton' id='AccountMonitoring'></button>
            
            </div>
        
        </div>

        <button class='inlineButton' onclick='CommunityPageNav()'>

            <img class='LeftImage' src='${WHITEGROUPICON}'/>

            <p class='RightTexter'>Qel Medistore Community</p>
        
        </button>

        <button class='inlineButton' onclick='SellwithUsPageNav()'>

            <img class='LeftImage' src='${WHITECREATEDONICON}'/>

            <p class='RightTexter'>Sell With Us</p>
        
        </button>

        <button class='inlineButton'>

            <img class='LeftImage' src='${WHITECONTRASTICON}'/>

            <p class='RightTexter'>App Mode</p>
        
        </button>

        <button class='inlineButton' onclick='AppNotificationsNav()'>

            <img class='LeftImage' src='${WHITENOTIFICATIONICON}'/>

            <p class='RightTexter'>App Notifications</p>
        
        </button>

        <button class='inlineButton' onclick='AppTermsNav()'>

            <img class='LeftImage' src='${WHITEPRIVACYPOLICYICON}'/>

            <p class='RightTexter'>Terms and Conditions</p>
        
        </button>

        <button class='inlineButton' onclick='ContactNav()'>

            <img class='LeftImage' src='${WHITEPHONEICON}'/>

            <p class='RightTexter'>Contact Us</p>
        
        </button>

        <button class='inlineButton' onclick='HelpNav()'>

            <img class='LeftImage' src='${WHITEHELPICON}'/>

            <p class='RightTexter'>Help</p>
        
        </button>

        <button class='inlineButton' onclick='AppVersionNav()'>

            <img class='LeftImage' src='${WHITEMOBILEDEVELOPMENTICON}'/>

            <p class='RightTexter'>App Updates</p>
        
        </button>

    </div>
        
    `);

    const AccountMonitoring = document.querySelector('#AccountMonitoring');

    if (localStorage.getItem('UserData')) {

        DISPLAY(AccountMonitoring,`
        
            <img class='LeftImage' src='${WHITELOGOUTICON}'/>

            <p class='RightTexter'>Log Out</p>
            
        `);

        CLICK(AccountMonitoring,()=>{

            SETTINGSPRODUCTSPAGE();

        });
   
    } else {

        DISPLAY(AccountMonitoring,`
        
            <img class='LeftImage' src='${WHITEENTERICON}'/>

            <p class='RightTexter'>Log In</p>
            
        `);

        CLICK(AccountMonitoring,()=>{

            AccountNav();

        });
        
    };

};

const ShoppingPageNav=()=>{

    ROUTE(' ',SHOPPINGCARTPRODUCTSPAGE,'HOMEPAGE');

};

const SHOPPINGCARTPRODUCTSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>My Items</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const HeartPageNav=()=>{

    ROUTE(' ',HEARTEDPRODUCTSPAGE,'HOMEPAGE');

};

const HEARTEDPRODUCTSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>Favourite Items</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const NotificationsPageNav=()=>{

    ROUTE(' ',NOTIFICATIONSPAGE,'HOMEPAGE');

};

const NOTIFICATIONSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>Notifications</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const AccountNav=()=>{

    ROUTE(' ',ACCOUNTPAGE,'SETTINGSPRODUCTSPAGE');
}

const ACCOUNTPAGE=()=>{

    DISPLAY('',`
        <header>
    
            <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />
    
            <h1 class='RightText'>My Account</h1>
        
        </header>
    
        <div class='TopDiv'>

            <div class='AccountSection'>

                <p id='CreateAccount'>Create Account</p>

                <p id='LogIn'>Log In</p>

                <p id='ForgotPassword'>Forgot Password?</p>
            
            </div>

            <div class='AccountSections'>

                <br><br>

                <h1>SIGN IN</h1>

                <br>

                <p>Log In to Access Your Account</p>

                <input type='email' placeholder='Enter User Email' class='RoundInput' />

                <input type='password' placeholder='*******' class='RoundInput' />

                <button class='inlineButton'>

                    <img class='LeftImage' src='${WHITEENTERICON}'/>

                    <p class='RightTexter'>Log In</p>
            
                </button>
            
            </div>

        </div>
            
    `);

    const AccountSections=document.querySelector('.AccountSections');
    const CreateAccount=document.querySelector('#CreateAccount');
    const LogIn=document.querySelector('#LogIn');
    const ForgotPassword=document.querySelector('#ForgotPassword');

    CLICK(CreateAccount,()=>{

        DISPLAY(AccountSections,`

            <br><br>

            <h1>REGISTER</h1>

            <br>

            <p>Create Password To Access Your Account</p>

            <input type='text' placeholder='Enter User Name' class='RoundInput' />

            <input type='email' placeholder='Enter User Email' class='RoundInput' />

            <input type='password' placeholder='*******' class='RoundInput' />

            <button class='inlineButton'>

                <img class='LeftImage' src='${WHITEENTERICON}'/>

                <p class='RightTexter'>Create Account</p>
            
            </button>
            
        `);

    });

    CLICK(LogIn,()=>{

        ACCOUNTPAGE();

    });

    CLICK(ForgotPassword,()=>{

        DISPLAY(AccountSections,`

            <br><br>

            <h1>RECOVER ACCOUNT</h1>

            <br>

            <p>Recover Account To Access Your Account</p>

            <input type='email' placeholder='Enter User Email' class='RoundInput' />

            <button class='inlineButton'>

                <img class='LeftImage' src='${WHITEENTERICON}'/>

                <p class='RightTexter'>Recover Password</p>
            
            </button>
            
        `);

    });

};

const UpdateProfileNav=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE(' ',UPDATEPROFILESPAGE,'SETTINGSPRODUCTSPAGE');
        
    } else {

        ROUTE(' ',ACCOUNTPAGE,'SETTINGSPRODUCTSPAGE');
        
    }

};

const UPDATEPROFILESPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>Qel</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const LocationUserNav=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE(' ',USERLOCATIONPAGE,'SETTINGSPRODUCTSPAGE');
        
    } else {

        ROUTE(' ',ACCOUNTPAGE,'SETTINGSPRODUCTSPAGE');
        
    }

};

const USERLOCATIONPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>Qel</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const FollowerPageNav=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE(' ',USERFOLLOWERPAGE,'SETTINGSPRODUCTSPAGE');
        
    } else {

        ROUTE(' ',ACCOUNTPAGE,'SETTINGSPRODUCTSPAGE');
        
    }

};

const USERFOLLOWERPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='HomeNav()' />

        <h1 class='RightText'>My Community</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const CommunityPageNav=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE(' ',QELCOMMUNITYPAGE,'SETTINGSPRODUCTSPAGE');
        
    } else {

        ROUTE(' ',ACCOUNTPAGE,'SETTINGSPRODUCTSPAGE');
        
    }

};

const QELCOMMUNITYPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />

        <h1 class='RightText'>Qel Community</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const SellwithUsPageNav=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE(' ',SELLWITHUSPAGE,'SETTINGSPRODUCTSPAGE');
        
    } else {

        ROUTE(' ',ACCOUNTPAGE,'SETTINGSPRODUCTSPAGE');
        
    }

};

const SELLWITHUSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />

        <h1 class='RightText'>Qel Medistore Sellers</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const AppNotificationsNav=()=>{

    ROUTE(' ',APPNOTIFICATIONSPAGE,'SETTINGSPRODUCTSPAGE');

};

const APPNOTIFICATIONSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />

        <h1 class='RightText'>App Notifications</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const AppTermsNav=()=>{

    ROUTE(' ',APPTERMSPAGE,'SETTINGSPRODUCTSPAGE');

};

const APPTERMSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />

        <h1 class='RightText'>Policies</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const ContactNav=()=>{

    ROUTE(' ',CONTACTUSPAGE,'SETTINGSPRODUCTSPAGE');

};

const CONTACTUSPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />

        <h1 class='RightText'>Reach Us</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const HelpNav=()=>{

    ROUTE(' ',HELPPAGE,'SETTINGSPRODUCTSPAGE');

};

const HELPPAGE=()=>{

    DISPLAY('',`
    <header>

        <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />

        <h1 class='RightText'>FAQ</h1>
    
    </header>

    <div class='TopDiv'>

        
    
    </div>
        
    `);

};

const AppVersionNav=()=>{

    ROUTE(' ',APPVERSIONPAGE,'SETTINGSPRODUCTSPAGE');

};

const APPVERSIONPAGE=()=>{

    const API1='https://eroinnovations.site/Nova/Nova.js';
    const API2='https://eroinnovations.site/Nova/Nova.css';
    const API3='https://eroinnovations.site/Nova/Plugins.js';
    const API4='https://eroinnovations.site/Nova/Start.js';
    const API5='https://eroinnovations.site/Nova/Icons.js';
    const API6='https://eroinnovations.site/Projects/Qel/Android/Main.txt';
    const API7='https://eroinnovations.site/Projects/Qel/Android/Style.txt';

    DISPLAY('',`
        <header>

            <img class='LeftIcon' src='${WHITEBACKICON}' onclick='SettingsPageNav()' />

            <h1 class='RightText'>Configuration</h1>
        
        </header>

        <div class='TopDiv'>

            <img id='Loader' class='LoadingIcon' src='${WHITELOADINGICON}'/> 

            <br><br>

            <p class='UpdatesPanels'>Please Wait While We Check For Updates</p>

            <button id='Update' class='forestgreen'>Install</button>

        </div>
        
    `);

    const UpdatesPanels=document.querySelector('.UpdatesPanels');

    const Update=document.querySelector('#Update');

    const TopDiv=document.querySelector('.TopDiv');

    CHECKER(navigator.onLine,()=>{

        FETCHDATA(API1,(data)=>{

            DISPLAY(UpdatesPanels,'Checking App Functions');
    
            if (data === localStorage.getItem('NovaFunctions')) {
    
                DISPLAY(UpdatesPanels,'Functions To Update ');
                
            } else {

                STOREDATA('','UpdatesAvailable','On');
    
                STOREDATA('','CloudFunctions',data);
                
            };
            
            FETCHDATA(API2,(data)=>{

                DISPLAY(UpdatesPanels,'Checking App Designs');
        
                if (data === localStorage.getItem('NovaStyles')) {
        
                    DISPLAY(UpdatesPanels,'Design To Update ');
                    
                } else {
    
                    STOREDATA('','UpdatesAvailable','On');
        
                    STOREDATA('','CloudStyles',data);
                    
                };

                FETCHDATA(API3,(data)=>{

                    DISPLAY(UpdatesPanels,'Checking App Plugins');
            
                    if (data === localStorage.getItem('NovaPlugIns')) {
            
                        DISPLAY(UpdatesPanels,'Plugins To Update ');
                        
                    } else {
        
                        STOREDATA('','UpdatesAvailable','On');
            
                        STOREDATA('','CloudPlugIns',data);
                        
                    };

                    FETCHDATA(API4,(data)=>{

                        DISPLAY(UpdatesPanels,'Checking App Loaders');
                
                        if (data === localStorage.getItem('NovaAutoStart')) {
                
                            DISPLAY(UpdatesPanels,'Plugins To Update ');
                            
                        } else {
            
                            STOREDATA('','UpdatesAvailable','On');
                
                            STOREDATA('','CloudStart',data);
                            
                        };

                        FETCHDATA(API5,(data)=>{

                            DISPLAY(UpdatesPanels,'Checking App Assets');
                    
                            if (data === localStorage.getItem('NovaIcons')) {
                    
                                DISPLAY(UpdatesPanels,'App Assets To Update ');
                                
                            } else {
                
                                STOREDATA('','UpdatesAvailable','On');
                    
                                STOREDATA('','CloudIcons',data);
                                
                            };

                            FETCHDATA(API6,(data)=>{

                                DISPLAY(UpdatesPanels,'Checking Server For More Configurations');
                        
                                if (data === localStorage.getItem('NovaProjectFunctions')) {
                        
                                    DISPLAY(UpdatesPanels,'Configurations To Update ');
                                    
                                } else {
                    
                                    STOREDATA('','UpdatesAvailable','On');
                        
                                    STOREDATA('','CloudProject',data);
                                    
                                };

                                FETCHDATA(API7,(data)=>{

                                    DISPLAY(UpdatesPanels,'Checking Server For More Configurations');
                            
                                    if (data === localStorage.getItem('NovaProjectStyles')) {
                            
                                        DISPLAY(TopDiv,`

                                            <br><br><br><br>

                                            <h1>Completed</h1>

                                            <br><br>

                                            <p>
                                                App Is Update to Date

                                                <br><br><br>

                                                No New Features and Configurations Added
                                            
                                            </p>
                                            
                                        `);
                                        
                                    } else {
                        
                                        STOREDATA('','UpdatesAvailable','On');
                            
                                        STOREDATA('','CloudProjectCss',data);
                                        
                                        DISPLAY(UpdatesPanels,'Updates Available For This Version,Please Update To Get Access To New Features');

                                        Update.style.display='block';

                                        CLICK(Update,()=>{

                                            DISPLAY(Update,'Installing....')

                                            STOREDATA(' ','NovaFunctions',sessionStorage.getItem('CloudFunctions'));

                                            STOREDATA(' ','NovaStyles',sessionStorage.getItem('CloudStyles'));

                                            STOREDATA(' ','NovaPlugIns',sessionStorage.getItem('CloudPlugIns'));

                                            STOREDATA(' ','NovaAutoStart',sessionStorage.getItem('CloudStart'));

                                            STOREDATA(' ','NovaIcons',sessionStorage.getItem('CloudIcons'));

                                            STOREDATA(' ','NovaProjectFunctions',sessionStorage.getItem('CloudProject'));

                                            STOREDATA(' ','NovaProjectStyles',sessionStorage.getItem('CloudProjectCss'));

                                            HIDER(2000,()=>{

                                                window.location.reload();

                                            });

                                        });

                                    };
                                    
                                });
                                
                            });
                            
                        });
                        
                    });

                });
                
            });

        });

    });
    
};