let nav = document.querySelector('nav');
    window.addEventListener("scroll", (event) =>{
          let scroll = this.scrollY;
        if(window.scrollY>=450){ 
            nav.style.background= "#fff";
        }else{
            nav.style.background= "#ffc017";

        }
    })