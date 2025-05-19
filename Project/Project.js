const API='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?usp=sharing';

const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTE=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='RelativeDiv'>
        
            <img class='Logo' src='${COMMUNITYRISELOGO}'/>
            
            <div class='TopNav'>
            
                <p onclick='SERVICESPAGEROUTE()'>Services</p>

                <p onclick='ABOUTPAGEROUTE()'>About</p>

                <p onclick='DONATEPAGEROUTE()' >Donate</p>

                <p onclick='CONTACTUSPAGEROUTE()'>Contact</p>
            
            </div>

            <h1>History</h1>

            <p class='BriefIntro'>Community Rise Ventures is a Non Government Funded Organisation that is Responsible and Loves it Community,We Venture in helping the needy and try to resolve community issue without interfering with government projects.</p>
        
        </div>
    `);

};

const DONATEPAGEROUTE=()=>{

    ROUTE(' ',DONATEPAGE,'HOMEPAGE');

};

const DONATEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>
        
            <h1 class='RightText'>Donate</h1>

        </header>

        <div class='HeaderDiv'></div>
        
    `);

};

const SERVICESPAGEROUTE=()=>{
   
    ROUTE(' ',SERVICESPAGE,'HOMEPAGE');
    
};

const SERVICESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>
        
            <h1 class='RightText'>Services</h1>

        </header>

        <div class='HeaderDiv'></div>
        
    `);

};

const ABOUTPAGEROUTE=()=>{
   
    ROUTE(' ',ABOUTPAGE,'HOMEPAGE');
    
};

const ABOUTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>
        
            <h1 class='RightText'>About</h1>

        </header>

        <div class='HeaderDiv'></div>
        
    `);

};

const CONTACTUSPAGEROUTE=()=>{
   
    ROUTE(' ',CONTACTPAGE,'HOMEPAGE');
    
};

const CONTACTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>
        
            <h1 class='RightText'>Contact</h1>

        </header>

        <div class='HeaderDiv'></div>
        
    `);

};