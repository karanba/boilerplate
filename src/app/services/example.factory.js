var angular = require("angular");

angular
    .module('app')
    .factory('exampleFactory', ExampleFactory);

ExampleFactory.$inject = ['$http', '$log', '$q'];

function ExampleFactory($http, $log, $q) {
    var service = {
        getData: getData,
        validate: validate
    };
    return service;

    function getData() {
        return $http.get('/api/example')
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

    function validate() {
        /* */
    }
}