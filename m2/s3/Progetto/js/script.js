var cac = document.getElementById('cic')
async function loadUsers() {
    const response = await fetch('users.json');
    console.log(response)
    const users = await response.json();
    return users;
}
document.addEventListener('DOMContentLoaded', async () => {
    var users = [];
    try {
        users = await loadUsers();
    } catch (e) {
        console.log('Error')
        console.log(e)
    }
    function funzione() {
        for(let i = 0; i < users.length; i++){
            cac.innerHTML +=`<div class="col-4 text-center p-5"><div class="card"><div><img src="${users[i].profileURL}" alt="img"></img></div><p>${users[i].firstName} ${users[i].lastName}</p><a href="#">${users[i].email}</a></div></div>`
        }
    }
    funzione();
})
