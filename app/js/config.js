angular.
    module('pedalApp').
    config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]).
    config(['$routeProvider', '$locationProvider',
        function config($routeProvider, $locationProvider) {
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
                .when('/admin', {
                    template: '<admin></admin>'
                })
                .when('/error', {
                    template: '<error></error>'
                })
                .otherwise('/error');
            //     $locationProvider.html5Mode({
            //         enabled: true,
            //         requireBase: false
            //       });
            // $locationProvider.hashPrefix('');
        }
    ]);