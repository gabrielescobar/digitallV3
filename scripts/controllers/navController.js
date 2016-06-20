/**
 * Created by GABRIEL ESCOBAR on 06/07/2015.
 */
'use strict';
angular.module('digitall.controllers-nav',[])
    .controller('navController', function ($scope,$rootScope,$translate) {

        $scope.ChangeLanguage = function(){
            if ($rootScope.actualLanguage == "es"){
                $translate.use("en");
                $rootScope.actualLanguage = "en";
            }
            else{
                $translate.use("es");
                $rootScope.actualLanguage = "es";
            }

        }


    })

;