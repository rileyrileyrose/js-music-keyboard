$(document).ready( function() {

  // playing the note on mouse click

  $('.note.c').click(function(){
    $('#cAudio').get(0).play();
  });
  $('.note.d').click(function(){
    $('#dAudio').get(0).play();
  });
  $('.note.e').click(function(){
    $('#eAudio').get(0).play();
  });
  $('.note.f').click(function(){
    $('#fAudio').get(0).play();
  });
  $('.note.g').click(function(){
    $('#gAudio').get(0).play();
  });
  $('.note.a').click(function(){
    $('#aAudio').get(0).play();
  });
  $('.note.b').click(function(){
    $('#bAudio').get(0).play();
  });

  // playing the note on keyboard touch

  $(document).keydown(function(e){
    switch (e.which)  {
      // user presses c
      case 67:
        $('#cAudio').get(0).play();
          break;
      // user presses d
      case 68:
        $('#dAudio').get(0).play();
          break;
      // user presses e
      case 69:
        $('#eAudio').get(0).play();
          break;
      // user presses f
      case 70:
        $('#fAudio').get(0).play();
          break;
      // user presses g
      case 71:
        $('#gAudio').get(0).play();
          break;
      // user presses a
      case 65:
        $('#aAudio').get(0).play();
          break;
      // user presses b
      case 66:
        $('#bAudio').get(0).play();
          break;
    }
  });

});
