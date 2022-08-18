import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
let storageCurrentTime = 0;

setStorageTimeOnPlayer();
player.on('timeupdate', throttle(setLocalTime, 1000));

function setLocalTime(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

function setStorageTimeOnPlayer() {
  const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
  if (currentTime) {
    storageCurrentTime = currentTime;
  }
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
