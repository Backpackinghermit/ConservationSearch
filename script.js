document.addEventListener('DOMContentLoaded', (event) => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
  
    let deferredPrompt; // Declare deferredPrompt variable
  
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      showInstallButton(); // Call showInstallButton when the event is fired
    });
  
    // Define showInstallButton function
    function showInstallButton() {
      const installButton = document.getElementById('installButton'); // Get button by ID
      installButton.style.display = 'block'; // Show the button
      installButton.addEventListener('click', onInstallButtonClick); // Add click event listener
    }
  
    // Define onInstallButtonClick function
    async function onInstallButtonClick() {
      if (deferredPrompt) {
        deferredPrompt.prompt(); // Show the install prompt
        const { outcome } = await deferredPrompt.userChoice; // Wait for user response
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null; // Reset deferredPrompt after use
      }
    }
  });
  