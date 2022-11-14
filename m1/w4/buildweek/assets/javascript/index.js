let checkbox = document.querySelector('#checkbox-welcome');
let notChecked = document.createElement('span')
let divBottone = document.querySelector('#div-bottone-welcome')
function reindirizzamento(){
    
    if(checkbox.checked){
        window.location.href = 'test.html'
    } else if(notChecked.textContent !== 'Non hai checkato'){
        notChecked.textContent = 'Non hai checkato'
        divBottone.appendChild(notChecked)
    }
}
    
    


let bottone = document.querySelector('#bottone-welcome');
bottone.addEventListener('click', reindirizzamento);