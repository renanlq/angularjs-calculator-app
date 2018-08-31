angular.module("listaTelefonica").factory("errorInterceptor", function ($q, $location) {
	return {
		responseError: function (pRejection) {
			if (pRejection.status === 404) {
				$location.path("/error");
			}
			return $q.reject(pRejection);
		}
	};
});