videos = document.querySelectorAll("video");
for (var i = 0, l = videos.length; i < l; i++) {
    var video = videos[i];
    var src = video.src || (function () {
        var sources = video.querySelectorAll("source");
        for (var j = 0, sl = sources.length; j < sl; j++) {
            var source = sources[j];
            var type = source.type;
            var isMp4 = type.indexOf("mp4") != -1;
            if (isMp4) return source.src;
        }
        return null;
    })();
    if (src) {
        var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
        if (isYoutube) {
            var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
            id = (id.length > 1) ? id.splice(1) : id;
            id = id.toString();
            var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
            video.src = mp4url + id;
        }
    }
}

function endLoad() {
  document.getElementById('loading').style.opacity=0;
  document.getElementById('loading').style.zIndex=-1;
}

function playVid() {
  var vid = document.getElementById('promo');
  document.getElementById('play-btn').style.opacity=0;
  vid.play();
  function resetVideo() {
    // resets the video element by resetting the source
    this.src = this.src
    document.getElementById('play-btn').style.opacity=1;
}

  vid.addEventListener("ended", resetVideo, false);
}

function down(event) {

  event.preventDefault();

  console.log('work');

  var scrollLink = document.getElementById("d-link").getAttribute("href");


$('body').animate({
  scrollTop: $(scrollLink).offset().top
}, 1000);

}

window.onload = function() {
  endLoad();

    Typed.new(".tagline", {
      strings: ["An online therapist chatbot.", "Share your feelings with me anytime you want.","I'm good at keeping secrets so you can tell me everything!"],
      typeSpeed: 4,
      backSpeed: 10,
      loop: true,
      backDelay: 1500
    });
}

function creator() {
  window.open("http://sayamkanwar.com/","_self");
}




// function initChat() {
//   var mainwin = document.getElementById('main-window');
//   var chatwin = document.getElementById('chat-window');
//   var initpos = 0;
//   mainwin.style.opacity = 0;
//   setTimeout(function(){
//     chatwin.style.top = initpos + '%';
//   },500);
//
// }
