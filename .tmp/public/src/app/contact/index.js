angular.module( 'cameroncook.contact', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contact', {
		url: '/contact',
		views: {
			"main": {
				controller: 'ContactCtrl',
				templateUrl: 'contact/index.tpl.html'
			}
		}
	});
})

.controller( 'ContactCtrl', function ContactController( $scope, titleService ) {
	titleService.setTitle('Contact - Cameron Cook');
});