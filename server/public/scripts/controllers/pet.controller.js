app.controller('PetController', ['PetService', function (PetService) {
    console.log('PetController has been loaded');
    const self = this;

    self.message = 'PetsPetsPets'

    self.pets = PetService.pets

    self.newPet = {
        owner: '',
        name: '',
        breed: '',
        color: '',
    }

    self.addPet = function (pet) {
        PetService.addPet(pet);
        self.newPet = { owner: '', name: '',  breed: '', color: ''};
    };
}]);