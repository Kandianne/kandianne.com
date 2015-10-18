(function() {
	angular.module('app').controller("ContactFormController", ContactFormController);
	ContactFormController.$inject = ["$mdToast", "$animate", "$http", "$scope"];

	function ContactFormController($mdToast, $animate, $http, $scope) {
		var vm = this;


		//===================TOAST POSITIONING===============================================	
		$scope.toastPosition = {
			bottom: false,
			top: true,
			left: false,
			right: true
		};
		$scope.getToastPosition = function () {
			return Object.keys($scope.toastPosition)
			.filter(function (pos) {
				return $scope.toastPosition[pos];
			})
			.join(' ');
		};

		//===================SEND MAIL FUNCTIONALITY===============================================	



		vm.sendMail = function() {

			var data = ({
				contactName : vm.contactName,
				contactEmail : vm.contactEmail,
				contactMessage : vm.contactMessage
			});

			console.log(data);
			$http.post("/api/contact-form", data).success(function(data, status, headers, config) {
				$mdToast.show(
					$mdToast.simple()
					.content('Thanks for your message ' + data.contactName + ' I will reply to you very soon! ')
					.position($scope.getToastPosition())
					.hideDelay(5000)
					);

			})
			.error(function(data, status, headers, config) {
                    // called asynchronously if error occurs
                    // or server returns response with an error status.
                });
		}


	}
})();
