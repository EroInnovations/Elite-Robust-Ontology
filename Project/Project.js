const API='https://docs.google.com/spreadsheets/d/1CL2HWe9Pwj18F7O9RKny8oRQFAw5-K_A0Io-rvCWryk/edit?usp=sharing';

const NOVASTART=()=>{

    if (localStorage.getItem('User')) {

        ADMINCONNECTION();
        
    }else{

        DELETEDATA(' ','User');

        DELETEDATA(' ','UserData');

    };

    DOWNLOADSAVEINDEX(API,'ElgonNews','ElgonNews',()=>{

        HOMEPAGE();

    });

    DOWNLOADSAVEINDEX(API,'ElgonServices','ElgonServices',()=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonPosts','ElgonPosts',()=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonUsers','ElgonUsers',()=>{

    });

    if (localStorage.getItem('UserData')) {

        ROUTE('',HOMEPAGE,'HOMEPAGE');
        
    } else {
    
        ROUTE('',LOGINPAGE,'LOGINPAGE');

    };

};

const ADMINCONNECTION=()=>{

    if (navigator.onLine) {
        
        GETDATA(API,'Users',(data)=>{

            FINDER(data,'ID',localStorage.getItem('User'),(users)=>{

                if (users.ID === localStorage.getItem('User') ) {

                    JSONIFICATION(users,(MyDAta)=>{
                        STOREDATA(' ','UserData',MyDAta);
                    })
                    
                } else {
                    
                    DELETEDATA(' ','User');

                    DELETEDATA(' ','UserData');

                    NOVASTART();

                }

            });
                        
        });

    } 

};

const HOMEPAGEROUTER=()=>{
    ROUTE('',HOMEPAGE,'HOMEPAGE');
};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <div class='TopNav'>

                <h1 class='LeftText'>Christian Union</h1>

                <img class='RightIcon' src='${WHITEUSERPROFILEICON}'/>
            
            </div>

            <h1>Dash Board</h1>

            <div class='ContentHolder'>

                <div class='InineView' onclick='POSTSPAGEROUTER()'>
                    <img id='CenterIcon' class='Icon' src='${WHITEPOSTICON}'/>
                    <p>Posts</p>
                </div>

                <div class='InineView' onclick='VIDEOPAGEROUTE()'>
                    <img id='CenterIcon' class='Icon' src='${WHITEMOVIEICON}'/>
                    <p>Video Posts</p>
                </div>

                <div class='InineView'>
                    <img id='CenterIcon' class='Icon' src='${WHITEGROUPICON}'/>
                    <p>Admins</p>
                </div>

                <div class='InineView'>
                    <img id='CenterIcon' class='Icon' src='${WHITEUSERICON}'/>
                    <p>Visitor</p>
                </div>

                <div class='InineView'>
                    <img id='CenterIcon' class='Icon' src='${WHITESETTINGSICON}'/>
                    <p>Settings</p>
                </div>

            </div>
        
        </div>

    `);

};

const LOGINPAGEROUTER=()=>{
    ROUTE(' ',LOGINPAGE,'LOGINPAGE');
};

const LOGINPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='AppLogo' src='${MOUNTLOGO}'/>

            <h1 class='AppName'>Mt Elgon Christian Union</h1>

            <input id='Email' class='RoundInput' type='email'  Placeholder='Enter Email'/>

            <input id='UserEmail' class='RoundInput' type='password'  Placeholder='Enter Password'/>
        
            <h1 class='ForgotPassword' onclick='FORGOTPASSWORDPAGEROUTER()'>ForgotPassword?</h1>

            <button class='LoginButton'>LogIn</button>

            <button onclick='CREATEACCOUNTROUTER()' class='CreateButton'>Create Account</button>

        </div>

    `);

    const LoginButton=document.querySelector('.LoginButton');
    const Email=document.querySelector('#Email');
    const UserEmail=document.querySelector('#UserEmail');

    LoginButton.addEventListener('click',()=>{

        if (Email.value) {

            if (UserEmail.value) {

                if (navigator.onLine) {

                    TOAST('Please Wait');

                    GETDATA(API,'Users',(data)=>{

                        FINDER(data,'UserEmail',Email.value,(users)=>{

                            if (users.UserEmail === Email.value ) {

                                if (users.UserPassword === UserEmail.value ) {
                                
                                    JSONIFICATION(users,(MyData)=>{

                                        STOREDATA(' ','UserData',MyData);

                                        STOREDATA(' ','User',users.ID);

                                        STOREDATA(' ','AdminRights',MyData.Right);

                                        NOVASTART();

                                    });

                                } else {
                                TOAST('No Admin Found'); 
                                }
                                
                            } else {
                               TOAST('No Admin Found'); 
                            }

                        });
                        
                    });
                    
                } else {
                    TOAST('Check Your Internet Connection');
                };
                
            } else {
                TOAST('Enter Password ');
            };
 
        } else {
            TOAST('Enter Email ');
        };

    });

};

