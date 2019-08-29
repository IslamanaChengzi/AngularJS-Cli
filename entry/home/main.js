import angular from 'angular';
import ngRoute from 'angular-route';
import { instruction } from '../../common/app';
import '../../css/home.scss';

const homeCtrl = $scope => {
    $scope.pageInfo = 'Hello Angular';
}
const helloNG = () => ({
    restrict:'EACM',
    template:`<p class="home-title">{{pageInfo}}123</p>`
});

console.log( angular );

angular.module('home', [])
    .controller('homeCtrl',['$scope', 
        $scope => homeCtrl($scope)
    ])
    .directive('helloNg', helloNG)
    .directive('ngText', instruction);
