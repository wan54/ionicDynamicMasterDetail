ionicDynamicMasterDetail
========================

Dynamic master detail layout powered by ionic framework.

This [demo](http://wan54.github.io/ionicDynamicMasterDetail) is using the sidemenu (dynamic too) and navigation.

The same templates used for tablets will be reusable on phones.

Simply add platform ios/android after you get the source and run/emulate. On the browser try the demo on Chrome with device mode turned on.

There are two custom directives:

- `dynamic-md-layout` enables dynamic master detail layout. The only condition that the directive requires is `<ion-view>` must be the first element in master and detail templates.
- `should-expose-when` allows the sidemenu to be automatically hidden when opening sub contents from the menu base view.