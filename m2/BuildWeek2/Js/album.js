
const brano1= sessionStorage.getItem("chiaveDiOggetto");
console.log({ brano1});

const brani = JSON.parse(brano1);

async function imgCarta()
{
    let imgCarta= brani;
    let cartaBb=document.querySelector(".carta-bb");
    let TitoloAlbum=document.querySelector("#titolo-album");
    let pImmagine=document.querySelector("#pImmagine");

    let imgCartaHtml=document.querySelector(".img-carta");
    let tipo=imgCarta.traccia.album.type.toUpperCase();

    let navbar=document.querySelector("nav");
    navbar.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      <span id="testo-nav">${imgCarta.traccia.album.title}</span>`;



    cartaBb.innerHTML=`
                        <b>${tipo}</b>
                        `;

    imgCartaHtml.innerHTML=`
                            <img src=${imgCarta.traccia.album.cover_medium}>
                            `;

    

 pImmagine.innerHTML=`
        <img class="rounded-circle" src=${imgCarta.traccia.contributors[0].picture_small}>
        <span><a href="../artisti/artisti.html"><b>${imgCarta.traccia.artist.name}</b></a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
      </svg></span>
     
                    `;         

    TitoloAlbum.innerHTML=`
                            ${imgCarta.traccia.album.title}
                            `;
 
}
imgCarta();

console.log(brani);

let trackList=brani.traccia.album.tracklist;
console.log(trackList);



    
    async function canzoniAlbum(){
        let tracce= await fetch(trackList);
        return await tracce.json();     

    }
    canzoniAlbum();


    async function riempiCanzone(){
        let canzoni=await canzoniAlbum();
        console.log(canzoni);
        console.log(canzoni.data);

        
        let creaPlaylist=document.querySelector(".creaPlaylist");
        creaPlaylist.innerHTML=`
                                <img src=${brani.traccia.album.cover_small}>
                                <span>Crea Playlist</span>
                                `;

        let randomSong=canzoni.data[Math.round(Math.random()*canzoni.data.length)];


        let shuffle=document.querySelector(".bi-shuffle");
      
        shuffle.addEventListener("click",function(){
        
          let randomSong=canzoni.data[Math.round(Math.random()*canzoni.data.length)];

          loadPlayer(randomSong);
          let audio=document.querySelector(".audioPlayer");
            audio.load();
            toggleAudio();

        })
      console.log(canzoni);
       
        let divCanzone=document.querySelector(".canzone");

        let i = 1;
        
        for (let canzone of canzoni.data){
          
            let contenitore_canzone = document.createElement("div");
            contenitore_canzone.classList.add("col-12","row","canzone-hover");


            let durata_canzone = ((canzone.duration/60).toFixed(2));

            contenitore_canzone.innerHTML=`
            
            <div class="col-1 puntini">${i}
            </div>
            <div class="col-10 song">
            <p>${canzone.title}</p>
            <p><a class="join_artist" href="../artisti/artisti.html">${canzone.artist.name}</a></p>
            </div>
            <div class="col-1">${durata_canzone}
            </div>`;
            
            document.querySelector(".canzone").appendChild(contenitore_canzone);

           i++; 

           document.querySelector(".join_artist").addEventListener("click", function(e){
            
            const obj_artist = {
                url_artist: canzone
            };

            sessionStorage.setItem("chiaveDioggetto2", JSON.stringify(obj_artist))

           });
           
       
           

           contenitore_canzone.addEventListener("click",function(){         
            
           console.log(canzoni);
              console.log(canzone);
            loadPlayer(canzone);
           
            let audio=document.querySelector(".audioPlayer");
            audio.load();
            toggleAudio();

           })

           console.log(canzoni);
          
        
           
            /*
           audio.onended=function next(){             
                        
                
                loadPlayer(canzoneSuccessiva);
                let audio=document.querySelector(".audioPlayer");
                audio.load();
                toggleAudio(); 
              }           
            */
            
            
          }
          
        function loadPlayer(canzone){
          console.log(canzone);
          mediaplayer.innerHTML = `
          <source src=${canzone.preview}>
            `;
            let imgPlayerBot=document.querySelector(".imgPlayerBot");
            imgPlayerBot.innerHTML=`
                                    <div class="p-4 pb-2">
                                    <img class="img-fluid" src=${brani.traccia.album.cover_small}>
                                    </div>
                                        `;
            let testoPlBs=document.querySelector("#testo-plBs");
            testoPlBs.innerHTML=`
                              <p>${canzone.title_short}</p>
                              <p>${canzone.artist.name}</p>
                              `;

           let playerMobile=document.querySelector("#player");
          playerMobile.innerHTML=`
                                    <div class="img-p">
                                      <img src=${brani.traccia.album.cover_small}>
                                    </div>
                                      <div class="testo-footer>
                                          <span class="titoloCanzone">${canzone.title_short}</span>
                                          <p class="nomeArtista">${canzone.artist.name}</p>
                                        </div>
                                  `;
                                  
                                  let audioPlayerTablet=document.querySelector(".icon-container3");
                                  audioPlayerTablet.innerHTML=`
                                                                      <div class="img-p">
                                                                            <img src=${brani.traccia.album.cover_medium}>
                                                                          </div>
                                                                            <div class="testo-footer>
                                                                                <span class="titoloCanzone">${canzone.title_short}</span>
                                                                                <p class="nomeArtista">${canzone.artist.name}</p>
                                                                              </div>
                                                                      `;

        }


        let collegamento=document.querySelector("#collegamento");
        collegamento.innerHTML=`
                                <span>${canzoni.data.length} brani</span>
                                `;
        
        console.log(canzoni.data[0].preview);

        let mediaplayer = document.querySelector(".audioPlayer");
        


        let btn_green = document.querySelector("#greenButton");
        btn_green.addEventListener("click", function(e){
          ;
          toggleAudio();              
   


          mediaplayer.innerHTML = `
          <source src=${canzoni.data[0].preview}>`;

          let imgPlayerBot=document.querySelector(".imgPlayerBot");
          imgPlayerBot.innerHTML=`
                                  <div class="p-4 pb-2">
                                  <img class="img-fluid" src=${brani.traccia.album.cover_small}>
                                  </div>
                                      `;

      
        })
    }
    riempiCanzone();

   
    

    function toggleButtonPlay(btn){
      let imgPausa=`<svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" class="bi bi-pause-fill play" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    </svg>`;
    let imgPlay=`<svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill play" viewBox="0 0 16 16">
    <path
      d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
  </svg>`;

  if (audio.paused) {
      
    btn.innerHTML = imgPlay;
    
  } else{

    btn.innerHTML = imgPausa;
  }

    }

    const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('#audioPlayer'),
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
  
  let btn_green = document.querySelector("#greenButton");
  toggleButtonPlay(btn_green);
 
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

/*
function toggleBtn(btn1){
 
  if(btn1.innerHTML==playIcon)
  {btn1.innerHTML=pauseIcon}
  if(btn1.innerHTML==pauseIcon){
     btn1.innerHTML=playIcon;
  }
   
} 
*/

let imgProfiloAmici= document.querySelectorAll(".img-profilo");
for (let img of imgProfiloAmici){
  img.innerHTML=`
                  <img src=${brani.traccia.album.cover_small}>
                  `
}



/*---------------------------------------------------------------*/