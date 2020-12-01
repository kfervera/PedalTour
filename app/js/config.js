angular.
    module('pedalApp').
    config(['$locationProvider','$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.html5Mode({enabled:true})
            $routeProvider
                .when('/', {
                    template: '<inicio></inicio>'
                })
                .when('/conoce', {
                    template: '<conoce></conoce>'
                })
                .when('/contacto', {
                    template: '<contacto></contacto>'
                })
                .when('/galeria', {
                    template: '<galeria></galeria>'
                })
                .when('/nosotros', {
                    template: '<nosotros></nosotros>'
                })
                .when('/reservas', {
                    template: '<reservas></reservas>'
                })
                .when('/ayuda', {
                    template: '<ayuda></ayuda>'
                })
                .when('/error',{
                    template: '<error></error>'
                })
                .otherwise('/error');
        }
    ]);