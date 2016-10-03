angular.module('starter.controllers', [])

.controller('saldo', function($scope,$http) {
  $scope.consultar = function(){
      $http.get('http://localhost:4000/saldo/'+$scope.numeroTarjeta)
        .success(function(tarjeta){
          $scope.tarjeta = tarjeta;
          console.log(tarjeta);
        })
        .error(function(err){
          console.log(err);
        });
    }
})

.controller('paradero', function($scope, $http) {
  $scope.consultarParadero = function(){
    $http.get('http://localhost:4000/paradero/'+$scope.numeroParadero)
      .success(function(paradero){
        $scope.paraderos = paradero.avail;
        console.log(paradero.avail);
      })
      .error(function(err){
        console.log(err);
      })
  }
})


.controller('punto', function($scope) {});