(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("recipeApp", {
        templateUrl: "partials/recipe-app.html",
        controller: function ($scope, $mdSidenav, $rootScope) {

            $scope.openRight = function () {
                if ($mdSidenav('left').isOpen()) {
                    $mdSidenav('left').close();
                }
                else {
                    $mdSidenav('right').open();
                }
            };

            $scope.openLeft = function () {
                if ($mdSidenav('right').isOpen()) {
                    $mdSidenav('right').close();
                }
                else {
                    $mdSidenav('left').open();
                }
            };

            $rootScope.$on("title-changed", function (evt, arg) {
                $scope.title = arg;
            });

        }
    });

})();