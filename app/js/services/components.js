angular.module('pedalApp')
    .component('inicio', {
        templateUrl: 'views/Inicio.html',
        controller:function($scope){
            $scope.SendMail = function(){
                window.open('mailto:pedaltourcajamarca@gmail.com');
            }
        }
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
        controller: function ($scope) {
            $scope.model = {};
            jQuery.datetimepicker.setLocale('es');
            $('.date').datetimepicker({
                timepicker: false,
                format: 'd/m/Y',
                onChangeDateTime: function (dp, $input) {
                    $scope.model.date = $input.val();
                }
            });
            $('.time').datetimepicker({
                datepicker: false,
                allowTimes: [
                    '12:00', '13:00', '15:00'
                ],
                format: 'H:i',
                onChangeDateTime: function (dp, $input) {
                    $scope.model.time = $input.val();
                }
            });
            var setVar = function(nombre, valor){
                let result = '<strong>';
                result += nombre;
                result += ': </strong><em>';
                result += valor;
                result += '</em><br></br>';
                return result;
            };
            $scope.SendMail = function () {
                let result = '<html>'
                result += setVar('Nombres', $scope.model.name)
                result += setVar('Fecha', $scope.model.date)
                result += setVar('Hora', $scope.model.time)
                result += setVar('Correo', $scope.model.mail)
                result += setVar('Celular', $scope.model.phone)
                result += '</html>'

                Email.send({
                    SecureToken : "0f2bf924-f60e-4ca3-9f6d-81360306e449",
                    To: 'pedaltourcajamarca@gmail.com',
                    From: "info@pedaltour.com",
                    Subject: "[Pedal TOUR] Reservación",
                    Body: result
                }).then(
                    message => alert("Gracias por confiar en pedalTOUR, para una mejor experiencia nos pondremos en contacto contigo.")
                );
            }
        }
    })
    .component('ayuda', {
        templateUrl: 'views/Ayuda.html',
        controller: function($scope, $http){
            $http.get('app/json/normas.json').then(function (response) {
                $scope.normas = response.data.normas;
            });
        }
    })
    .component('error', {
        templateUrl: 'views/Error.html',
        controller: function () {
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
