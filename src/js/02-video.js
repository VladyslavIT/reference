import Player from "@vimeo/player";

import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const currentTime = "videoplayer-current-time";

const saveTime = (data) => {
  return localStorage.setItem(currentTime, data.seconds);
};

player.on("timeupdate", throttle(saveTime, 1000));

const unpauseVideo = () => {
  return player.setCurrentTime(localStorage.getItem(currentTime));
};

unpauseVideo();
