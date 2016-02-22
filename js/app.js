//rerouting page to home
var whenConfig = ['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.when('', '/')
}];

//Create app
var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);


myApp.config(whenConfig) 

//Configure app
myApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('home', { // Landing page
	    url:'/',
	    templateUrl: 'templates/home.html', // HTML fragment
	    controller: 'HomeController', // Which controller 
	})

	.state('index1', { // Landing page
	    url:'/index1',
	    templateUrl: 'templates/index1.html', // HTML fragment
	    controller: 'Index1Controller', // Which controller 
	})

	.state('index2', { // Landing page
	    url:'/index2',
	    templateUrl: 'templates/index2.html', // HTML fragment
	    controller: 'Index2Controller', // Which controller 
	})

	.state('index3', { // Landing page
	    url:'/index3',
	    templateUrl: 'templates/index3.html', // HTML fragment
	    controller: 'Index3Controller', // Which controller 
	})

	.state('index4', { // Landing page
	    url:'/index4',
	    templateUrl: 'templates/index4.html', // HTML fragment
	    controller: 'Index4Controller', // Which controller 
	})

	.state('index5', { // Landing page
	    url:'/index5',
	    templateUrl: 'templates/index5.html', // HTML fragment
	    controller: 'Index5Controller', // Which controller 
	})

	.state('index6', { // Landing page
	    url:'/index6',
	    templateUrl: 'templates/index6.html', // HTML fragment
	    controller: 'Index6Controller', // Which controller 
	})

	.state('index7', { // Landing page
	    url:'/index7',
	    templateUrl: 'templates/index7.html', // HTML fragment
	    controller: 'Index7Controller', // Which controller 
	})

	.state('index8', { // Landing page
	    url:'/index8',
	    templateUrl: 'templates/index8.html', // HTML fragment
	    controller: 'Index8Controller', // Which controller 
	})
})


// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
  $scope.info = ""
})

.controller('Index1Controller', function($scope){
  $scope.info = ""
})

.controller('Index2Controller', function($scope){
  $scope.info = ""
})

.controller('Index3Controller', function($scope){
  $scope.info = ""
})

.controller('Index4Controller', function($scope){
  $scope.info = ""
})

.controller('Index5Controller', function($scope){
  $scope.info = ""
})

.controller('Index6Controller', function($scope){
  $scope.info = ""
})

.controller('Index7Controller', function($scope){
  $scope.info = ""
})

.controller('Index8Controller', function($scope){
  $scope.info = ""
})