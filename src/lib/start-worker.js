import { push } from './../push';

export function startWorker(worker) {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register(worker)
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);

      push.manager = swReg.pushManager;
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
  } else {
    console.warn('Push messaging is not supported');
  }
}