angular.module( 'cameroncook', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'cameroncook.about',
    'cameroncook.contact',
    'cameroncook.home',
    'cameroncook.login',
    'cameroncook.register',
    'cameroncook.sidebar'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {

    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/contact/', '/contact');

    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            // pass through to let the web server handle this request
            window.location = $location.$$absUrl;
        }
    });

    $locationProvider.html5Mode(true);

})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config, $rootScope ) {
    config.currentUser = window.currentUser; 
    $scope.scrollTo = function(div) {
    $location.hash('about-top');
    $anchorScroll();
    }
});

