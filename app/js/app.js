$(function () {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAC3MKu5aI1fK3KrST9bKlQDX2jcr6McFc",
        authDomain: "pedaltour-e6851.firebaseapp.com",
        projectId: "pedaltour-e6851",
        storageBucket: "pedaltour-e6851.appspot.com",
        messagingSenderId: "734969047795",
        appId: "1:734969047795:web:9272f241b5ba925958e586"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // aplicacion
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
        $("#navbarTogglerDemo02").removeClass("show");
    });

    $('body').find("#btn-en").on("click", function () {
        $(".lang-en").show();
        $(".lang-es").hide();
        $('.menu-item').each(function () {
            this.href = this.href + "#en";
        });
        $("#navbarTogglerDemo02").removeClass("show");
    });

    $('body').find("#btn-es").on("click", function () {
        $(".lang-es").show();
        $(".lang-en").hide();
        $('.menu-item').each(function () {
            this.href = this.href.replace("#en", "");
        });
        $("#navbarTogglerDemo02").removeClass("show");
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