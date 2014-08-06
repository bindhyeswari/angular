// controllers for the partial views
var countyControllers = angular.module('countyControllers', []);

countyControllers.controller('CountyListCtrl', ['$scope', '$http', function($scope, $http){
    $scope.counties = data;
}]);
countyControllers.controller('CountyDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams, w){

    $scope.county = data[$routeParams.id];
}]);