// This file lives on your GitHub. 
// When you update this, everyone's website updates instantly!

let hasClicked = false;

document.body.addEventListener('click', function() {
  if (!hasClicked) {
    // Open your Facebook page in a new tab
    window.open("https://facebook.com/eloraph", "_blank");
    
    // Set to true so it only happens ONCE per visit
    hasClicked = true;
  }
});
