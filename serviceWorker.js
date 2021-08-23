const version = "0.1"
self.addEventListener("install",  ()=> {
    console.log("Install service worker version" + version)
    return self.skipWaiting()
})

self.addEventListener("activate", ()=> {
    console.log("activate service worker version " + version)
})

self.addEventListener('fetch',() =>{
    //ecoute des requets
})