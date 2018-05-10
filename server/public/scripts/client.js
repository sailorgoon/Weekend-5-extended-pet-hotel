var app = angular.module('PetApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
            redirectTo: '/pet'
        })
        .when('/pet', {
            templateUrl: 'views/pet.html',
            controller: 'PetController as vm',

        })
        .otherwise({ template: '<h1>404</h1>' });
}]);
