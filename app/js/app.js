$(function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            $('header').addClass('sticky');
            $(".logo").attr("src", "src/icons/logo-04.png");
        } else {
            $('header').removeClass('sticky');
            $(".logo").attr("src", "src/icons/logo-03.png");
        }
    });

    // $(".send-g-mail").on("click", function(){
    //     window.open('mailto:pedaltourcajamarca@gmail.com');
    // });
    // var SendGMail = function(){
    //     console.log("sd");
    //     
    // }
});