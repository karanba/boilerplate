var angular = require("angular");

angular
    .module('app')
    .service('exampleService', ExampleService);

ExampleService.$inject = ['$http', '$log', '$q'];

function ExampleService($http, $log, $q) {
    this.getData = function getData() {
        return $http.get('app/data/products.json')
            .then(getDataCompleted)
            .catch(getDataFailed);

        function getDataCompleted(data, status, headers, config) {
            return data.data;
        }

        function getDataFailed(e) {
            var newMessage = 'XHR Failed for getData'
            if (e.data && e.data.description) {
                newMessage = newMessage + '\n' + e.data.description;
            }
            e.data.description = newMessage;
            $log.error(newMessage);
            return $q.reject(e);
        }
    }
}