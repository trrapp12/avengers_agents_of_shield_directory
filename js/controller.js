var agentControllers = angular.module('agentControllers', []);

agentControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
   $http.get('js/data.json').success(function(data) {
       $scope.artists = data;
       $scope.artistOrder = "name";
   });
}]);

