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
        controller: function($scope, $http){
            $http.get('app/json/gallery-list.json').then(function (response) {
                $scope.imgs = response.data.imgs;
            });
            $('.box').hide();

            $scope.ShowDetails = function(asd){
                console.log(asd);
                $("#img_detail").attr("src",asd);
                $('.gallery').hide();
                $('.box').show();
            }

            $scope.HideDetails = function(){
                $("#img_detail").attr("src","");
                $('.gallery').show();
                $('.box').hide();
            }
        }
    })
    .component('nosotros', {
        templateUrl: 'views/Nosotros.html'
    })
    .component('reservas', {
        templateUrl: 'views/Reservas.html'
    })
    