const CREATEACCOUNTROUTER=()=>{
    ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');
};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='AppLogo' src='${MOUNTLOGO}'/>

            <h1 class='AppName'>Mt Elgon Christian Union</h1>

            <input id='Name' class='RoundInput' type='text'  Placeholder='Enter Your Name'/>

            <input id='Email' class='RoundInput' type='email'  Placeholder='Enter Email'/>

            <input id='Password'  class='RoundInput' type='password'  Placeholder='Enter Password'/>
        
            <button class='LoginButton'>Create Account</button>

            <button onclick='LOGINPAGEROUTER()' class='CreateButton'>LogIn</button>

            <br><br>

        </div>

    `);

    const LoginButton=document.querySelector('.LoginButton');
    const Name=document.querySelector('#Name');
    const Email=document.querySelector('#Email');
    const Password=document.querySelector('#Password');

    LoginButton.addEventListener('click',()=>{

        if (Name.value) {

            if (Email.value) {

                if (Password.value) {

                    if (navigator.onLine) {

                        DEVICE((Deviced)=>{

                            const HEADER=['UserName','UserEmail','UserPassword','UserDevice','Date','Rights','Approved'];

                            const INFO=[Name.value,Email.value,Password.value,Deviced,new Date(),'','Approved'];

                            GETDATA(API,'Users',(data)=>{

                                FINDER(data,'UserEmail',Email.value,(data)=>{

                                    if (data.UserEmail === Email.value ) {

                                        TOAST('Admin With Email Found');
                                        
                                    } else {

                                        const Message='Welcome to Mount ELgon Christian Union ,Your Now Approved Admin.'

                                        EMAILSENDER(Email.value,'Account Created',Message,(datata)=>{

                                            if (datata.message === 'Email sent successfully.' ) {
                                                
                                                INSERTDATA(API,'Users',HEADER,INFO,(ResBack)=>{

                                                    STOREDATA(' ','User',ResBack.spreadsheetId);

                                                    STOREDATA(' ','UserData',ResBack.spreadsheetId);

                                                    NOVASTART();
        
                                                });
                                            } else {
                                            
                                                TOAST('Email Doesnot Exit');

                                            }

                                        },()=>{

                                            TOAST('Something Went Wrong,Try Again');

                                        });

                                    };

                                });

                            });

                        });
                            
                    } else {
                        TOAST('Check Your Internet');
                    }
            
                } else {
                    TOAST('Enter Your Password');
                }

            } else {
                TOAST('Enter Your Email');
            }

            
        } else {
            TOAST('Enter Your Name');
        }

    });
    
};

const FORGOTPASSWORDPAGEROUTER=()=>{
   ROUTE(' ',FORGOTPASSWORDPAGE,'LOGINPAGE');  
}

const FORGOTPASSWORDPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='AppLogo' src='${MOUNTLOGO}'/>

            <h1 class='AppName'>Mt Elgon Christian Union</h1>

            <input class='RoundInput' type='email'  Placeholder='Enter Email'/>

            <button class='LoginButton'>Recover</button>

            <button onclick='LOGINPAGEROUTER()' class='CreateButton'>LogIn</button>

        </div>

    `);

};

