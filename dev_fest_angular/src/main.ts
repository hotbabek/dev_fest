import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  if ('serviceWorker' in navigator) {
    // enregistrement d'un service worker
    navigator.serviceWorker.register('./sw.js')
    .then(function(registration) {
      if(registration.installing) {
        console.log('Service worker installing');
      } else if(registration.waiting) {
        console.log('Service worker installed');
      } else if(registration.active) {
        console.log('Service worker active');
      }
    console.log('Enregistrement Ok, le scope est :', registration.scope);
    })
    .catch(function(error) {
    console.log('Enregistrement Ko, erreur:', error);
    });
    }else{

    }

