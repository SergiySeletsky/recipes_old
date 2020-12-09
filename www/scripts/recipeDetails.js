(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("recipeDetails", {
        templateUrl: "partials/recipe-details.html",
        controller: function ($scope, $stateParams, $rootScope) {

            $scope.id = $stateParams.id;

            $rootScope.$emit('title-changed', 'Recipe ' + $scope.id);
        }
    });

})();