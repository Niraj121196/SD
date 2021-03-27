$(window).scroll(function(){	
    // "use strict";	
    // var scroll = $(window).scrollTop();
    // if( scroll > 60 ){		
    //     $(".nav-wrapper").addClass("nav-transition");				
    // } else {
    //     $(".nav-wrapper").removeClass("nav-transition");
    // }
});	




$(document).ready(function () {
         $(document).on("scroll", onScroll);
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbarSupportedContent a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbarSupportedContent ul li a').removeClass("active"); //added to remove active class from all a elements
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    "use strict";	
    var scroll = $(window).scrollTop();
    if( scroll > 60 ){		
        $(".nav-wrapper").addClass("nav-transition");				
    } else {
        $(".nav-wrapper").removeClass("nav-transition");
    }
}



// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('li a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     "use strict";	
//     var scroll = $(window).scrollTop();
//     if( scroll > 60 ){		
//         $(".nav-wrapper").addClass("nav-transition");				
//     } else {
//         $(".nav-wrapper").removeClass("nav-transition");
//     }
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu-center ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
        
//             currLink.removeClass("active");
//         }
//     });
// }