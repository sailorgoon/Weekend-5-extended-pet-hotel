app.controller('PetController', ['$http', function ($http) {
    console.log('PetController has been loaded');
    const self = this;

    self.message = 'PetsPetsPets'

    self.getAllPets = function() {
        $http({
            method: 'GET',
            url:'/pet'
        }).then((response) => {
            console.log('response', response);
            self.pets = response.data;
        })
        .catch((error) => {
            console.log('error making rent get request', error);
            // alert('Something went wrong! Check the server.');
        });
    }
    self.getAllPets();
    // self.ships = SpaceShipService.ships;
    // self.assignments = SpaceShipService.assignments;

    // self.crewToAdd = {name:'', role:'', ship_id:''};

    // self.addCrewMember = function (crewMember) {
    //     SpaceShipService.addCrewMember(crewMember);
    //     self.crewToAdd = { name: '', role: '', ship_id: '' };
    // };

    // self.removeCrewMember = function (crewMemberId) {
    //     SpaceShipService.removeCrewMember(crewMemberId);
    // }
}]);