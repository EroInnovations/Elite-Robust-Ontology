const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const SERVICESROUTER=()=>{

    ROUTE(' ',SERVICEPAGE,'HOMEPAGE');

};

const ABOUTUSPAGEROUTER=()=>{

    ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

};

const DONATEPAGEROUTER=()=>{

    ROUTE(' ',DONATEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>
            
            <img class='CompanyLogo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopDiv'>

                <p onclick='SERVICESROUTER()'>Services</p>

                <p onclick='ABOUTUSPAGEROUTER()'>About Us</p>

                <p onclick='DONATEPAGEROUTER()'>Donate</p>
            
            </div>

            <h1>Creating a Smile and making a difference!</h1>

            <p class='CompanyMiniAbout'>Community Rise Ventures is a Non Government Founded Organisation that has taken steps to try and solve the community problems ,Our Vision is to create a stable and sustainable Community for enhanced Development.</p>

            <div class='ProjectDiv'></div>

            <div id='ContactUsDiv' class='ProjectDiv'>

                <img onclick='WHATSAPPUS()' src='${WHITEWHATSAPPICON}'/>

                <img onclick='FACEBOOKUS()' src='${WHITEFACEBOOKICON}'/>

                <img onclick='GMAILUS()' src='${WHITEGMAILICON}'/>

                <img onclick='INSTAGRAMUS()' src='${WHITEINSTAGRAMICON}'/>
            
            </div>
        
        </div>

    `);

};

const WHATSAPPUS=()=>{

    WHATSAPP('0779332496');

};

const GMAILUS=()=>{

    GMAIL('communityriseventures@gmail.com');

};

const INSTAGRAMUS=()=>{

    INSTAGRAM('community_rise_ventures');

};

const FACEBOOKUS=()=>{

    WEBSITE('https://www.facebook.com/share/gGoc7h3UY95qyPvU/?mibextid=wwXIfr')

};

const SERVICEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <header>

                <img onclick='HOMEPAGEROUTER()' class='LeftImage' src='${WHITEBACKICON}'/>
            
                <p class='RightText'>Services</p>

            </header>
            
        
        </div>

    `);

};

const ABOUTUSPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <header>

                <img onclick='HOMEPAGEROUTER()' class='LeftImage' src='${WHITEBACKICON}'/>
            
                <p class='RightText'>About Us</p>

            </header>
            
        </div>

    `);

};

const DONATEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftImage' src='${WHITEBACKICON}'/>
            
            <p class='RightText'>Donate</p>

        </header>

        <div id='Holder' class='HomeDiv'>

            <p >All Donations or FundRaising that are for Community Rise Ventures are recieved on the Company Account ,Help the Needy Via This Account Details Below. Your Help is Gratefully Appreciated.
            </p>

            <br>

            <h1>Donations and FundRaising</h1>
            
            <div class='TopDiv'>

                <p>Account Number</p>

                <p>60080462400</p>

            </div>

            <div class='TopDiv'>

                <p>Bank Name</p>

                <p>Absa Bank</p>

            </div>

        </div>

    `);

};