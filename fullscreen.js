// Script om je browservenster door een klik op d ebody fullscreen te maken
// Je kunt dit vanzelfsprekend vervangen door een klik op een ander element.

const openFullscreen = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

document.body.addEventListener('click', () => {
   openFullscreen(document.body);
});
