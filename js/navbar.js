$(window).scroll(function(){	
    "use strict";	
    var scroll = $(window).scrollTop();
    if( scroll > 60 ){		
        $(".nav-wrapper").addClass("nav-transition");				
    } else {
        $(".nav-wrapper").removeClass("nav-transition");
    }
});	