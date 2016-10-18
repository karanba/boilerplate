var angular = require("angular");

angular
    .module('app')
    .controller('home', HomeController);

HomeController.$inject = ['$scope', '$log', 'exampleService'];

function HomeController($scope, $log, exampleService) {
    /* jshint validthis: true */
    var vm = this;
    vm.currentNavItem = 'page1';
    activate();

    function activate() {
        return exampleService.getData().then(function(data) {
            vm.data = data;
        });
    }
}