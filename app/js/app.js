$(function () {
    $(".loader").hide();
    window.addEventListener('scroll', function () {
        // let header = document.querySelector('header');
        // header.classList.toggle('sticky', window.scrollY > 0);
        if(window.scrollY > 0){
            $('header').addClass('sticky');
            $(".logo").attr("src","src/icons/logo-04.png");
            
        }else{
            $('header').removeClass('sticky');
            $(".logo").attr("src","src/icons/logo-03.png");
        }
    });
});