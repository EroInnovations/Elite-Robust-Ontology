const  DOWNLOADIMAGE=(base64String, filename)=> {
    
    const link = document.createElement('a');
    
    link.href = base64String;
    
    link.download = filename;
    
    link.click();

};

export{DOWNLOADIMAGE};