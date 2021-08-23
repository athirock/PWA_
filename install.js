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
})