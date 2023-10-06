import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.setQuality('240p');

player.on('timeupdate', throttle(function (data) {
    player.getCurrentTime().then(function (seconds) {
        console.log(seconds);
        localStorage.setItem("videoplayer-current-time", seconds);
    })
}, 2000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
    seconds = localStorage.getItem('videoplayer-current-time')
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
