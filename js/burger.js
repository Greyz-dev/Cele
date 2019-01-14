$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
    
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $(document).click(function(event) { 
        if(!$(event.target).closest('.navbar').length) {
            
            if($('.navbar-menu').hasClass("is-active")) {
                $('.navbar-burger').removeClass('is-active');
                $('.navbar-menu').removeClass('is-active');
            }
        }        
    });
});


$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.removeClass("is-transparent");
        } else {
            header.addClass("is-transparent");
        }
    });
  
});

$(function() {
    var header = $(".navbar-item");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled-text");
        } else {
            header.removeClass("scrolled-text");
        }
    });
  
});