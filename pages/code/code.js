/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Changements de l'interface
 */

// Light mode / dark mode

const buttonMode = document.querySelector('.button-mode');

buttonMode.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('dark'))
    {
        body.classList.add('light')
        body.classList.remove('dark')
        buttonMode.innerHTML = "Dark"
    }
    else if(body.classList.contains('light'))
    {
        body.classList.add('dark')
        body.classList.remove('light')
        buttonMode.innerHTML = "Light"
    }
})