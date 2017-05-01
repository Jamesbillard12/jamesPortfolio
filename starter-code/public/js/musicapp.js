'use strict';

((module) =>{
  function Music(musicRawDataObj){
    Object.keys(musicRawDataObj).forEach(key => this[key] = musicRawDataObj [key]);
  }
  Music.musicArray = [];

  Music.prototype.musicToHtml = function() {
    var musicTemplate = Handlebars.compile($('#musicTemplate').html());
    return musicTemplate(this);
  };
  Music.prototype.musicAjax = function() {
    if (localStorage.musicRawData) {
      var music = JSON.parse(localStorage.musicRawData);
      Music.musicArray = music.map((ele)=>{return new Music(ele);})
      Music.musicArray.forEach(function(music) {
        $('#musictodom').append(music.musicToHtml());
      });
    }else {
      $(function(){
        $.ajax({
          url: '/js/musicobjects.json',
          dataType : "json",
        }).done(function(data) {
          localStorage.setItem('musicRawData', JSON.stringify(data));
          var music = JSON.parse(localStorage.musicRawData);
          Music.musicArray = music.map((ele)=>{return new Music(ele);})
          Music.musicArray.forEach(function(music) {
            $('#musictodom').append(music.musicToHtml());
          });
        })
      });
    }
  }
  module.Music = Music;
})(window);
