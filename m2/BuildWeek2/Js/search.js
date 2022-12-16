async function getUrl(){
    try{
    let album= await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062");
    return await album.json();
    }
    catch(error){
        console.log(error);
    }
}



async function prova(){

    let brani=await getUrl();
    let prova=document.querySelector("#prova");

    console.log("ciao");

    for(let i=1;i<=24;i++)
    {
    
        let div=document.createElement("div");
        div.classList.add("col-6","col-md-4","p-2","pl-3","pr-3");
        div.innerHTML=`
        <div>
            <span>Nuove Uscite</span>      
            <img src=${brani.cover_medium}>  
        </div>  
                    `
        prova.appendChild(div);
    }
    
}
prova();