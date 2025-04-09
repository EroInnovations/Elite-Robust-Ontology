const ENVIRONMENTCHECKER=()=>{

    OPERATINGSYSTEM();

    if (localStorage.getItem('OperatingSystem') === 'Android' ) {

        ROUTE('',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');
        
    } else {

        ROUTE('',DESKTOPHOMEPAGE,'DESKTOPHOMEPAGE');
        
    };

};

const ANDROIDHOMEPAGE=()=>{

    DISPLAY('',`

        <img class='AppLogo' src='logo.png'>

        <header>

            <h1 onclick='DeveloperNav()' >Developers</h1>

            <h1 onclick='AboutUsNav()'>About Us</h1>

            <h1 onclick='ContactUsNav()'>Contact Us</h1>

        </header>

        <br><br>
        
        <p>

           Elite Robust Ontology (ERO) Is a Cloud Based Native Company Located In Mbale City and We Venture in Software Development,Mobile App Development,Website Development and System Development.

           <br><br>

           We are the lead Development Company in using Cloud Native Based Cutting Edge Technology ,Lets Develop Your Dream

           <br><br>

           We let you imagine then We Innovate it and Inspire the Rest,to follow and Trend in Development.

        </p>

        <br>

        <h1 class='Servicename'>Our Services</h1>

        <div class='SectionHolders'>

            <img class='SectionLogo' src="https://th.bing.com/th/id/OIP.O4b29g448P1Js7pElwG6-AHaFC?rs=1&pid=ImgDetMain" >

            <div class='DataDiv'>

                <br>

                <h1>Mobile App Development</h1>

                <br> <br>

                <p>
                    We greatly Understand That Developing a Mobile App is a challenging Task that takes months and then comes the hustle of updating and hosting it to playstore with the correct guidelines
                  
                    <br> <br>

                    Elite Robust Ontology Ventures Deeep in Creating Your Android or Ios App and Host it for you with Ease and No need for over Updating the Apps because we use cutting technology to deliver your app to Users and is compactable with all Mobile Devices and Comes Fully Compact .

                    <br> <br>
                    lets Save You  the hustle and Time and allow you Focus in More Important Matters .click the Button Below to get started .

                    <br> <br>
                    
                </p>

                <button class='OrderButton'>Order Now</button>

            </div>

        </div>

        <div class='SectionHolders'>

            <img class='SectionLogo' src="https://th.bing.com/th/id/OIP.CEvxcIsC86ApNESZtNwUdwHaEK?rs=1&pid=ImgDetMain" >

            <div class='DataDiv'>

                <br>

                <h1>Website Development</h1>

                <br> 

                <p>

                    Whats a Company or Organisation Without a website Today,

                    <br> <br>

                    Elite Robust Ontology ,We Specialise in Designing,Buildig and Updating Websites for Our Customers,We use fully Driven Inhouse and External FramesWorks to Build Monitor and Detect Threats in Our Websites Thus Making Sure that Our Built Websites are Upto Date and Server the Value,

                    <br> <br>

                    Let Us give You value For Your Money ,Lets Build Your Dream Site and Get your Business Online Today.

                    <br> <br>

                    <button class='OrderButton'>Build Now</button>

                </p>

            </div>

        </div>

        <div class='SectionHolders'>

            <img class='SectionLogo' src="https://th.bing.com/th/id/OIP.h0H0954afvQ3m1JSEAch6wHaFW?rs=1&pid=ImgDetMain" >

            <div class='DataDiv'>

            <br><br>

            <h1>System Development</h1>

            <p>

                Developing a system is making it work in all Aspects is not Easy Regardless of the Experience ,There Ups and Downs ,Alot of Compactibilty Issues
            
                <br><br>

                Elite Robust Ontology has Designed a Cloud Native System that is used to Ease the Work of a Normal Person regardless hence building long lasting,proven and tested systems for your Business No Matters the Situation
                
                <br><br>

                Get Started Today and let us Handle the Hard Parts of the Work Force

                <br><br>

                <button class='OrderButton'>Configure Now</button>

            </p>

            </div>

        </div>

        <br>

         <h1 class='Servicename'>Reach Us</h1>

        <br>

        <div class='FooterDiv'>

            <img src="${WHITEPHONEICON}">

            <img src="${WHITEINSTAGRAMICON}">

            <img src="${WHITEGMAILICON}">

        </div>
        
    `);

};

const DeveloperNav=()=>{

    ROUTE(' ',ANDROIDDEVELOPERPAGE,'ANDROIDHOMEPAGE');

};

const AboutUsNav=()=>{

    ROUTE(' ',ANDROIDABOUTUSPAGE,'ANDROIDHOMEPAGE');

};

const ContactUsNav=()=>{

    ROUTE(' ',ANDROIDCONTACTUSPAGE,'ANDROIDHOMEPAGE');

};


const ANDROIDDEVELOPERPAGE=()=>{

    DISPLAY('',`
        
    `)

};

const ANDROIDABOUTUSPAGE=()=>{

    DISPLAY('',`

        <br>

        <img class='AppLogo' src='logo2.png'>

        <h1 class='Servicename'>Who We Are!</h1>

        <br><br>

        <h1>Elite Robust Ontology</h1>

        <p>

            Elite Robust Ontology is a Software Development Company Located In Mbale City ,Uganda.
            
            <br><br>

            We Venture in Mobile App Development,Desktop App Development ,Website Development and System Development and Monitoring. 

            <br><br>

            We have Worked With Mult


        </p>
        
    `);

};

const ANDROIDCONTACTUSPAGE=()=>{

    DISPLAY('',`
        
    `)

};

const DESKTOPHOMEPAGE=()=>{

    DISPLAY('',`

        Under Development
        
    `);

};