const POSTSPAGEROUTER=()=>{

    ROUTE(' ',POSTSPAGE,'HOMEPAGE');

};

const POSTSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

            <h1 class='RightText'>Posts </h1>
        
        </header>

        <div class='HeaderDiv'>

            <div class='TopNav'>
            
                <P onclick='POSTSPAGE()'>ALL Posts</P>

                <P onclick='CREATEPOSTPAGE()'>Create Post</P>

                <P onclick='DELETEDLPOSTS()'>Deleted Posts</P>

            </div>
            
            <div id='POstsDivs' class='RelativeDiv'></div>
        
        </div>
        
    `);

    ALLPOSTS();

};

const ALLPOSTPAGE=()=>{

    const POstsDivs=document.querySelector('#POstsDivs');

};

const CREATEPOSTPAGE=()=>{

    DELETEDATA('','CoverImage');

    DELETEDATA('','ImageOne');
    DELETEDATA('','ImageTwo');
    DELETEDATA('','ImageThree');

    const POstsDivs=document.querySelector('#POstsDivs');

    DISPLAY(POstsDivs,`

        <input id='Name' class='RoundInput' type='text'  Placeholder='Enter Post Title'/>

        <textarea id='Story' placeholder='Write Story'></textarea>

        <p>Cover Post Image </p>

        <img id='CoverImage' class='PostImage' src='${MOUNTLOGO}'/>

        <p>Posts Image</p>

        <img id='ImageOne'  class='PostImage' src='${MOUNTLOGO}'/>

        <img id='ImageTwo' class='PostImage' src='${MOUNTLOGO}'/>

        <img id='ImageThree' class='PostImage' src='${MOUNTLOGO}'/> 

        <button class='LoginButton'>Create Post</button>

    `);

    const CoverImage=document.querySelector('#CoverImage');
    const ImageOne=document.querySelector('#ImageOne');
    const ImageTwo=document.querySelector('#ImageTwo');
    const ImageThree=document.querySelector('#ImageThree');
    const LoginButton=document.querySelector('.LoginButton');
    const Name=document.querySelector('#Name');
    const Story=document.querySelector('#Story');

    CoverImage.addEventListener('click',()=>{

        IMAGEPICKER(CoverImage,(data)=>{

            STOREDATA('','CoverImage',data);

        });

    });

    ImageOne.addEventListener('click',()=>{

        IMAGEPICKER(ImageOne,(data)=>{

            STOREDATA('','ImageOne',data);

        });

    });

    ImageTwo.addEventListener('click',()=>{

        IMAGEPICKER(ImageTwo,(data)=>{

            STOREDATA('','ImageTwo',data);

        });

    });

    ImageThree.addEventListener('click',()=>{

        IMAGEPICKER(ImageThree,(data)=>{

            STOREDATA('','ImageThree',data);

        });

    });

    LoginButton.addEventListener('click',()=> {

        if (Name.value) {

            if (Story.value) {
                
                if (sessionStorage.getItem('CoverImage')) {

                    if (navigator.onLine) {

                        DEVICE((devicedData)=>{
                            
                            const HEADERS=['Name','Story','CoverImage','ImageOne','ImageTwo','ImageThree','Date','PostedBy','Device'];
                            
                            const INFO=[Name.value,Story.value,sessionStorage.getItem('CoverImage'),sessionStorage.getItem('ImageOne'),sessionStorage.getItem('ImageTwo'),sessionStorage.getItem('Three'),new Date(),localStorage.getItem('User'),devicedData];

                            INSERTDATA(API,'ElgonPosts',HEADERS,INFO,(resback)=>{

                                DOWNLOADSAVEINDEX(API,'ElgonPosts','ElgonPosts',()=>{

                                });

                                HIDER(2000,()=>{

                                    POSTSPAGEROUTER();

                                });

                            },()=>{

                                TOAST('Failed to Post,Try Again');

                            })

                        });
                        
                    } else {
                        TOAST('Check Your Internet');
                    }
            
                } else {
                    TOAST('Add Cover Post Image');
                }

            } else {
                TOAST('Enter Post Story');
            }
            
        } else {
            TOAST('Enter Post Title');
        }

    });

};

const ALLPOSTS=()=>{

    const POstsDivs=document.querySelector('#POstsDivs');

    DISPLAY(POstsDivs,'');
    
    GETINDEXEDDATA('ElgonPosts','ElgonPosts',(data)=>{

        if (!data.Deleted) {

            CREATEELEMENT(POstsDivs,'Div','InineView',(ELEMENT)=>{

                DISPLAY(ELEMENT,`

                    <img src='${data.CoverImage}'/>

                `);

                CREATEELEMENT(ELEMENT,'Footer','PostsFooter',(ELEMENTS)=>{

                    CREATEELEMENT(ELEMENTS,'Img','Icon',(ELEMENTES)=>{

                        ELEMENTES.src=WHITEPENCILICON;

                        CLICK(ELEMENTES,()=>{

                            if (condition) {
                                
                            } else {
                                
                            };

                        });

                    });

                    CREATEELEMENT(ELEMENTS,'Img','Icon',(ELEMENTES)=>{

                        ELEMENTES.src=WHITEDELETEICON;

                            CLICK(ELEMENTES,()=>{

                            if (navigator.onLine) {

                                TOAST('PLease Wait');

                                const HEADERS=[data.Name,data.Story,data.CoverImage,data.ImageOne,data.ImageTwo,data.ImageThree,data.Date,data.PostedBy,data.Device,'Deleted'];
                            
                                UPDATEDATA(API,'ElgonPosts',data.ID,HEADERS,(data)=>{

                                    DOWNLOADSAVEINDEX(API,'ElgonPosts','ElgonPosts',()=>{

                                    });

                                    HIDER(3000,()=>{

                                        POSTSPAGEROUTER();

                                    });

                                },()=>{
                                    TOAST('Failed to Delete ,Please Try Again');
                                })
                                
                            } else {
                                TOAST('CHeck Your Internet');
                            };

                        });

                    });

                });

            });

        };

    });

};

const DELETEDLPOSTS=()=>{

    const POstsDivs=document.querySelector('#POstsDivs');

    DISPLAY(POstsDivs,'');
    
    GETINDEXEDDATA('ElgonPosts','ElgonPosts',(data)=>{

        if (data.Deleted) {

            CREATEELEMENT(POstsDivs,'Div','InineView',(ELEMENT)=>{

                DISPLAY(ELEMENT,`

                    <img src='${data.CoverImage}'/>

                `);

                CREATEELEMENT(ELEMENT,'Footer','PostsFooter',(ELEMENTS)=>{

                    CREATEELEMENT(ELEMENTS,'Img','Icon',(ELEMENTES)=>{

                        ELEMENTES.src=WHITECHECKICON;

                            CLICK(ELEMENTES,()=>{

                            if (navigator.onLine) {

                                TOAST('PLease Wait');

                                const HEADERS=[data.Name,data.Story,data.CoverImage,data.ImageOne,data.ImageTwo,data.ImageThree,data.Date,data.PostedBy,data.Device,''];
                            
                                UPDATEDATA(API,'ElgonPosts',data.ID,HEADERS,(data)=>{

                                    DOWNLOADSAVEINDEX(API,'ElgonPosts','ElgonPosts',()=>{

                                    });

                                    HIDER(3000,()=>{

                                        POSTSPAGEROUTER();

                                    });

                                },()=>{
                                    TOAST('Failed to Delete ,Please Try Again');
                                })
                                
                            } else {
                                TOAST('CHeck Your Internet');
                            };

                        });

                    });

                });

            });

        };

    });

};

const VIDEOPAGEROUTE=()=>{

    ROUTE(' ',VIDEOPAGE,'HOMEPAGE');

};

const VIDEOPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

            <h1 class='RightText'>Videos</h1>
        
        </header>

        <div class='HeaderDiv'>

            <div class='TopNav'>
            
                <P onclick='VIDEOPAGE()'>ALL Posts</P>

                <P onclick='CREATEVIDEOPAGE()'>Create Post</P>

                <P onclick='DELETEDLPOSTS()'>Deleted Posts</P>

            </div>
            
            <div id='POstsDivs' class='RelativeDiv'></div>
        
        </div>
        
    `);

    ALLVIDEOS();

};

