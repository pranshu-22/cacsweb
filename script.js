var btn = $('#button-btt');
var btn2 = $('#button-btt-dasa');
var btn3 = $('#button-btt-ccmt');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn2.addClass('show');
  } else {
    btn2.removeClass('show');
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn3.addClass('show');
  } else {
    btn3.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});
btn2.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});
btn3.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});
$(document).ready(function() {
  $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
  });
});



myID = document.getElementById("myfix");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 400) {
        myID.className = "shows"
    } else {
        myID.className = "hides"
    }
};

window.addEventListener("scroll", myScrollFunc);




// var w = document.getElementById('wrapper');
// var button = document.getElementById('randomize');
// var quotes = w.children; 
// var hideDivs = function(divs) {
//   for (var div of divs) {
//     div.style.display = 'none';

//   }
// }

// hideDivs(quotes); 
// button.addEventListener('click', function(event) {
//   var rnd = Math.floor(Math.random() * quotes.length);
//   hideDivs(quotes); 
//   quotes[rnd].style.display = 'block';
// })
// $( document ).ready(function() {
  
//   var rnd = Math.floor(Math.random() * quotes.length);
//   hideDivs(quotes); 
//   quotes[rnd].style.display = 'block';
// });


// $(window).scroll(function() {
//   if ($(document).scrollTop() > 300  && $("#myfactmodal").attr("displayed") === "false") {
//     $('#myfactmodal').modal('show');
//     $("#myfactmodal").attr("displayed", "true");
//   }
//   if ($(document).scrollTop() < 0  && $("#myfactmodal").attr("displayed") === "true") {
//     $('#myfactmodal').modal('hide');
//     $("#myfactmodal").attr("displayed", "false");
//   }
  
  
// });
$(function () {
  $('[data-bs-toggle="popover"]').popover()
})
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})