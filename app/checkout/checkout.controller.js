angular.module('checkout').
  controller('checkoutController', ['$scope', 'cartService', 'checkoutService', 'loginService', '$location', '$timeout',
    function ($scope, cartService, checkoutService, loginService, $location, $timeout) {

      $scope.text = "";
      if (!loginService.isLoggedIn()) {

        $location.path("/login");

      }


      $scope.products = cartService.getCartItems();


      $scope.submitOrder = function () {
        var userId = loginService.getUserId();
        var products = cartService.getCheckoutProducts();

        checkoutService.forwardOrder(userId, products).then(function (response) {

          $location.path("/checkout-success");
          cartService.emptyCart();
          $timeout(function () {
            $location.path("/order");

          }, 3000);

        }, function (errorResponse) {

          $scope.text = "Något gick fel vid beställning!"

        });
      };
    }]);



