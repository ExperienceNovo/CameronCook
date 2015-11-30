angular.module( 'cameroncook.login', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/index.tpl.html'
			}
		}
	});
})

.controller( 'LoginCtrl', function LoginController( $scope, titleService, config ) {
	titleService.setTitle('cameroncook');
	$scope.currentUser = config.currentUser;

});
