import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
// lodash
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('play', function () {
    player.getDuration().then(function (duration) {
        console.log('Video duration:', duration);
    });


});

player.getVideoTitle().then(function (title) {
    console.log('Title:', title);
});

player.setQuality('240p');
// player.speed('1.5x');
player.on('timeupdate', throttle(function (data) {
    player.getCurrentTime().then(function (seconds) {
        console.log(seconds);
        localStorage.setItem("videoplayer-current-time", seconds);
    })
}, 2000));
const videoplayerCurrentTime = 'mamba';
