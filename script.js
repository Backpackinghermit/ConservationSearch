document.addEventListener('DOMContentLoaded', (event) => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }

  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Conditionally show the install button
    if (shouldShowInstallButton()) {
      showInstallButton();
    }
  });

  function shouldShowInstallButton() {
    // Check if the deferredPrompt is available and the app is not installed
    return deferredPrompt && !navigator.standalone;
  }

  function showInstallButton() {
    const installButton = document.getElementById('install-button');
    // Check if the button element is present
    if (installButton) {
      installButton.style.display = 'block'; // Use 'block' to explicitly set the display property
      installButton.addEventListener('click', onInstallButtonClick);
    }
  }

  async function onInstallButtonClick() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
    }
  }
});
