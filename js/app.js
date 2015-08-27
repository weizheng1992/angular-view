/// <reference path="angular1.3/angular.js" />
/// <reference path="angular1.3/angular-route.js" />





var app = angular.module('myApp', ['ngRoute']);

app.controller('RootCtrl', ['$scope', function ($scope) {
    $scope.title = "Home Page";
}]);

app.controller('CatsCtrl', ['$scope', function ($scope) {
    $scope.title = "login Page";
}]);
app.controller('TestCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    console.log($routeParams.name);
    $scope.title = $routeParams.name;
}]);

app.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.onViewLoad = function () {
        console.log('view changed');
    };
}]);