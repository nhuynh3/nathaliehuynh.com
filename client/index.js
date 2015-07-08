var nApp = angular.module("nathaliesApp",['ngRoute']);

nApp.controller("HomeController", HomeController);

nApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "projects.html",
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: "about.html",
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

function HomeController($scope, $rootScope, $location) {
  $scope.isNotActive = function(viewLocation) {
    if ($location.path() == viewLocation) {
      return false
    } else {
      return true
    }
  }}
