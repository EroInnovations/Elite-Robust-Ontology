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
            
                <p>Services</p>

                <p>About</p>

                <p onclick='DONATEPAGEROUTE()' >Donate</p>

                <p>Contact</p>
            
            </div>
        
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