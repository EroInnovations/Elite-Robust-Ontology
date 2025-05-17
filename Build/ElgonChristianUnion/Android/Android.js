const NOVASTART=()=>{

    if (localStorage.getItem('UserData')) {

        ROUTE('',HOMEPAGE,'HOMEPAGE');
        
    } else {
    
        ROUTE('',LOGINPAGE,'LOGINPAGE');

    }

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <h1>Welcome</h1>
        
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
        
            <h1 class='ForgotPassword'>ForgotPassword?</h1>

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
        
            <h1 class='ForgotPassword'>ForgotPassword?</h1>

            <button class='LoginButton'>Create Account</button>

            <button onclick='LOGINPAGEROUTER()' class='CreateButton'>LogIn</button>

            <br><br>

        </div>

    `);

};