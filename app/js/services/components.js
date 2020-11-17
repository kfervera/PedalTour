angular.module('pedalApp')
    .component('inicio', {
        templateUrl: 'views/Inicio.html'
    })
    .component('conoce', {
        templateUrl: 'views/ConoceCajamarca.html'
    })
    .component('contacto', {
        templateUrl: 'views/Contacto.html'
    })
    .component('galeria', {
        templateUrl: 'views/Galeria.html',
        controller: function ($scope, $http) {
            $http.get('app/json/gallery-list.json').then(function (response) {
                $scope.imgs = response.data.imgs;
            });
            $('.box').hide();

            $scope.ShowDetails = function (asd) {
                console.log(asd);
                $("#img_detail").attr("src", asd);
                $('.box').show();
            }

            $scope.HideDetails = function () {
                $("#img_detail").attr("src", "");
                $('.gallery').show();
                $('.box').hide();
            }
        }
    })
    .component('nosotros', {
        templateUrl: 'views/Nosotros.html'
    })
    .component('reservas', {
        templateUrl: 'views/Reservas.html',
        controller: function () {
            $(function () {
                // alert("Kev");
                $('th').css("color", "white");
            });
        }
    })
    .component('ayuda', {
        templateUrl: 'views/Ayuda.html'
    })
    .component('error', {
        templateUrl: 'views/Error.html',
        controller: function ($scope) {
            $('#pedalHeader').hide();
            $scope.BackIndex = function () {
                $('#pedalHeader').show();
            }

            function stars() {
                let count = 500;
                let scene = document.querySelector('.scene');
                let i = 0;
                while (i < count) {
                    let star = document.createElement("i");
                    let x = Math.floor(Math.random() * window.innerWidth);
                    let y = Math.floor(Math.random() * window.innerHeight);
                    let duration = Math.random() * 10;
                    let size = Math.floor((Math.random() * 5) + 1);
                    star.style.left = x + 'px';
                    star.style.top = y + 'px';
                    star.style.width = size + 'px';
                    star.style.height = size + 'px';
                    star.style.animationDuration = 5 + duration + 's';
                    star.style.animationDelay = duration + 's';
                    scene.appendChild(star);
                    i++;
                }
            }
            stars();
        }
    })
