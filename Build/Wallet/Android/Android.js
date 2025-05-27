const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <footer>

            <div class='IconTextHolder'>

                <img class='Icon' src='${WHITEPOSTICON}'/>

                <p class='BottomText'>Deposit</p>

            </div>

            <div class='IconTextHolder'>

                <img class='Icon' src='${WHITESUBSCRIPTIONICON}'/>

                <p class='BottomText'>Services</p>

            </div>

            <div class='IconTextHolder'>

                <img class='Icon' src='${WHITEUSERPROFILEICON}'/>

                <p class='BottomText'>Account</p>

            </div>
        
        </footer>
        
    `);

};