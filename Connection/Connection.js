export const CONNECTION=(Path,Store)=>{
    fetch(Path)
    .then(res =>res.text())
    .then(data =>{
        localStorage.setItem(Store,data);
    })
    .catch(error=>console.log(error));
};