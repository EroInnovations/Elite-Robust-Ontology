const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <img class='CompanyLogo' src='${COMMUNITYRISELOGO}'/>

        <div class='TopNav'>

            <p>Services</p>

            <p>Donate</p>

            <p>Contact Us</p>
        
        </div>

        <h1 class='Moto'>Creating a Smile and making a difference!</h1>

        <p class='MiniAboutUs'>Community Rise Ventures is a Non Government Founded Organisation that has taken steps to try and solve the community problems ,Our Vision is to create a stable and sustainable Community for enhanced Development.</p>
        
    `);

};