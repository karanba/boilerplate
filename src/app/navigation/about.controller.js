var angular = require("angular");

angular
    .module('app')
    .controller('about', AboutController);
    
    
AboutController.$inject = ['$scope', '$log'];
function AboutController($scope, $log) {
    /* jshint validthis: true */
    var vm = this;
    
    vm.message = "Thanks";
}