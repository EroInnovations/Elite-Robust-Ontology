const WEBSITEPAGE=()=>{
    DELETESTORAGE('','MyImage');
    DISPLAY('',`

        <img class='ImageHolder' src='${PLACEHOLDER}'/>

        <p>Click The Image To Get Base 64 Code </p>

        <div class='CodeDiv' ></div>

        <div class='Holder'>

            <button id='Button' onclick='COPYDATA()' class='teal'>Copy Code</button>

            <button id='Button' onclick='RELOADPAGE()' class='forestgreen'>Reload Page</button>
        
        </div>
        
    `);
    CLICKED('.ImageHolder',()=>{
        IMAGEPICKER('.ImageHolder',(data)=>{
            DECLARATION('.CodeDiv',(ELEMENT)=>{
                DISPLAY(ELEMENT,`<p class='CodeData'>${data}</p>`);
                STORE('','MyImage',data);
            });
        });
    });
}

const COPYDATA=()=>{
    copyToClipboard(sessionStorage.getItem('MyImage'));
}

function copyToClipboard(textToCopy) {
    // Create a temporary text area element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
  
    // Select the text
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text to the clipboard
    document.execCommand('copy');
  
    // Remove the temporary text area
    document.body.removeChild(tempTextArea);
}
  