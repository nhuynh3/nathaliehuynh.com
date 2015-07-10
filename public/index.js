var PROJECTS = {
    fold: {
      name: "FOLD",
      file_name: "fold",
      blurb: "full stack development",
      intro: "Coming soon!"
    },    
    buyforbaby: {
      name: "BUYFORBABY",
      file_name: "buyforbaby",
      blurb: "UI/UX design & front end development",
      intro: "Coming soon!"
    },
    metalwork: {
      name: "METALWORK",
      file_name: "metalwork",
      blurb: "enameling & blacksmithing",
      intro: "Coming soon!"
    },
    nomad: {
      name: "NOMAD",
      file_name: "nomad" ,
      blurb: "front end development",
      intro: "Coming soon!"
    },
    hkn: {
      name: "HKN",
      file_name: "hkn",
      blurb: "full stack development",
      intro: "Coming soon!"
    },
    anisotropic: {
      name: "ANISOTROPIC",
      file_name: "anisotropic",
      blurb: "lighting & installation design",
      intro: "Coming soon!"
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
      .when('/resume', {
        templateUrl: "partials/resume",
        controller: 'HomeController'
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
  $scope.projects = [[PROJECTS.fold, PROJECTS.buyforbaby, PROJECTS.metalwork],
    [PROJECTS.nomad, PROJECTS.hkn, PROJECTS.anisotropic]]
}

function ProjController($scope, $routeParams) {
  var projectName = $routeParams.name,
      project     = PROJECTS[projectName]

  $scope.project = {
    "title":  project["name"],
    "name":  project["file_name"],
    "intro": project["intro"]
  }
}
