// import throttle from 'lodash.throttle';

// import Player from '@vimeo/player';
const player = require('@vimeo/player');
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);



player.on('timeupdate', function(data) {
    const currentTime = localStorage.setItem("videoplayer-current-time", data.second);
});


console.log(player.on('timeupdate', function(data) {
    const currentTime = localStorage.setItem("videoplayer-current-time", data.second);
}));

