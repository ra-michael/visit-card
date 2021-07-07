var btn = document.querySelector(".btn_rotate");
var playing = false;

btn.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: ".card",
    rotateY: {value: '+=180', delay: 200},
    easing: 'linear',
    duration: 400,
    complete: function(){
       playing = false;
    }
  });
});



