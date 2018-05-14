app.controller('OwnerController', ['OwnerService', 'PetService', function (OwnerService,PetService) {
    console.log('OwnerController has been loaded');
    const self = this;
    
    self.owners = OwnerService.owners

    self.newOwner = {
        name: ''
    }
   
    self.addOwner = function (owner) {
        OwnerService.addOwner(owner);
        self.newOwner = { name: '' };
    };

    self.deleteOwner = function (owner) {
        OwnerService.deleteOwner(owner);
    }

}]);