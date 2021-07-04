var myvid = document.getElementById('myvideo');
var myvids = [ 
  "/videoz/switz.mp4",
  "/videoz/lowqvideo.mp4",
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});