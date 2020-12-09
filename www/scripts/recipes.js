(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("recipes", {
        templateUrl: "partials/recipes.html",
        controller: function ($scope, $rootScope, $http, $timeout, recipesService, styleService) {

            $rootScope.$emit('title-changed', 'Recipes');

            this.$onInit = function () {

                $scope.loading = true;

                recipesService.getRecipes().then(function (response) {

                    angular.forEach(response.data, function (value, key) {
                        value.style = styleService.getBackground();
                        $scope.recipes = response.data;
                    });

                    $timeout(function() { $scope.loading = false; }, 100);

                });
            };
            
        }
    });

})();