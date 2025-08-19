import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    // Al completar el bootstrap de Angular, ocultamos el loader
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.display = 'none'; // Escondemos el loader
    }
  })
  .catch((err) => console.error(err));
