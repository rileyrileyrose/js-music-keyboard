$(document).ready( function() {

  // function to DRY playing audio
  var playAudio = function (note_id) {
    $(note_id).get(0).play();
  };

  // playing the note on mouse click

  $('.note.c').click(function(){
    playAudio('#cAudio');
  });
  $('.note.d').click(function(){
    playAudio('#dAudio');
  });
  $('.note.e').click(function(){
    playAudio('#eAudio');
  });
  $('.note.f').click(function(){
    playAudio('#fAudio');
  });
  $('.note.g').click(function(){
    playAudio('#gAudio');
  });
  $('.note.a').click(function(){
    playAudio('#aAudio');
  });
  $('.note.b').click(function(){
    playAudio('#bAudio');
  });

  // playing the note on keyboard touch

  $(document).keydown(function(e){
    switch (e.which) {
      // user presses c
      case 67:
        playAudio('#cAudio');
          break;
      // user presses d
      case 68:
        playAudio('#dAudio');
          break;
      // user presses e
      case 69:
        playAudio('#eAudio');
          break;
      // user presses f
      case 70:
        playAudio('#fAudio');
          break;
      // user presses g
      case 71:
        playAudio('#gAudio');
          break;
      // user presses a
      case 65:
        playAudio('#aAudio');
          break;
      // user presses b
      case 66:
        playAudio('#bAudio');
          break;
    }
  });

});
