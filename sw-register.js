if('serviceWorker'in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('serviceWorker.js')
        .then(function(reg){
            console.log('notify', 'service workin is started' + reg)
        })
        .catch(error => console.log('error', 'service worker register :' + error))
    })
}