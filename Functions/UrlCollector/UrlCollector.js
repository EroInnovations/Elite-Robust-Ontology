const URLCOLLECTOR=()=>{

    const url = new URL(window.location.href);
  
    // Extract query parameters
    const queryParams = {};
    url.searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });
  
    // Extract hash (if any)
    const hash = url.hash ? url.hash.substring(1) : null;
  
    // Extract path segments
    const pathSegments = url.pathname.split('/').filter(seg => seg);
  
    // Construct data object
    const dataToStore = {
      query: Object.keys(queryParams).length ? queryParams : null,
      hash: hash || null,
      path: pathSegments.length ? pathSegments : null,
      origin: url.origin,
      fullUrl: url.href
    };
  
    // Remove nulls to save space
    Object.keys(dataToStore).forEach(key => {
      if (dataToStore[key] === null) {
        delete dataToStore[key];
      }
    });
  
    // Store in sessionStorage
    sessionStorage.setItem('urlInfo', JSON.stringify(dataToStore));
  
};

export{URLCOLLECTOR};