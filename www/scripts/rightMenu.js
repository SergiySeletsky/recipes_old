(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("rightMenu", {
        templateUrl: "partials/right-menu.html",
        controller: function ($scope, $mdSidenav, $mdDialog) {

            $scope.close = function () {
                $mdSidenav("right").close();
            };

            $scope.toppings = [
                  { name: "Pepperoni", wanted: true },
                  { name: "Sausage", wanted: false }
            ];

            $scope.settings = [
              { name: "Wi-Fi", extraScreen: "Wi-fi menu", icon: "wifi", enabled: true },
              { name: "Bluetooth", extraScreen: "Bluetooth menu", icon: "bluetooth", enabled: false }
            ];

            $scope.navigateTo = function (to, event) {
                $mdDialog.show(
                  $mdDialog.alert()
                    .title("Navigating")
                    .content("Imagine being taken to " + to)
                    .ariaLabel("Navigation demo")
                    .ok("Neat!")
                    .targetEvent(event)
                );
            };

        }
    });

})();
