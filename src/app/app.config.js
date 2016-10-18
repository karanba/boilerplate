var angular = require("angular");
var angularRoute = require("angular-route");

angular
    .module('app')
    .config(config);
    
function config($routeProvider, $provide) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/about.html',
            controller: 'about',
            controllerAs: 'vm'
        });

    $provide.decorator('$log', [
        '$delegate',
        function $logDecorator($delegate) {

            var originalWarn = $delegate.warn;
            $delegate.warn = function decoratedWarn(msg) {
                msg = 'Decorated Warn: ' + msg;
                originalWarn.apply($delegate, arguments);
            };

            return $delegate;
        }
    ]);
}