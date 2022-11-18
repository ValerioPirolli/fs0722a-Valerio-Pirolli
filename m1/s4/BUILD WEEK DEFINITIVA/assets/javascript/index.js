let checkbox = document.querySelector('#checkbox-welcome');            //agganciamo gli elementi necessari dell'html
let notChecked = document.createElement('span')
let divBottone = document.querySelector('#div-bottone-welcome')
let bottone = document.querySelector('#bottone-welcome');

function reindirizzamento() {                               //la funzione reindirizzamento farà si che al click del bottone si venga reindirizzati alla--
    checkbox.addEventListener("change", () => {             //pagina successiva. Inoltre facciamo si che se si verrà a cliccare il bottone senza aver--
        bottone.textContent = "PROCEDI"                     //accettato i termini,non si potrà andare avanti finchè non li si accetteranno.
    })
    if (checkbox.checked) {
        window.location.href = 'test.html'
    } else {
        bottone.textContent = "PROMETTI"
    }
}

bottone.addEventListener('click', reindirizzamento);