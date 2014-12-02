// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract: true
  })

  .state('menu.base', {
    url: '/base',
    views: {
      'menu-content': {
        templateUrl: 'templates/sideMenuBase.html',
        abstract: true
      }
    }
  })
  .state('menu.base.home', {
    url: '/home',
    views: {
      'base-content': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('menu.base.about', {
    url: '/about',
    views: {
      'base-content': {
        templateUrl: 'templates/about.html'
      }
    }
  })
  .state('menu.base.settings', {
    url: '/settings',
    views: {
      'base-content': {
        templateUrl: 'templates/settings.html'
      }
    }
  })

  .state('menu.master', {
    url: '/master',
    views: {
      'menu-content': {
        templateUrl: 'templates/masterView.html',
        controller: 'MasterCtrl'
      }
    }
  })

  .state('menu.detail', {
    url: '/detail/:id',
    views: {
      'menu-content': {
        templateUrl: 'templates/detailView.html',
        controller: 'DetailCtrl'
      }
    }
  })

  .state('menu.masterDetail', {
    url: '/masterDetail',
    views: {
      'menu-content': {
        templateUrl: 'templates/masterDetailLayout.html',
        abstract: true
      }
    }
  })
  .state('menu.masterDetail.main', {
    url: '/main',
    views: {
      'master-view': {
        templateUrl: 'templates/masterView.html',
        controller: 'MasterCtrl'
      },
      'detail-view': {
        templateUrl: 'templates/detailView.html',
        controller: 'DetailCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/menu/base/home');
});
