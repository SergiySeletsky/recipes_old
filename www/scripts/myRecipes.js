(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("myRecipes", {
        templateUrl: "partials/my-recipes.html",
        controller: function ($rootScope, $scope, $http, $timeout, styleService) {
            
            $rootScope.$emit('title-changed', 'My Recipes');

            this.$onInit = function () {

                $scope.loading = true;

                $http.get('data.json').then(function (response) {

                    angular.forEach(response.data, function (value, key) {

                        value.name = "My " + key;
                        value.style = styleService.getBackground();
                        $scope.recipes = response.data;

                    });

                    $timeout(function () { $scope.loading = false; }, 100);

                });

            };

        }
    });

})();
