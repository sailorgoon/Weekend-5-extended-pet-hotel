app.service('OwnerService', ['$http', function($http) {
    console.log('OwnerService has been loaded');
    const self = this;

    self.owners = { list: [] };

    self.getAllOwners = function() {
        $http({
            method: 'GET',
            url:'/owner'
        }).then((response) => {
            console.log('response', response);
            self.owners.list = response.data;
        })
        .catch((error) => {
            console.log('error making rent get request', error);
            // alert('Something went wrong! Check the server.');
        });
    }
    self.getAllOwners();
    
}]);