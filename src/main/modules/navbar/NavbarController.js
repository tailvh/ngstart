define(function () {
	"use strict";

	var NavbarController = function($scope, $location, $translate) {
		$scope.isActive = function(page) {
			return page === $location.path();
		};

		$scope.changeLanguage = function(language) {
			$translate.uses(language);
		};

	};

	NavbarController.$inject = ["$scope", '$location', '$translate'];

	return NavbarController;
});