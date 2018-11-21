// Register Service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log("Service worker: Registered!");
  }).catch(() => {
    console.log("Service worker: Failed!");
  });
}