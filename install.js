const installBtn = document.querySelector('.install')

window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault()
    installBtn.classList.remove('hidden')
})