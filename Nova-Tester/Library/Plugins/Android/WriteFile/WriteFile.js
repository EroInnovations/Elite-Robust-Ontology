const WRITEFILE=(filePath,data)=>{

    const encodedData = btoa(data);
    
    Android.writeFile(filePath, encodedData);

};

export{WRITEFILE};