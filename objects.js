var playlist = new Object({keys: "0"});

function updatePlaylist(playlist, aristsName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, aristName){
  delete playlist[aristName]
  return playlist

}
