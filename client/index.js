angular
  .module("nathaliesApp",[])
  .controller("HomeController", HomeController);

function HomeController($scope, $rootScope) {
  $scope.isProjectView = true;

  $scope.renderAboutView = function() {
    $scope.isProjectView = false;
  }

  $scope.renderProjectView = function() {
    $scope.isProjectView = true

  }
}
