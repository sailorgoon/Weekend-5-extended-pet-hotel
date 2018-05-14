const app = angular.module('PetApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController as vm'
        })
        .when('/pet', {
            templateUrl: 'views/pet.html',
            controller: 'PetController as vm',

        })
        .when('/owner', {
            templateUrl: 'views/owner.html',
            controller: 'OwnerController as vm',

        })
        .otherwise({ template: '<h1>404</h1>' });
}]);
