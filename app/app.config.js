angular.module("app").
    config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    template: '<show-products></show-products>',
                })

                .when("/cart", {
                    template: '<show-cart></show-cart>',

                })

                .when("/login", {
                    template: '<login></login>',

                })

                .when("/checkout", {
                    template: '<check-out></check-out>',

                })
                .when("/checkout-success", {
                    template: '<checkout-success></checkout-success>',

                })

                .when("/user-create", {
                    template: '<create-user></create-user>',

                })
                .when("/user-page", {
                    template: '<user-page></user-page>',

                })
                .when("/user-details", {
                    template: '<user-details></user-details>',

                })

                .when("/order", {
                    template: '<show-orders></show-orders>',

                })

                .when("/order/:orderId", {
                    template: '<order-details></order-details>',
                })


                .otherwise("/");
            $locationProvider.html5Mode(true);
        }]);