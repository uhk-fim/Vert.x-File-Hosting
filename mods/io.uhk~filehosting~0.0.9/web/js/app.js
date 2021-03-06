'use strict';
angular.module('filehosting', ['filehosting.services', 'filehosting.directives','filehosting.controllers','LocalStorageModule']).
config(function($routeProvider) {
$routeProvider.
when('/', {controller:'UploadCtrl', templateUrl:'pages/upload.html'}).
when('/search', {controller:'SearchCtrl', templateUrl:'pages/search.html'}).
when('/login',{controller:'LoginCtrl',templateUrl:'pages/login.html'}).
when('/registration',{controller:'LoginCtrl',templateUrl:'pages/registration.html'}).
when('/account',{controller:'LoginCtrl',templateUrl:'pages/user_edit.html'}).
when('/files',{controller:'MyFilesCtrl',templateUrl:'pages/my_files.html'}).
when('/file/:fileID/:filename',{controller:'FileDetailCtrl',templateUrl:'pages/file_detail.html'}).
when('/tests',{controller:'TestCtrl',templateUrl:'pages/tests.html'}).
otherwise({redirectTo:'/'});
});

