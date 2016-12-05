'use strict';

module.exports = ['$scope', '$log', 'exampleService',
    function($scope, $log, exampleService) {
        /* jshint validthis: true */
        var vm = this;
        vm.currentNavItem = 'page1';
        activate();
        $log.warn("warn");

        function activate() {
            return exampleService.getData().then(function(data) {
                vm.data = data;
            });
        }
    }
];