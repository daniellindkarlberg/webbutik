angular.module('checkout').
  factory('checkoutService', ['$http',
    function ($http) {

      return {

        forwardOrder: function (customerId, products) {

          return $http.post('http://nackbutik.azurewebsites.net/api/order', { customerId, products });
        },
      };

    }]);