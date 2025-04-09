const ANDROIDHOMEPAGE=()=>{

    DISPLAY('',`

        <img onclick='RELOADPAGE()' class='LeftIcon' src='${localStorage.getItem("AppIcon")}'/>
        
        <input type='Search' id='SearchInput' class='Input' placeholder='Search Icon'/>

        <div class='HomeHolder'></div>

    `);

    ANDROIDIMAGESDISPLAY();
    
}