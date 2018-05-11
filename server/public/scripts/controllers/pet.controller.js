app.controller('PetController', ['PetService', 'OwnerService', function (PetService, OwnerService) {
    console.log('PetController has been loaded');
    const self = this;

    self.message = 'PetsPetsPets';

    self.pets = PetService.pets;

    self.owners = OwnerService.owners;

    self.newPet = {
        name: '',
        breed: '',
        color: '',
        owner_id: 0
        // date: 'current_date'
    }

    self.addPet = function (pet) {
        PetService.addPet(pet);
        self.newPet = { name: '',  breed: '', color: '', owner_id: 0};
    };
}]);