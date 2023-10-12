const audio = document.getElementById("my_audio");

let isPlaying = false;

(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){    
    if(isPlaying){
        audio.pause();
        isPlaying = false;
    } else {
        audio.play()
        isPlaying = true
    }

    
    
});

document.addEventListener("visibilitychange", function() {
    if(document.hidden){
        if(isPlaying){
            audio.pause()
        }
    } else {
        if(isPlaying){
            audio.play()
        }
    }
})

// Set the date we're counting down to
const countDownDate = new Date("Nov 17, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Dias</div>" + "<div class='hours block'>" + hours + "<br>Horas</div>" + "<div class='minutes block'>" + minutes + "<br>Minutos</div>" + "<div class='seconds block'>" + seconds + "<br>Segundos</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Felicidades ao casal!";
    }
}, 1000);


