(function () {
    "use strict";

    var module = angular.module("AppModule");

    module.component("makeRecipe", {
        templateUrl: "partials/make-recipe.html",
        controller: function ($scope, $rootScope) {

            $scope.user = {
                title: "Developer",
                email: "ipsum@lorem.com",
                firstName: "",
                lastName: "",
                company: "Google",
                address: "1600 Amphitheatre Pkwy",
                city: "Mountain View",
                state: "CA",
                biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",
                postalCode: "94043"
            };

            $scope.states = ("LV RV").split(" ").map(function (state) {
                return { abbrev: state };
            });

            $rootScope.$emit('title-changed', 'Make Recipe');

        }
    });

})();