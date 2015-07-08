var nApp = angular.module("nathaliesApp",['ngRoute']);

nApp.controller("HomeController", HomeController);
nApp.controller("ProjectsController", ProjectsController);
nApp.controller("ProjectController", ProjController);

nApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "partials/projects",
        controller: 'ProjectsController'
      })
      .when('/about', {
        templateUrl: "partials/about",
        controller: 'HomeController'
      })
      .when('/projects/:name', {
        templateUrl: 'partials/project',
        controller: 'ProjController'
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
  }
}

function ProjectsController($scope) {
  $scope.project = "FOLD";
}

function ProjController($scope) {
  return
}
