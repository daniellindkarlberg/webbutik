angular.module('cart').
	directive('cartDirective', ['cartService', '$uibModal',
		function (cartService, $uibModal) {


			return {

				scope: {},
				restrict: 'E',
				replace: true,
				templateUrl: 'app/cart/cart.html',
				link: function (scope, elem, attr) {


					scope.items = 0;
					scope.viewCart = function () {

						cartItems = cartService.getCartItems();
						var modalInstance = $uibModal.open({
							templateUrl: 'app/cart/cart-list.template.html',
							controller: 'cartListController',
							resolve: {
								cartItems: function () {
									return cartItems;
								}
							}
						});

					};

					scope.$on('cart-updated', function updateCart() {
						scope.items = cartService.itemsInCart();

					});
				}

			};

		}]);
