function endLoad() {
  document.getElementById('loading').style.opacity=0;
  document.getElementById('loading').style.zIndex=-1;
}

// function playVid() {
//   var vid = document.getElementById('promo');
//   document.getElementById('play-btn').style.opacity=0;
//   vid.play();
//   function resetVideo() {
//     // resets the video element by resetting the source
//     this.src = this.src
//     document.getElementById('play-btn').style.opacity=1;
// }

//   vid.addEventListener("ended", resetVideo, false);
// }

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
