(function () {
    "use strict";

    var module = angular.module("AppModule");

    function buildStars(value, max) {
        var stars = [];
        for (var i = 1; i <= max; i++) {
            stars.push(i <= value ? "star" : "star_border");
        }
        return stars;
    }

    module.component("rating", {
        templateUrl: "partials/rating.html",
        bindings: {
            value: "<",
            max: "<",
            readOnly: "<",
            setRating: "&"
        },
        controller: function ($scope) {

            var self = this;

            this.$onInit = function () {
                $scope.stars = buildStars(self.value, self.max);
            };

            this.$onChanges = function() {
                $scope.stars = buildStars(self.value, self.max);
            };

            $scope.setRating = function(param) {
                $scope.stars = buildStars(param.value, self.max);
            };

        }
    });

})();