const CREATEVIDEOPAGE=()=>{

    DELETEDATA('','Link');

    const POstsDivs=document.querySelector('#POstsDivs');

    DISPLAY(POstsDivs,`

        <input id='Name' class='RoundInput' type='text'  Placeholder='Enter Post Title'/>

        <input id='Story' class='RoundInput' type='text'  Placeholder='Enter Youtube Video Link'/>
        
        <button class='LoginButton'>Create Video Post</button>

    `);

    const Name=document.querySelector('#Name');
    const Story=document.querySelector('#Story');
    const LoginButton=document.querySelector('.LoginButton');

    LoginButton.addEventListener('click',()=> {

        if (Name.value) {

            if (Story.value) {
                
                if (navigator.onLine) {

                    DEVICE((devicedData)=>{
                        
                        const HEADERS=['Name','Story','Date','PostedBy','Device'];
                        
                        const INFO=[Name.value,Story.value,new Date(),localStorage.getItem('User'),devicedData];

                        INSERTDATA(API,'ElgonServices',HEADERS,INFO,(resback)=>{

                            DOWNLOADSAVEINDEX(API,'ElgonServices','ElgonServices',()=>{

                            });

                            HIDER(2000,()=>{

                                VIDEOPAGE();

                            });

                        },()=>{

                            TOAST('Failed to Post,Try Again');

                        })

                    });
                    
                } else {
                    TOAST('Check Your Internet');
                }

            } else {
                TOAST('Paste YouTube Link');
            }
            
        } else {
            TOAST('Enter Post Title');
        }

    });

};

