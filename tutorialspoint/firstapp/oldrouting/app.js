//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
	templateUrl: 'templates/add_order.html',
	controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
	templateUrl: 'templates/show_orders.html',
	controller: 'ShowOrdersController'
      }).
      otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);


sampleApp.controller('AddOrderController', function($scope) {
	
	$scope.message = 'This is Add new order screen, using AddOrderController.';
	
});


sampleApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen, using ShowOrdersController';

});
