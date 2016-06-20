/**
 * Created by GABRIEL ESCOBAR on 06/07/2015.
 */
'use strict';
angular.module('digitall.controllers-contact',[])
    .controller('contactController', function (url,template,$scope,$rootScope,$http,$translate,$timeout) {

        $scope.result = 'hidden'
        $scope.resultMessage;
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function(contactform) {
            //alert("enviado");
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            $scope.errorMessage = false;
            $scope.formData.inputSubject = "Contact from Digitall Page"
                $http({
                    method  : 'POST',
                    url     : 'contact-form.php',
                    data    : $.param($scope.formData),  //param method from jQuery
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).success(function(data){
                    console.log(data);
                    var test = data.split("{");
                    var str = "{"+test[1];
                    var json = JSON.parse(str);
                    console.log(json.success);
                    if (json.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = false;
                        $scope.errorMessage = false;
                        $scope.resultMessage = json.message;
                    } else {
                        $scope.errorMessage = true;
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = json.message;
                    }
                    $scope.formData = {};
                    $timeout(function () {
                        $scope.$apply(function () {
                            $scope.resultMessage = "";
                        });
                         }, 5000);
                });

        }

        $scope.functionThatReturnsStyle = function() {

            if ($scope.errorMessage == false) {
                return "color: greenyellow;";
            }
            else {
                return "color: red;";
            }
        }

    })

;