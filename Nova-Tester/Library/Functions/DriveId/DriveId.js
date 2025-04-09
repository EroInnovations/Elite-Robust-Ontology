const DRIVEID=(url)=>{
    const regex = /(?:drive|docs)\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    
    if (match) {
      return match[1];
    } else {
      throw new Error('Invalid Google Drive URL');
    }
}

export{DRIVEID}