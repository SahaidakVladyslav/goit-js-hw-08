import Player from '@vimeo/player';
const iframeEl = document.querySelector('#vimeo-player')
const iframe = document.querySelector('iframe');
let timeOfValue = iframe.value;
console.log(timeOfValue)
const player = new Vimeo.Player(iframeEl);

player.on('play', function () {
    duration: 61.857
    percent: 0
    seconds: 0
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});
player.setQuality('240p')
player.currentTime();