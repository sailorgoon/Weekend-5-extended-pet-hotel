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

    self.addPet = function (petToAdd) {
        $http({
            method: 'POST',
            url: '/pet',
            data: petToAdd
        }).then((response) => {
            alert('Success!');
            self.getAllPets();
        }).catch((error) => {
            console.log('error making owner post request', error);
            alert('Something went wrong! Check the server.');
        });
    }

    self.deletePet = function (pet) {
        let confirmStatus = confirm('Are you sure?');
        if (confirmStatus) {
            $http({
                method: 'DELETE',
                url: '/pet',
                params: pet
            })
                .then(function (response) {
                    self.getAllPets();
                    console.log('response from pet delete', response);
                })
                .catch(function (error) {
                    console.log('error on pet DELETE', error);
                });
        }
        else {
            console.log('delete cancelled');
        }
        
    }
    
    
}]);