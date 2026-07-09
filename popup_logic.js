// This file lives on your GitHub. 
// When you update this, everyone's website updates instantly!

let hasClicked = false;

document.body.addEventListener('click', function() {
  if (!hasClicked) {
    window.open("https://s.shopee.ph/4Vb4CA46MO", "_blank");
    hasClicked = true;
  }
});
