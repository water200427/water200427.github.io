let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/moon-cake.jpg') {
    myImage.setAttribute ('src','images/pexels-lelani-badenhorst-6789847.jpg');
  } else {
    myImage.setAttribute ('src','images/moon-cake.jpg');
  }
}