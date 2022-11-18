let commento = document.querySelector('#commento')

let bottone = document.querySelector('#bottone-feedback')


let epicode = function () {
    if (commento.value == 'paguro') {
        console.log(commento.value)
        window.location.href = 'https://www.youtube.com/@CiccioGamer89'
    }
    else {

        console.log(commento.value)
        window.location.href = 'https://epicode.com/it/'

    }
}

bottone.addEventListener('click', epicode)



let stars = document.querySelectorAll('.cursor')



for (let i = 0; i < stars.length; i++) {

    stars[i].addEventListener('click', function () {
       
        
        if(stars[i].classList.contains('stella')){

            for(let contatore=0; contatore<=i; contatore++){

                stars[contatore].classList.remove('stella')

            }

        }
        else if (!stars[i].classList.contains('stella')){

            for(let contatore=i+1; contatore<=10; contatore++){
                
                stars[contatore].classList.add('stella')
                
            }
        }
    }
    )
}






