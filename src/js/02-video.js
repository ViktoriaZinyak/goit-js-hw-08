import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setLocalTime, 1000));

function setLocalTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
