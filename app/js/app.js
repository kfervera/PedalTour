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
    $(".t-close").hide();
    $(".t-open").on("click", function(){
        $(".t-open").hide();
        $(".t-close").show();
        $(".menu").addClass("active");
    });
    $(".t-close").on("click", function(){
        $(".t-open").show();
        $(".t-close").hide();
        $(".menu").removeClass("active");
    });
    $(".menu-item").on("click", function(){
        $(".t-open").show();
        $(".t-close").hide();
        $(".menu").removeClass("active");
    });
});