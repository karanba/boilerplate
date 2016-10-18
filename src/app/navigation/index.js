'use strict';
 var angular = require("angular");
 
angular.module('app')
    .controller('home', require('./home/home.controller'))
    .controller('about', require('./about/about.controller'));