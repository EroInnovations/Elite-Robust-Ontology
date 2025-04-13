const ANDROIDHOMEPAGE=()=>{

    DISPLAY('',`
        
        <div class='AndroidHomeDiv'>

            <img  class='AndroidCompanyLogo' src='/Assets/CompanyLogoTransparent.png'>
        
            <div class='AndroidHeader'>

                <p>Products</p>

                <p onclick='AndroidServicesNav()'>Services</p>

                <p>Contact</p>
            
            </div>

            <br><br>

            <h1>Elite Robust Ontology<h1>

            <br>

            <p class='AndroidLeftText'>

                We are a Cloud Native Company Based In Mbale City and We Ventures in Computer Solutions and Personal Training In Computer Services.

                <br><br>

                We Venture in The Following Sections of Information and Technology Respectively

                <br><br>

                Mobile App Development

                <br><br>

                Desktop SoftWare Development

                <br><br>

                WebSite Development

                <br><br>

                System Development and 

                <br><br>

                Personel Training 

            </p>

        </div>

    `);

};

const AndroidServicesNav=()=>{

    ROUTE(' ',ANDROIDSERVICESPAGE,'ANDROIDHOMEPAGE');

};

const ANDROIDSERVICESPAGE=()=>{

    DISPLAY('',`

        <div class='AndroidHomeDiv'>

            <img  class='AndroidCompanyLogo' src='/Assets/CompanyLogoTransparent.png'>
        
            <br><br>

            <h1>Elite Robust Ontology<h1>

            <br>

            <div class='AndroidHeader'>

                <p>Android</p>

                <p onclick='AndroidServicesNav()'>Desktop</p>

                <p>WebSite</p>

                <p>Learning</p>
            
            </div>

        </div>
 
    `);

};