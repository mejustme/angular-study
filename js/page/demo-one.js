"use strict";

var demoApp = angular.module('demoApp', ['ngRoute']);


/*------URL/模板/控制器-------*/
function routeConfig($routeProvider) {
    $routeProvider.
        when('/list/:id', {
            templateUrl: 'goods-list.html',
            controller: 'ListsController'
        }).
        when('/content', {
            templateUrl: 'goods-content.html',
            controller: 'ContentController'
        }).
        otherwise({
            redirectTo: '/list'
        })
}

demoApp.config(routeConfig);

/*-------商品列表控制器--------*/
demoApp.controller('ListsController', ['$scope', '$http', function($scope, $http) {
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
demoApp.controller('ContentController', ['$scope', '$http','$routeParams',
        function($scope, $http, $routeParams) {
            $http.get('../js/json/goods-list.json').success(function(data) {
                if(data.status === 'success'){
                     $.each(data.itemList, function(){
                        if(this.id === $routeParams.id){
                            $scope.item = this;
                        }
                    });
                }else{
                    $.toast('商品数据查询错误','warning');
                }

            });
}]);


/*--------定义商品过滤器------*/
demoApp.filter('searchFilter', function () {
    var searchFilter = function (input, type, obj) {
        var result = {};
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
                if(obj.state === 'all'){
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
demoApp.filter('toChinese', function() {
    var convert = function(input) {
        var nameHash = {
            judge : '审核中',
            sale : '销售中',
            off : '已下架'
        }
        return  nameHash[input];
    };
    return convert;
});