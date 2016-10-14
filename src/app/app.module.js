var angular = require("angular");
var angularRoute = require("angular-route");

angular
    .module('app', [
        'ngRoute'
    ])
    .config(config)
    .factory('logger', logger)
    .controller('about', AboutController)
    .controller('main', MainController);
    
function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/about.html',
            controller: 'about',
            controllerAs: 'vm'
        });
}


logger.$inject = ['$log'];

function logger($log){
    var service = {
       showToasts: true,
       error: error,
       log: $log.log
    };
    
    return service;
    //////////////////////
    
    function error(message, data , title){
        $log.error(message, data, title);
    }
    
}

function AboutController($scope, $log) {
    /* jshint validthis: true */
    var vm = this;
    
    vm.message = "Thanks";
}

function MainController($scope, $log) {
    /* jshint validthis: true */
    var vm = this;

    vm.gotoSession = gotoSession;
    vm.refresh = refresh;
    vm.search = search;
    vm.sessions = [];
    vm.title = 'Sessions';

    ////////////

    function gotoSession() {
      /* */
    }

    function refresh() {
      /* */
    }

    function search() {
      /* */
    }
}