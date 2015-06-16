(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var angularDemoApp = angular.module('angularDemoApp', ['ngRoute']);


/*------URL/模板/控制器-------*/
function routeConfig($routeProvider) {
    $routeProvider.
        when('/list', {
            templateUrl: 'goods-list.html',
            controller: 'ListsController'
        }).
        when('/content/:id', {  //害苦了我，:id写上面去了
            templateUrl: 'goods-content.html',
            controller: 'ContentController'
        }).
        otherwise({
            redirectTo: '/list'
        })
}

angularDemoApp.config(routeConfig);

/*-------商品列表控制器,必须显示声明依赖，因为压缩替换简化变量，导致运行错误--------*/
angularDemoApp.controller('ListsController', ['$scope', '$http', function($scope, $http) {
    $scope.filter = {
        keyword : '',
        state1 : 'all',
        state2 : '!judge',
        state3 : '!sale',
        state4 : '!off'

    };
    $http.get('../js/json/goods-list.json').success(function(data) {
        if(data.status === 'success'){
            $scope.itemList = data.itemList;
        }else{
            $.toast('商品数据查询错误','warning');
        }

    });
}]);


/*-------商品内容控制器--------*/
angularDemoApp.controller('ContentController', ['$scope', '$http','$routeParams',
        function($scope, $http, $routeParams) {
            $http.get('../js/json/goods-list.json').success(function(data) {
                if(data.status === 'success'){
                     $.each(data.itemList, function() {
                        if(this.id === $routeParams.id) {
                            $scope.item = this;
                        }
                    });
                }else{
                    $.toast('商品数据查询错误','warning');
                }

            });
}]);


/*--------定义商品过滤器------*/
angularDemoApp.filter('searchFilter', function () {
    var searchFilter = function (input, type, obj) {
        var result = []; // 害苦我，写成{}!
        if(input === undefined){
            input = [];
        }
        switch(type) {
            case 'keyword':
                $.each(input, function(){  //$.each()返回原数组
                    if(obj.keyword === '' || obj.keyword === undefined){
                        result = input;
                    }else if(this.name.toLowerCase().indexOf(obj.keyword.toLowerCase()) != -1) {
                        result.push(this);
                    }
                });
                break;

            case 'state':
                if(obj.state1 === 'all'){ // 害苦我，写成state!
                    result = input;
                }else {
                    $.each(obj, function(key, value) {
                        if(key != 'keyword'){
                            $.each(input, function(){
                                if(value === this.state){
                                    result.push(this);
                                }
                            });
                        }
                    });
                }
                break;
            default:
                result = input;
        }

        return result;
    };
    return searchFilter;
});


/*--------定义状态文字转换器------*/
angularDemoApp.filter('toChinese', function() {
    var convert = function(input) {
        var nameHash = {
            judge : '审核中',
            sale : '销售中',
            off : '已下架'
        };
        return  nameHash[input];
    };
    return convert;
});


/*-------自定义指令，改变nav导航栏点击背景-------*/
angularDemoApp.directive('changeBkg', function() {
    return {
        link: function(scope, element) {
            element.bind('click', function(event) {
               $(this).parent().find("li").removeClass("active");
               $(this).addClass("active");
            })
        }
    };
});

/*-------自定义指令，inputs输入框，自动focus-------*/
angularDemoApp.directive('autoFocus', function() {
    return {
        link: function(scope, element) {
            element[0].focus();
        }
    };
});

},{}]},{},[1])