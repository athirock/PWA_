const installBtn = document.querySelector('.install')
let dererredPrompt 

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    dererredPrompt = e
    installBtn.classList.remove('hidden')
})

installBtn.addEventListener('click', (e) => {
    e.preventDefault()
    installBtn.classList.add('hidden')
    dererredPrompt.prompt()
    dererredPrompt.userChoice.then((choiceResult) =>{
        if (choiceResult.outcome==='acceptee'){
            console.log("instalcion acceptee")
        }
        else if (choiceResult.outcome==='')
    })
})