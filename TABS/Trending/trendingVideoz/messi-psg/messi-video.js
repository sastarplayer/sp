var myvid = document.getElementById('myvideo');
var myvids = [ 
"/sp/TABS/Trending/videoz/videopsg.mp4",
"/sp/TABS/Trending/trendingImgs/messipsg.jpg",
"/sp/TABS/Trending/videoz/city-takes-the-league.mp4",
  ];
var activeVideo = 0;
/TABS/Entertainment/videos/mamelodi-sundowns.mp4
myvid.addEventListener('ended', function(e) {
  // update the active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});