const ALLVIDEOS=()=>{

    const POstsDivs=document.querySelector('#POstsDivs');

    DISPLAY(POstsDivs,'');
    
    GETINDEXEDDATA('ElgonServices','ElgonServices',(data)=>{

        if (!data.Deleted) {

            CREATEELEMENT(POstsDivs,'Div','InineView',(ELEMENT)=>{

                YOUTUBEUD(data.Story,(linked)=>{
                    
                    DISPLAY(ELEMENT,`
    
                        <iframe class='SmallIframe' src='https://www.youtube.com/embed/${linked}'/><iframe>
    
                    `);
    
                    CREATEELEMENT(ELEMENT,'Footer','PostsFooter',(ELEMENTS)=>{
    
                        CREATEELEMENT(ELEMENTS,'Img','Icon',(ELEMENTES)=>{
    
                            ELEMENTES.src=WHITEPENCILICON;
    
                            CLICK(ELEMENTES,()=>{
    
                                if (condition) {
                                    
                                } else {
                                    
                                };
    
                            });
    
                        });
    
                        CREATEELEMENT(ELEMENTS,'Img','Icon',(ELEMENTES)=>{
    
                            ELEMENTES.src=WHITEDELETEICON;
    
                                CLICK(ELEMENTES,()=>{
    
                                if (navigator.onLine) {
    
                                    TOAST('PLease Wait');
    
                                    const HEADERS=[data.Name,data.Story,data.Date,data.PostedBy,data.Device,'Deleted'];
                                
                                    UPDATEDATA(API,'ElgonServices',data.ID,HEADERS,(data)=>{
    
                                        DOWNLOADSAVEINDEX(API,'ElgonServices','ElgonServices',()=>{
    
                                        });
    
                                        HIDER(3000,()=>{
    
                                            VIDEOPAGE();
    
                                        });
    
                                    },()=>{
                                        TOAST('Failed to Delete ,Please Try Again');
                                    })
                                    
                                } else {
                                    TOAST('CHeck Your Internet');
                                };
    
                            });
    
                        });
    
                    });

                });

            });

        };

    });

};