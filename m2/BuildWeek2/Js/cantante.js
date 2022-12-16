 
 const url_artist = sessionStorage.getItem("chiaveDioggetto2");


const url_artist2 = JSON.parse(url_artist);
console.log(url_artist2);



let abc2 = url_artist2.url_artist.artist.tracklist;

async function speranza () {
    let def2 = await fetch (abc2); 
    let def3= await def2.json();
    console.log(def3.data);

/*
    let img = document.querySelector(".img-carta");

    let mno2 = document.querySelector("#titolo-album");

    mno2.innerHTML = def3.data[0].artist.name;

    img.innerHTML = `
    <img src = ${def3.data[0].contributors[0].picture_big}>
    `;
*/
   

    let i = 1;

    for (let x=0;x<=4;x++){
        
        

        let contenitore_canzone = document.createElement("div");
        contenitore_canzone.classList.add("col-12","row","canzone");

       
        let durata_canzone = ((def3.data[x].duration/60).toFixed(2));
       
        contenitore_canzone.innerHTML=`
        <div class="col-1 puntini">${i}</div>
        <div class="col-10 testo-canzone">
        <img class="img-float join_artist" src=${def3.data[x].album.cover_small} >
        <p class=pt-2>${def3.data[x].title}</p>
        </div>
        
        
        
        <div class="col-1 puntini">${durata_canzone}
        </div>`;
        
        document.querySelector("#carousel-canzoni").appendChild(contenitore_canzone);

       i++; 
        let scelta=def3.data[x];
        contenitore_canzone.addEventListener("click",function(){
            console.log(scelta);

            loadPlayer(scelta);
       
            let audio=document.querySelector(".audioPlayer");
            audio.load();
            toggleAudio();

       });

      
    }

    function loadPlayer(canzone){
        console.log(canzone);
        mediaplayer.innerHTML = `
        <source src=${canzone.preview}>
          `;
          let imgPlayerBot=document.querySelector(".imgPlayerBot");
          imgPlayerBot.innerHTML=`
                                  <div class="p-4 pb-2">
                                  <img class="img-fluid" src=${canzone.album.cover_small}>
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
                                                      <img src=${canzone.album.cover_small}>
                                                    </div>
                                                      <div class="testo-footer>
                                                          <span class="titoloCanzone">${canzone.title_short}</span>
                                                          <p class="nomeArtista">${canzone.artist.name}</p>
                                                        </div>
                                                  `;

            let audioPlayerTablet=document.querySelector(".icon-container3");
            audioPlayerTablet.innerHTML=`
                                                <div class="img-p">
                                                      <img src=${canzone.album.cover_medium}>
                                                    </div>
                                                      <div class="testo-footer>
                                                          <span class="titoloCanzone">${canzone.title_short}</span>
                                                          <p class="nomeArtista">${canzone.artist.name}</p>
                                                        </div>
                                                `   
      }

      let mediaplayer = document.querySelector(".audioPlayer");
        
        let btn_green = document.querySelector("#greenButton");
        btn_green.addEventListener("click", function(e){
          ;
          toggleAudio();     

         

          mediaplayer.innerHTML = `
          <source src=${def3.data[0].preview}>`;

         
        })


        let imgPlaylist=document.querySelector(".creaPlaylist");
        imgPlaylist.innerHTML=`
                                <img src=${def3.data[0].album.cover_small}>
                                Crea Playlist
                                    `;


    
    let shuffle=document.querySelector(".bi-shuffle");

    shuffle.addEventListener("click",function(){

        let numeroShuffle=Math.round(Math.random()*5);
        let randomSong=def3.data[numeroShuffle];

        loadPlayer(randomSong);
          let audio=document.querySelector(".audioPlayer");
            audio.load();
            toggleAudio();

    });


    let randomNum= Math.round(Math.random()*def3.data.length);
    console.log(randomNum);
    console.log(def3.data[randomNum])

    let selezione=document.querySelector("#selezione");
    selezione.innerHTML=`
                            <div class="col-2 img-SEL">
                            <img src=${def3.data[randomNum].album.cover_medium}>
                            </div>
                            <div class="col-8 ps-4">
                            <div class="row justify-content-center align-items-center g-2">
                            <div class="col-12 img-sel">
                            <img src=${def3.data[randomNum].contributors[0].picture_medium}>
                            <span>pubblicato da ${def3.data[randomNum].contributors[0].name}</span>
                            </div>
                            <div class=col-12>
                            <p class="titolo-sel">collector edition</p>
                            </div>
                            <div class=" col-12">
                            <p/>${def3.data[randomNum].album.type}</p
                            </div>
                            </div>
                            </div>
                            <div class="col-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right"
                        viewBox="0 0 16 16"><path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
                            </div>
                            `;

        selezione.addEventListener("click",function(){
            window.location.href = "../album/album.html";
            let brano=def3.data[randomNum];
            const oggetto=
                {
                traccia:brano
                };
                sessionStorage.setItem("chiaveDiOggetto", JSON.stringify(oggetto));
                console.log(oggetto);

        });

        async function getUrlBrani(){
            try{
                let brani=await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50");
                return await brani.json();
            }
            catch(error){
                console.log(error);
            }
        }
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



function toggleButtonPlay(btn){
    let imgPausa=`<svg xmlns="http://www.w3.org/2000/svg"  fill="black" class="bi bi-pause-fill play" viewBox="0 0 16 16">
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
          
          for (let i=0;i<4;i++){
          let imgProfiloAmici= document.querySelectorAll(".img-profilo");
          for (let img of imgProfiloAmici){
            
            let randomNum2= Math.round(Math.random()*def3.data.length);
            img.innerHTML=`
                            <img src=${def3.data[randomNum2].album.cover_small}>
                            `
          }
        }





        
                            
}

speranza();






