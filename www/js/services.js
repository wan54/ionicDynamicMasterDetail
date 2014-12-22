angular.module('starter')
.factory('IconService', function() {
  var iconService = {};
  var selectedIcon = {};
  var i = 0;
  var icons = [
    { id: i++, name: 'ion-ionic', icon: 'ion-ionic', desc: 'ionic framework logo'},
    { id: i++, name: 'ion-arrow-up-a', icon: 'ion-arrow-up-a', desc: 'Arrow up style a'},
    { id: i++, name: 'ion-arrow-up-b', icon: 'ion-arrow-up-b', desc: 'Arrow up style b'},
    { id: i++, name: 'ion-arrow-up-c', icon: 'ion-arrow-up-c', desc: 'Arrow up style c'},
    { id: i++, name: 'ion-arrow-return-right', icon: 'ion-arrow-return-right', desc: 'Arrow return right'},
    { id: i++, name: 'ion-arrow-swap', icon: 'ion-arrow-swap', desc: 'Arrow swap'},
    { id: i++, name: 'ion-arrow-shrink', icon: 'ion-arrow-shrink', desc: 'Arrow shrink'},
    { id: i++, name: 'ion-arrow-expand', icon: 'ion-arrow-expand', desc: 'Arrow expand'},
    { id: i++, name: 'ion-arrow-move', icon: 'ion-arrow-move', desc: 'Arrow move'},
    { id: i++, name: 'ion-arrow-resize', icon: 'ion-arrow-resize', desc: 'Arrow resize'},
    { id: i++, name: 'ion-chevron-up', icon: 'ion-chevron-up', desc: 'Chevron up'},
    { id: i++, name: 'ion-navicon-round', icon: 'ion-navicon-round', desc: 'Navigation round'},
    { id: i++, name: 'ion-log-in', icon: 'ion-log-in', desc: 'Log in'},
    { id: i++, name: 'ion-checkmark-round', icon: 'ion-checkmark-round', desc: 'Checkmark round'},
    { id: i++, name: 'ion-close-round', icon: 'ion-close-round', desc: 'Close round'},
    { id: i++, name: 'ion-plus-round', icon: 'ion-plus-round', desc: 'Plus round'},
    { id: i++, name: 'ion-minus-round', icon: 'ion-minus-round', desc: 'Minus round'},
    { id: i++, name: 'ion-information-circled', icon: 'ion-information-circled', desc: 'Information circled'},
    { id: i++, name: 'ion-help-circled', icon: 'ion-help-circled', desc: 'Help circled'},
    { id: i++, name: 'ion-help-buoy', icon: 'ion-help-buoy', desc: 'Help buoy'},
    { id: i++, name: 'ion-funnel', icon: 'ion-funnel', desc: 'Funnel'},
    { id: i++, name: 'ion-archive', icon: 'ion-archive', desc: 'Archive'},
    { id: i++, name: 'ion-toggle-filled', icon: 'ion-toggle-filled', desc: 'Toggle filled'},
    { id: i++, name: 'ion-paper-airplane', icon: 'ion-paper-airplane', desc: 'Paper airplane'},
    { id: i++, name: 'ion-map', icon: 'ion-map', desc: 'Map'},
  ];

  iconService.setSelectedIcon = function(ico) {
    selectedIcon = ico;
  };

  iconService.getSelectedIcon = function() {
    return selectedIcon;
  };

  iconService.list = function() {
    return icons;
  };

  iconService.get = function(id) {
    for (var i = 0, l = icons.length; i < l; i++) {
      var icon = icons[i];
      if (icon.id == id) {
        return icon;
      }  
    }

    return null;
  }

  return iconService;
});