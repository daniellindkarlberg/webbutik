angular.module('filters').
    filter('categoryFilter', ['$filter',
        function ($filter) {
            return function (input, id) {

                if (id == undefined) {

                    return input;
                }
                var products = [];
                angular.forEach(input, function (item) {
                    if (item.categoryId == id) {

                        products.push(item);
                    }
                });
                return products;
            };
        }]);






