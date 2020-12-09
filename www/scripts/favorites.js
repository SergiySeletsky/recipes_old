(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("favorites", {
        templateUrl: "partials/favorites.html",
        controller: function ($scope, $rootScope, $http, $timeout, styleService) {

            $rootScope.$emit('title-changed', 'Favorites');

            this.$onInit = function () {

                $scope.loading = true;

                $http.get('data.json').then(function (response) {

                    angular.forEach(response.data, function (value, key) {

                        value.name = "Favorite " + key;
                        value.style = styleService.getBackground();
                        $scope.recipes = response.data;

                    });

                    $timeout(function () { $scope.loading = false; }, 100);

                });
            };

        }
    });

})();