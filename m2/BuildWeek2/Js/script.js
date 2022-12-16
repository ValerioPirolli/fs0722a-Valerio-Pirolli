async function getUrlAlbum(){
    try{
    let album= await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062");
    return await album.json();
    }
    catch(error){
        console.log(error);
    }
}

async function getUrlBrani(){
    try{
        let brani=await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50");
        return await brani.json();
    }
    catch(error){
        console.log(error);
    }
}

async function braniPreferiti(){

    let brani= await getUrlBrani();
    console.log(brani);
    let preferenze=document.querySelector("#preferenze");
    console.log(brani.data.length);

    for(let album of brani.data)
    {
        
        let div=document.createElement("div");
        div.classList.add("col-6","col-md-4","p-2","ps-1","pe-1");
        div.innerHTML=`
       
        <div class="pref">
        <div class="img-pref">
        <a href="../album/album.html">
            <img src=${album.album.cover_small}
            alt="img">
        </a>
        </div>
        <div class="testo-pref">
        <a href="../album/album.html">
            <p>${album.album.title}</p>
        </a>
        </div></div>
                    `
        let brano=album;
        console.log(brano);

        div.addEventListener("click",function (){
          
            console.log(brano);

            const oggetto=
                {
                traccia:brano
                };
                sessionStorage.setItem("chiaveDiOggetto", JSON.stringify(oggetto));
                console.log(oggetto);
        });

        preferenze.appendChild(div);
    };
     }
 
braniPreferiti();




async function scroll1(){

    let brani= await getUrlBrani();
    let scroll=document.querySelector(".scroll");

    for(let brano of brani.data)
    {

        let scrollDiv=document.createElement("div");
        scrollDiv.classList.add("scroll-div");
        scrollDiv.innerHTML=`
       
        <div>
        <a href="../album/album.html" class="col-4">
            <img src=${brano.album.cover_medium}
            alt="img">
        </a>
        </div>
        <div>
        <a href="../album/album.html"  class="col-8">
            <p>${brano.album.title}</p>
        </a>
        </div>
        </div>
                    `;
                    
                    scrollDiv.addEventListener("click",function (){
          
                        console.log(brano);
            
                        const oggetto=
                            {
                            traccia:brano
                            };
                            sessionStorage.setItem("chiaveDiOggetto", JSON.stringify(oggetto));
                            console.log(oggetto);
                    });


        scroll.appendChild(scrollDiv);

        
    }
}
scroll1();

async function albumCover(){

    let brani= await getUrlBrani();

    console.log(brani);
    const randomElement = brani.data[Math.floor(Math.random() * brani.data.length)];
    console.log(randomElement);

    let imgProfili=document.querySelectorAll(".img-profilo");
    console.log(imgProfili)
    for (let imgProfilo of imgProfili){
        let randomElement2 = brani.data[Math.floor(Math.random() * brani.data.length)];
        imgProfilo.innerHTML=`
                                <img src=${randomElement2.album.cover_small} width="40px">
                                `;
    };

    let imgPlaylist=document.querySelector(".img-fl-as");
    imgPlaylist.innerHTML=`
                            <img src=${randomElement.album.cover_small}>
                            Crea Playlist
                            `

    let albumCover=document.querySelector("#albumCover");
    let nomeAlbum=document.querySelector("#nomeAlbum");
    let nomeArtista=document.querySelector("#nomeArtista");    
    
    albumCover.innerHTML=`
                            <img src=${randomElement.album.cover_medium} id=album__immagine>
                                `;
    nomeAlbum.innerHTML=`
                            ${randomElement.title}
                            `;
    nomeArtista.innerHTML=`
                            ${randomElement.artist.name}
                            `;


    let randomAlbum=randomElement;
    let button_play = document.querySelector("#button-play");
    button_play.addEventListener("click", async function (){

        toggleAudio();
        

        let audioPlayer=document.querySelector(".audioPlayer");
        audioPlayer.innerHTML=`
                                <source src=${randomElement.preview}>
                                `;
        
        let imgPlayerBot=document.querySelector(".imgPlayerBot");
        imgPlayerBot.innerHTML=`
                                <div class="p-4 pb-2">
                                <img class="img-fluid" src=${randomElement.album.cover_small}>
                                </div>
                                    `;
        
        let testoPlBs=document.querySelector("#testo-plBs");
        testoPlBs.innerHTML=`
                            <p>${randomElement.title_short}</p>
                            <p>${randomElement.artist.name}</p>
                            `;
                       
                
        const oggetto = {
            traccia: randomAlbum
        };
        console.log(randomAlbum);
        sessionStorage.setItem("chiaveDiOggetto", JSON.stringify(oggetto));
    })
}
albumCover();



   
   
   





const getHour= function(){

    let ora=new Date();
    let ore=ora.getHours();
    let saluto=document.querySelector("#saluto");

    ore<=12&&ore>=6?saluto.textContent="Buongiorno"
    :ore<=17&&ore>=13?saluto.textContent="Buon pomeriggio"
    :ore<=24&&ore>=18?saluto.textContent="Buonasera"
    :saluto.textContent="Buonanotte";
}
getHour();








const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      timeline = document.querySelector('.timeline'),
      soundButton = document.querySelector('.sound-button'),
      playIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="m-0" >
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" widht="24" clip-rule="evenodd" />
  </svg>
      `,
      pauseIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="m-0">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" widht="24" clip-rule="evenodd" />
</svg>
      `,
      soundIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="m-0">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`,
      muteIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="m-0">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" widht="24" clip-rule="evenodd" />
</svg>`;

function toggleAudio () {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
  let button_play = document.querySelector("#button-play");
  if(button_play.innerHTML=="Play"){
    button_play.innerHTML="Pausa"
  }
  else{
button_play.innerHTML="Play";
  }

}

playerButton.addEventListener('click', toggleAudio);

function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}

audio.ontimeupdate = changeTimelinePosition;

function audioEnded () {
  playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

function changeSeek () {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);

function toggleSound () {
  audio.muted = !audio.muted;
  soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
}

soundButton.addEventListener('click', toggleSound);
