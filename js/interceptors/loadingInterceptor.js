angular.module("listaTelefonica").factory("loadingInterceptor", function ($q, $rootScope, $timeout) {
	return {
		request: function (pConfig) {
			$rootScope.loading = true;
			return pConfig;
		},
		requestError: function (pRejection) {
			$rootScope.loading = false;
			return $q.reject(pRejection);
		},
		response: function (pResponse) {
			$timeout(function () {
				$rootScope.loading = false;
			}, 1000);
			return pResponse;
		},
		responseError: function (pRejection) {
			$rootScope.loading = false;
			return $q.reject(pRejection);
		}
	};
});