angular.
    module('pedalApp').
    config(['$routeProvider',
        function config($routeProvider) {
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
                .otherwise('/');
        }
    ]);