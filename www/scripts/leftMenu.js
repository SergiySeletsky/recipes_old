(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("leftMenu", {
        templateUrl: "partials/left-menu.html",
        controller: function ($scope, $mdSidenav, $http) {

            this.$onInit = function () {
                //just testing http, remove later
                //$http.get("http://google.com").then(function (response) {
                //    console.log(response.data);
                //});

            };

            $scope.close = function () {
                $mdSidenav("left").close();
            };

            $scope.menu = [{
                link: "recipes",
                title: "Recipes",
                icon: "language"
            }, {
                link: "myRecipes",
                title: "My Recipes",
                icon: "home"
            }, {
                link: "favorites",
                title: "Favorites",
                icon: "favorite"
            }, {
                link: "makeRecipe",
                title: "Make a Recipe",
                icon: "pan_tool"
            }];

            $scope.admin = [{
                link: "",
                title: "Settings",
                icon: "settings"
            }, {
                link: "showListBottomSheet($event)",
                title: "Log Out",
                icon: "exit_to_app"
            }];

        }
    });

})();
