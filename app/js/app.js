$(function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            $('nav').addClass('sticky');
            $(".logo").attr("src", "src/icons/logonb-04.png");
        } else {
            $('nav').removeClass('sticky');
            $(".logo").attr("src", "src/icons/logonb-03.png");
        }
    });
    
    $("body").find(".menu-item").on("click", function () {
        $("#navbarTogglerDemo01").removeClass("show");
    });

    $('body').find("#btn-en").on("click", function () {
        $(".lang-en").show();
        $(".lang-es").hide();
        $('.menu-item').each(function () {
            this.href = this.href + "#en";
        });
        location.href = location.href + "#en";
        $("#navbarTogglerDemo01").removeClass("show");
    });

    $('body').find("#btn-es").on("click", function () {
        $(".lang-es").show();
        $(".lang-en").hide();
        $('.menu-item').each(function () {
            this.href = this.href.replace("#en", "");
        });
        location.href = location.href.replace("#en", "");
    });

    $(".t-close").hide();
    $(".t-open").on("click", function () {
        $(".t-open").hide();
        $(".t-close").show();
        $(".menu").addClass("active");
    });
    $(".t-close").on("click", function () {
        $(".t-open").show();
        $(".t-close").hide();
        $(".menu").removeClass("active");
    });
    $(".menu-item").on("click", function () {
        $(".t-open").show();
        $(".t-close").hide();
        $(".menu").removeClass("active");
    });
});