app.controller('OwnerController', ['OwnerService', function (OwnerService) {
    console.log('OwnerController has been loaded');
    const self = this;

    self.message = 'Pwn\'d'
    
    self.owners = OwnerService.owners
   
}]);