var angular = require("angular");
require("angular-route");

angular
    .module('app')
    .config(config);

function config($routeProvider, $provide) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/navigation/home/home.controller.html',
            controller: 'home',
            controllerAs: 'vm'
        })
        .when('/about', {
            templateUrl: 'app/navigation/about/about.controller.html',
            controller: 'about',
            controllerAs: 'vm'
        }).otherwise({
            redirect: '/home'
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