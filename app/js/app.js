$(function () {
    $(".loader").hide();
    window.addEventListener('scroll', function () {
        if(window.scrollY > 0){
            $('header').addClass('sticky');
            $(".logo").attr("src","src/icons/logo-04.png");
            
        }else{
            $('header').removeClass('sticky');
            $(".logo").attr("src","src/icons/logo-03.png");
        }
    });
    // $(document).on('contextmenu', function(event){
    //     event.preventDefault();
    // })
});