const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>
        
            <img class='Logo' src='${EROINNOVATIONSLOGOONE}'/>
        
            <h1 class='AppName'>Elite Robust Ontology</h1>

            <br>

            <div class='TopNav'>

                <p class='BorderText'>Store</p>

                <p class='BorderText'>Developers</p>

                <p class='BorderText'>Contact</p>
            
            </div>

            <br><br>

            <p class='LeftText'>Elite Robust Ontology is a Cloud Native Based Company in Uganda ,Mbale.</p>
        
            <br>

            <p class='LeftText'>Venturing in Desktop App Development,Mobile App Development,Website Development ,System Development and Cloud Computing Services.</p>

            <br>

            <p class='LeftText'>Elite Robust Ontology has Parthnered with some companies to deliver some products and services and below are our parthners.</p>

            <br>

            <h3 class='LeftText'>Our Parthners</h3>

            <br>

            <div class='InineView' id='ParthnerHolder'>

                <div class='InineView'>

                    <img src='${QELMODENORMAL}'/>

                    <footer>

                        <h3>Qel Medistore</h3>
                    
                    </footer>
                
                </div>

                <div class='InineView'>

                    <img src='${COMMUNITYRISELOGO}'/>

                    <footer>

                        <h3>Community Rise Ventures</h3>
                    
                    </footer>
                
                </div>

                <div class='InineView'>

                    <img src='${MOUNTLOGO}'/>

                    <footer>

                        <h3>Elgon College of Health Science</h3>
                    
                    </footer>
                
                </div>

            </div>

            <br><br>

        </div>
        
    `);

};