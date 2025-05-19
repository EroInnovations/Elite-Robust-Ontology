const API='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?usp=sharing';

const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTE=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>
        
            <img class='Logo' src='${COMMUNITYRISELOGO}'/>
            
            <div class='TopNav'>
            
                <p onclick='SERVICESPAGEROUTE()'>Services</p>

                <p onclick='ABOUTPAGEROUTE()'>About</p>

                <p onclick='DONATEPAGEROUTE()' >Donate</p>

                <p onclick='CONTACTUSPAGEROUTE()'>Contact</p>
            
            </div>

            <h1>History</h1>

            <p class='BriefIntro'>Community Rise Ventures is a Non Government Funded Organisation that is Responsible and Loves it Community,We Venture in helping the needy and try to resolve community issue without interfering with government projects.</p>
        
            <p class='BriefIntro'>We are Located in Mbale City in Kasanvu ,near Mbale College.</p>

            <h1>Our Projects</h1>

            <p class='BriefIntro'>Community Rise Being a Non Government Funded Organisation and Registered,The Funds that run and act as daily support for our organisation inorder to for us to continue to support the community is from your donations and we do wish to show the good hearted people where there donations good thus we post the archievements of our organisation and how far they have come to support the community and if you wish become part of the supporters for a good cause to humanit,please donate to us from the donation section of the site.</p>

            <h3>See Them Below</h3>

            <div class='ProjectDIv'></div>

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