var angular = require("angular");
require("angular-route");
require("angular-material");

angular.module('app', ['ngRoute', 'ngMaterial']);


require('./app.config');
require('./services');
require('./components');
require('./navigation');