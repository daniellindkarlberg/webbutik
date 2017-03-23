angular.module('filters', []).
    filter('sumTotal',
    function () {
        return function (data, value1, value2) {
            if (angular.isUndefined(data) || angular.isUndefined(value1) || angular.isUndefined(value2))
                return 0;
            var sum = 0;
            angular.forEach(data, function (value) {
                sum = sum + (parseInt(value[value1]) * parseInt(value[value2]));
            });
            return sum + " Kr";
        };
    });