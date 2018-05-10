const app = angular.module('PetApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        // .when('/', {
        //     redirectTo: '/pet'
        // })
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
