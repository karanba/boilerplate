var angular = require("angular");

angular.module('shared.widgets')
    .directive('bpRange', range);

function range() {
    /* Implementation */
     var directive = {
        link: link,
        templateUrl: 'app/range.html',
        restrict: 'EA'
    };
    return directive;
    
    
    function link(scope, element, attrs) {
      /* */
    }
}
