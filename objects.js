var playlist = new Object({keys: "0"});

function updatePlaylist(playlist, aristsName, songTitle){
  playlist[artistsName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, aristsName){
  delete playlist[aristsName]
  return playlist

}
