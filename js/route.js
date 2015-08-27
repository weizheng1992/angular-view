/// <reference path="angular1.3/angular.js" />
/// <reference path="angular1.3/angular-route.js" />




var app = angular.module('myApp');
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'RootCtrl',
            templateUrl: 'views/home.html'
        })
        .when('/login', {
            controller: 'CatsCtrl',
            templateUrl: 'views/login.html'
        })
        .when('/test/:name', {
            controller: 'TestCtrl',
            templateUrl: 'views/test.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);  //index.html  header 添加 base
}]);