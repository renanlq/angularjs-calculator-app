angular.module("listaTelefonica").factory("timeStampInterceptor", function () {
	return {
		request: function (pConfig) {
			var url = pConfig.url;
			if (url.indexOf("view") > -1) return pConfig;
			var timestamp = new Date().getTime();
			pConfig.url = url + "?timestamp" + timestamp;
		}
	}
});