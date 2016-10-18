var angular = require("angular");

angular.module('shared.widgets')
    .directive('bpExample', example);

function example() {
    /* Implementation */
    var directive = {
        templateUrl: 'app/example.directive.html',
        restrict: 'EA',
        scope: {
            max: '='
        },
        link: linkFunc,
        controllerAs: 'vm',
        controller: ExampleController,
        bindToController: true // because the scope is isolated
    };
    return directive;


    function linkFunc(scope, el, attr, vm) {
        console.log('LINK: scope.min = %s *** should be undefined', scope.min);
        console.log('LINK: scope.max = %s *** should be undefined', scope.max);
        console.log('LINK: vm.min = %s', vm.min);
        console.log('LINK: vm.max = %s', vm.max);
    }
}

ExampleController.$inject = ['$scope'];

function ExampleController($scope) {
    var vm = this;
    vm.min = 3;
    console.log('CTRL: $scope.vm.min = %s', $scope.vm.min);
    console.log('CTRL: $scope.vm.max = %s', $scope.vm.max);
    console.log('CTRL: vm.min = %s', vm.min);
    console.log('CTRL: vm.max = %s', vm.max);
}