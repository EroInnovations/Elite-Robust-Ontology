const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTE=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>
        
            <img class='Logo' src='${EROINNOVATIONSLOGOONE}'/>
        
            <h1 class='AppName'>Elite Robust Ontology</h1>

            <br>

            <div class='TopNav'>

                <p class='BorderText' onclick='STOREPAGEROUTE()'>Store</p>

                <p class='BorderText' onclick='DEVELOPERPAGEROUTE()'>Developers</p>

                <p class='BorderText' onclick='CONTACTPAGEROUTE()'>Contact</p>
            
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

const STOREPAGEROUTE=()=>{

    ROUTE(' ',STOREPAGE,'HOMEPAGE');

};

const STOREPAGE=()=>{

    DISPLAY('',`

        <header>
        
            <img class='LeftIcon' onclick='HOMEPAGEROUTE()' src='${WHITEBACKICON}'/>

            <h3 class='RightText' >Store</h3>

        </header>

        <div class='HeaderDiv'></div>
        
    `);
    
};

const DEVELOPERPAGEROUTE=()=>{

    ROUTE(' ',DEVELOPERPAGE,'HOMEPAGE');

};

const DEVELOPERPAGE=()=>{

    DISPLAY('',`

        <header>
        
            <img class='LeftIcon' onclick='HOMEPAGEROUTE()' src='${WHITEBACKICON}'/>

            <h3 class='RightText'>Developer</h3>

        </header>
        
        <div class='HeaderDiv'></div>

    `);
    
};

const CONTACTPAGEROUTE=()=>{

    ROUTE(' ',CONTACTPAGE,'HOMEPAGE');

};

const CONTACTPAGE=()=>{

    DISPLAY('',`

        <header>
        
            <img class='LeftIcon' onclick='HOMEPAGEROUTE()' src='${WHITEBACKICON}'/>

            <h3 class='RightText'>Contact</h3>

        </header>

        <div class='HeaderDiv'>

            <button class='InlineButton'>

                <p class='LeftText'>Instagram</p>

                <img class='RightIcon' src='${WHITEINSTAGRAMICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Gmail</p>

                <img class='RightIcon' src='${WHITEGMAILICON}'/>
            
            </button>
        
        </div>
        
    `);
    
};