angular.module("listaTelefonica").filter("ellipsis", function (configConstant) {
	return function (pInput, pSize) {
		if (pInput.size <= pSize) return pInput;
		var output = pInput.substring(0, (pSize || configConstant.baseStringLenght)) + "...";
		return output;
	};
});