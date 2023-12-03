
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

btnInstall.addEventListener('click', (e) => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null;
  });
});

window.addEventListener('appinstalled', (evt) => {
  // Handle post-installation event
});


document.getElementById('searchForm').onsubmit = function() {
  var searchValue = document.getElementById('searchInput').value;
  if (!searchValue) {
      return false;
  }
  document.getElementById('searchInput').value = '';
};

function submitSearchForm() {
  document.getElementById('searchForm').submit();
};

