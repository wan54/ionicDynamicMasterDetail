angular.module('starter')
.controller('AppCtrl', ['$scope', '$window', '$state', function(scope, w, state) {
    scope.tablet = w.innerWidth >= 768;

    scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        scope.sideMenuBase = state.includes("menu.base.*"); 
    });
}])

.controller('HomeCtrl', ['$scope', '$location', function(scope, loc) {
    scope.gotoMasterDetail = function() {
        loc.path(scope.tablet ? '/menu/masterDetail/main' : '/menu/master');
    };
}])

.controller('MasterCtrl', ['$rootScope', '$scope', '$location', 'IconService', '$ionicNavBarDelegate', function(rootScope, scope, loc, iconService, ionicNavBarDelegate) {
    scope.icons = iconService.list();

    scope.openItem = function(ico) {
        var openItemForTablet = function() {
            iconService.setSelectedIcon(ico);
            rootScope.$broadcast('ItemSelected');
        };
        var openItemForPhone = function() {
            loc.path('/menu/detail/' + ico.id);
        };

        (scope.tablet ? openItemForTablet : openItemForPhone)();
    };

    if (!scope.tablet) ionicNavBarDelegate.setTitle('Master');

}])

.controller('DetailCtrl', ['$scope', '$stateParams', '$ionicNavBarDelegate', 'IconService', function(scope, stateParams, ionicNavBarDelegate, iconService) {
    var getItemForTablet = function() {
        scope.$on('ItemSelected', function() {
            scope.ico = iconService.getSelectedIcon();
        });
    };
    var getItemForPhone = function() {
        scope.ico = iconService.get(stateParams.id);
    };

    (scope.tablet ? getItemForTablet : getItemForPhone)();

    if (!scope.tablet) ionicNavBarDelegate.setTitle('Detail');
}]);