'use strict';

/**
 * @ngdoc function
 * @name zequenzeApp.service:template
 * @description
 * # getTemplate
 * template's service of the zequenzeApp
 */
angular.module('digitall.service-templates',[])

    .service('url', function($q, $timeout, $http) {
        return {
            getUrl: function() {
                var defer = $q.defer();
                defer.promise;
                $http.get('scripts/json/url.json').success(function(data) {
                    defer.resolve(data);
                }).error(function(){
                    defer.resolve();
                });
                return defer.promise;
            }

        }
    })
    .service('template', function($q, $timeout, $http) {
        return {
            getTemplate: function() {
                var defer = $q.defer();
                defer.promise;
                $http.get('scripts/json/template.json').success(function(data) {
                    defer.resolve(data);
                }).error(function(){
                    defer.resolve();
                });
                return defer.promise;
            }

        }
    })

