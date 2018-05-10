app.service('PetService', ['$http', function($http) {
    console.log('PetService has been loaded');
    const self = this;

    self.pets = { list: [] };

    self.getAllPets = function() {
        $http({
            method: 'GET',
            url:'/pet'
        }).then((response) => {
            console.log('response', response);
            self.pets.list = response.data;
        })
        .catch((error) => {
            console.log('error making rent get request', error);
            // alert('Something went wrong! Check the server.');
        });
    }
    self.getAllPets();

    
    
}]);