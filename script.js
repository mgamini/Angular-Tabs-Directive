angular.module('myApp', ['myApp.controllers', 'myApp.directives']);

angular.module('myApp.controllers', []).
    controller('myController', ['$scope', '$q', '$rootScope', function($scope, $q, $rootScope) {
      getData($q, $rootScope).then(function(data) {
        $scope.data = data;
      })
    }])



angular.module('myApp.directives', []).directive('tabs', function($timeout) {
        return {
            restrict: 'A',
            transclude: true,
            scope: { 
                tabsdata: '=tabsdata'                            
            },
            controller: function($scope, $element, $attrs) {
                var self = this;                
                $scope.current = 0;

                this.select = function(index) {
                    $timeout(function() {
                        angular.forEach($scope.tabsdata, function(tab) {
                            tab.selected = false;
                        });
                        $scope.tabsdata[index].selected = true;

                        $scope.current = index;
                    })
                };
                this.getTabs = function() { return $scope.tabsdata }

                $scope.$watch('tabsdata', function(value) {
                    if ($scope.tabsdata) {
                        ($scope.tabsdata[0].selected = true);

                        $attrs.autorotate && !$scope.rotator && initRotator($scope);
                    }
                });

                function initRotator() {
                    $scope.rotator = {
                        timeout: null,
                        interval: 2000,
                        len: $scope.tabsdata.length,
                        next: function(target) {
                            if (!target) {
                                $scope.current = ($scope.current == $scope.rotator.len - 1) ? 0 : $scope.current + 1;
                                target = $scope.current;
                            }
                            self.select(target)
                        },
                        pause: function() {
                            if ($scope.rotator.timeout) {                                
                                clearInterval($scope.rotator.timeout)
                                $scope.rotator.timeout = null
                            }
                            else 
                                setInterval($scope.rotator.next, $scope.rotator.interval)
                        },
                        init: function() {
                            if (parseInt($attrs.autorotate))
                                $scope.rotator.interval = parseInt($attrs.autorotate);
                            $scope.rotator.timeout = setInterval($scope.rotator.next, $scope.rotator.interval);
                        }                    
                    }

                    $scope.rotator.init();
                }
            },
            template: '<div class="tabbed" ng-transclude></div>'
        }
    }).

    directive('tabsnav', function() {
        return {
            restrict: 'A',
            require: '^tabs',
            transclude: true,
            link: function($scope, $element, $attrs, tabsCtrl) {
                $scope.tabs = tabsCtrl.getTabs;
                $scope.select = tabsCtrl.select;
            },
            template: 
                '<ul class="tabs-nav">' + 
                    '<li ng-repeat="tabNav in tabs()" ng-click="select($index)" ng-transclude ng-class="{ active: tabNav.selected }" >' +
                '</ul>'            
        }
    }).

    directive('tabscontent', function() {
        return {
            restrict: 'A',
            require: '^tabs',
            transclude: true,
            link: function($scope, $element, $attrs, tabsCtrl) {                
                $scope.tabs = tabsCtrl.getTabs;
                $scope.select = tabsCtrl.select;
            },            
            template: '<div class="tabs-content" ng-transclude ng-repeat="tab in tabs()" ng-class="{ active: tab.selected}"></div>'            
        }
    })    
