define(function(require){
    'use strict';

    var angular = require('angular');
    var module = angular.module('app.home', []);
    var template = require('text!./templates/home.html');
    var controller = require('./controllers/home');

    //Đăng kí controller
    module.controller('HomeController', controller);

    run.$inject = ['$templateCache'];
    function run($templateCache){
        $templateCache.put('home/templates/home.html', template);
    }
    module.run(run);

    config.$inject = ['$stateProvider'];
    function config($stateProvider){
        $stateProvider.state('base1.home', {
            url: '/',
            views: {
                'base1': {
                    templateUrl: 'home/templates/home.html',
                    controller: 'HomeController'
                }
            }
        });
    }
    module.config(config);

    return module.name;
});