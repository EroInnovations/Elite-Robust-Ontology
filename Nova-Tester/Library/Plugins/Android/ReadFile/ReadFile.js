const READFILE=(Path,fileData)=>{

    var fileData=Android.readFileAsBase64(Path);
    
    callback(fileData);
    
};

export{READFILE};