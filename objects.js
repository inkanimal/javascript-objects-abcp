var playlist = new Object({Prince: "kiss"});

function updatePlaylist(playlist, aristsName, songTitle){
  playlist[aristsName] = songTitle
}
function removeFromPlaylist(playlist, aristName){
  delete playlist[aristName]

}
