var app = angular.module("gApp", []);
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
app.controller("gCtrl", function($scope, $http, $sce) {
	const API_URL = "https://app.g-global.com.mx/blog";
	var elem = document.getElementById("modal");
    var instance = M.Modal.init(elem);

	$scope.dataset = [];
	$scope.getData = function() {
		$http.jsonp($sce.trustAsResourceUrl(API_URL), {jsonpCallbackParam: 'callback'}).then(function(response) {
			$scope.dataset = response.data.data;
		});
	}
	$scope.getData();

	//Datos para modal
	$scope.selected = {};
	$scope.openModal = function(url) {
		var BASE_URL = "https://app.g-global.com.mx";
		$http.jsonp($sce.trustAsResourceUrl(BASE_URL + url), {jsonpCallbackParam: 'callback'}).then(function(response) {
			$scope.selected = response.data;
			if (response.data.referencia.includes('https://www.youtube.com/watch?v=')) {
				if (response.data.referencia.includes('&')) {
					var video_id = response.data.referencia.split('https://www.youtube.com/watch?v=').pop().split('&')[0];
				}else{
					var video_id = response.data.referencia.split('https://www.youtube.com/watch?v=').pop();
				}
				$scope.selected.referencia = '<iframe src="https://www.youtube.com/embed/'+ video_id +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			}else{
				$scope.selected.referencia = '<a href="'+ response.data.referencia +'"></a>'
			}
			instance.open();
		});
	}
});
