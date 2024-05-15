//ANIMATION TRANSITION 

const cardStart = document.querySelector('.container-start');
const cardLoad = document.querySelector('.container-loading');
const cardEnd = document.querySelector('.container-end');
const input = document.querySelectorAll('#nb-select');
const sub = document.getElementById('submitValues');

let verify = false

/* 
    SI (input cliquer) 
        ALORS verify = true
    SINON
        ALORS verify = false

    SI (sub cliquer)
        ALORS SI (verify = true)
                ALORS afficher la suite
              SINON
                alert -> "aucun input selectionner"
        SINON
            attendre  
*/

input.forEach(element => {
    const displayNumber = document.getElementById('number-select')

    element.addEventListener('click', () => {
        verify = true
        displayNumber.innerText = element.value
    })
})

sub.addEventListener('click', () => {
    if (verify === true) {
        cardStart.style.display = 'none';
        cardLoad.style.display = 'block';
        setTimeout(() => {
            cardLoad.style.display = 'none';
        }, 2000);
        setTimeout(() => {
            cardEnd.style.display = 'block';
        }, 2000);
    } else {
        alert('Selectionner une note !')
    }
})

