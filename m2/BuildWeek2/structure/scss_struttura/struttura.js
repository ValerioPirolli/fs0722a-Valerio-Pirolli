let nav = document.querySelector('nav');
let titoloNav = document.querySelector('#testo-nav');
titoloNav.style.display ="none";
    window.addEventListener("scroll", (event) =>{
          let scroll = this.scrollY;
        if(window.scrollY>=200){ 
            nav.style.backdropFilter= "blur(8px)";
            nav.style.background= "rgba(0, 0, 0, 0.1)";
            titoloNav.style.display ="inline";
        }else{
            nav.style.background= "transparent";
            nav.style.backdropFilter= "unset";
            titoloNav.style.display ="none";
        }
    })