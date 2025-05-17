const NOVASTART=()=>{

    if (!localStorage.getItem('UserData')) {

        ROUTE('',HOMEPAGE,'HOMEPAGE');
        
    } else {
    
        ROUTE('',LOGINPAGE,'LOGINPAGE');

    };

};

const HOMEPAGEROUTER=()=>{
    ROUTE('',HOMEPAGE,'HOMEPAGE');
};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <div class='TopNav'>

                <img class='LeftIcon' src='${WHITEMENUICON}'/>

                <img class='RightIcon' src='${WHITEUSERPROFILEICON}'/>
            
            </div>

            <h1>Dash Board</h1>

            <div class='ContentHolder'>

                <div class='InineView'>
                    <img id='CenterIcon' class='Icon' src='${WHITEPOSTICON}'/>
                    <p>Posts</p>
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

            <input class='RoundInput' type='email'  Placeholder='Enter Email'/>

            <input class='RoundInput' type='password'  Placeholder='Enter Password'/>
        
            <h1 class='ForgotPassword' onclick='FORGOTPASSWORDPAGEROUTER()'>ForgotPassword?</h1>

            <button class='LoginButton'>LogIn</button>

            <button onclick='CREATEACCOUNTROUTER()' class='CreateButton'>Create Account</button>

        </div>

    `);

};

const CREATEACCOUNTROUTER=()=>{
    ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');
};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='AppLogo' src='${MOUNTLOGO}'/>

            <h1 class='AppName'>Mt Elgon Christian Union</h1>

            <input class='RoundInput' type='text'  Placeholder='Enter Your Name'/>

            <input class='RoundInput' type='email'  Placeholder='Enter Email'/>

            <input class='RoundInput' type='password'  Placeholder='Enter Password'/>
        
            <button class='LoginButton'>Create Account</button>

            <button onclick='LOGINPAGEROUTER()' class='CreateButton'>LogIn</button>

            <br><br>

        </div>

    `);

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

