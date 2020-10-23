if ('serviceWorker' in navigator) {
    console.log("1")
    // enregistrement d'un service worker
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
    console.log('Enregistrement Ok, le scope est :', registration.scope);
    })
    .catch(function(error) {
    console.log('Enregistrement Ko, erreur:', error);
    });
    }else{
        console.log("2")

    }


// (function () {
//     'use strict';
//     if (!('serviceWorker' in navigator)) {
//     console.log('Service worker non supporté');
//     return;
//     }
//     navigator.serviceWorker.register('sw.js')
//     .then(() => {
//     console.log('Enregistrement OK');
//     })
//     .catch(error => {
//     console.log('Enregistrement KO :', error);
//     });
//   })();
  