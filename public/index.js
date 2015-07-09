var PROJECTS = {
    fold: {
      name: "FOLD",
      file_name: "fold",
      blurb: "loodeedoo"
    },
    hkn: {
      name: "MIT HKN",
      file_name: "hkn",
      blurb: "loodeedoo"
    },
    metalwork: {
      name: "METALWORK",
      file_name: "metalwork",
      blurb: "loodeedoo"
    },
    nomad: {
      name: "NOMAD",
      file_name: "nomad" ,
      blurb: "loodeedoo"
    },
    buyforbaby: {
      name: "BUYFORBABY",
      file_name: "buyforbaby",
      blurb: "loodeedoo"
    },
    anisotropic: {
      name: "ANISOTROPIC",
      file_name: "anisotropic",
      blurb: "loodeedoo"
    }
}

/****************/
/* Angular App  */
/****************/

var nApp = angular.module("nathaliesApp",['ngRoute']);

nApp.controller("HomeController", HomeController);
nApp.controller("ProjectsController", ProjectsController);
nApp.controller("ProjController", ProjController);

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
  $scope.projects = [[PROJECTS.fold, PROJECTS.hkn, PROJECTS.metalwork],
    [PROJECTS.nomad, PROJECTS.buyforbaby, PROJECTS.anisotropic]]
}

function ProjController($scope, $routeParams) {
  var project = $routeParams.name;
  $scope.title = PROJECTS[project]["name"];
}
