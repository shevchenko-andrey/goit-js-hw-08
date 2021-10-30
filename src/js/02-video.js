import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const onSaveProgressPlayer = e => {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
};
player.on('timeupdate', throttle(onSaveProgressPlayer, 1000));
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        currentTime = 0;
        break;

      default:
        currentTime = 0;
        break;
    }
  });
}
