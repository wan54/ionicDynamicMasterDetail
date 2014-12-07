angular.module('starter')

.directive('dynamicMdLayout', ['$window', '$timeout', function(w, timeout) {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

    var offsetHeight = 64; // header
    var portraitTopHeightPortion = 0.35;
    var el = angular.element(element);

    function isLandscape() {
      return w.innerWidth > w.innerHeight;
    };

    function doComputeViewStyles(params) {
      // TODO: add animation
      
      el.parent().css({ height: params.rowHeight });

      el.find('ion-view').css({ 
        height: params.topHeight,
        'max-width': params.topMaxWidth,
        'border-right': params.borderRight,
        'border-bottom': params.borderBottom
      });

      el.next().find('ion-view').css({
        height: params.bottomHeight, 
        'margin-top': params.marginTop,
        top: params.top
      });

      el.next().find('ion-view').css({'max-width': params.detailMaxWidth});
    }

    function computeViewStyles() {
      if (isLandscape()) {

        doComputeViewStyles({
          rowHeight: w.innerHeight + 'px',
          topHeight: 'auto',
          topMaxWidth: 'inherit',
          bottomHeight: 'auto',
          borderBottom: '',
          borderRight: '4px solid #dedede',
          top: '0',
          detailMaxWidth: '60%'
        });

      } else {

        var topViewHeight = w.innerHeight * portraitTopHeightPortion;
        var bottomViewHeight = w.innerHeight - topViewHeight - offsetHeight;

        doComputeViewStyles({
          rowHeight: 'auto',
          topHeight: topViewHeight + 'px',
          topMaxWidth: '100%',
          bottomHeight: bottomViewHeight + 'px',
          borderBottom: '4px solid #dedede',
          borderRight: '',
          top: 'inherit',
          detailMaxWidth: ''
        });

      }
    }

    function onResize(ev) {
      debouncedComputeViewStyles();
    }

    var debouncedComputeViewStyles = ionic.debounce(function() {
      computeViewStyles();
    }, 10, true);

    timeout(function() {
      computeViewStyles();
    }, 10);

    ionic.on('resize', onResize, w); 

    scope.$on('$destroy', function() {
      ionic.off('resize', onResize, w);
    });

  }
  };
}])

.directive('shouldExposeWhen', ['$window', '$state', function(w, state) {

  function isSideMenuBase() { 
    return state.includes("menu.base.*"); 
  }

  return {
    restrict: 'A',
    require: '^ionSideMenus',
    link: function(scope, el, attr, sideMenuCtrl) {

      var mq = attr.shouldExposeWhen == 'large' ? '(min-width:768px)' : attr.shouldExposeWhen;

      function checkAsideExpose() {
        sideMenuCtrl.exposeAside(w.matchMedia(mq).matches && isSideMenuBase());
        sideMenuCtrl.activeAsideResizing(false);
      }

      function onResize() {
        sideMenuCtrl.activeAsideResizing(true);
        debouncedCheck();
      }

      var debouncedCheck = ionic.debounce(function() {
        scope.$apply(function(){
          checkAsideExpose();
        });
      }, 300, false);

      checkAsideExpose();

      ionic.on('resize', onResize, w);

      scope.$on('$destroy', function(){
        ionic.off('resize', onResize, w);
      });

      scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (w.matchMedia(mq).matches) {  
            if (isSideMenuBase()) {
              sideMenuCtrl.exposeAside(true);
            } else {
              sideMenuCtrl.exposeAside(false);
            }
            sideMenuCtrl.activeAsideResizing(true);
        } 
      });
    }
  };
}])
;