(function() {
  'use strict';
  angular.module('app')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$interval', "$state", "$timeout", "$location", "$scope"];

  function HomeController($interval, $state, $timeout, $location, $scope) {
    var vm = this;

    //----------------------ACTIVE CLASS---------------------------------------------------------------------------------------------------------
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
      console.log(path);
      console.log($location.path());
    };

    //----------------------SKILLS---------------------------------------------------------------------------------------------------------

    var x = angular.element(".story");

    $timeout(function() {
      for(var i=0; i < x.length; i++) {
        x[i].className = 'puzzle';
      }
    },3300);

// $timeout(function() {
//   document.getElementById('#css-pourcent');
// },3500);

    //-----------------------------------------------------------------------------------------------------------------------------------------


//     vm.type = {
//       text: ""
//     };
//     vm.rightString = "I'm Kandianne Pierre. A dog-loving, creativity driven, bold, marketing-minded, adventurous, front-end web developer.";
//     vm.wrongString = "Thanks for visiting!"
//     vm.secondMessage = "Take a look at my work and send me a quick message to say hi :)";
// vm.secondType = [];
// vm.typingAnimationDone;
// vm.count = 0;
// vm.done = false;

// vm.cancel = function() {
//   $interval.cancel("backspaceInterval");
//   $interval.cancel("type");
//   $interval.cancel("secondType");
//   vm.done = true;
// }
//     // FUNCTION FOR TYPING
//     vm.backspace = function(string, number, funcToRunAfterBackspace) {
//       var stringToBeWorked = string.split("");
//       var backspaceInterval = $interval(function() {
//         if (stringToBeWorked.length === number) {
//           $interval.cancel(backspaceInterval);
//           funcToRunAfterBackspace();
//         }

//         stringToBeWorked.splice(stringToBeWorked.length - 1, 1);
//         vm.type.text = stringToBeWorked.join("");
//       }, 77)

//     }
//     vm.firstType = function(string, backspacefunc) {
//       var type = $interval(function() {
//         if (vm.type.text === string) {
//           $interval.cancel(type);
//           vm.count = 0;
//           backspacefunc(vm.type.text, 0, function() {
//             vm.firstType(vm.rightString, function() {
//               vm.MEANtype();
//             });
//           });

//           // vm.SecondType();

//           return;
//         }
//         vm.type.text += string[vm.count];
//         vm.count += 1;
//       }, 77);
//     }

//     vm.MEANtype = function() {
//       var secondType = $interval(function() {
//         if (vm.count === vm.secondMessage.length) {
//           $interval.cancel(secondType);
//           $timeout(function() {
//             vm.typingAnimationDone = true;
//             vm.done = true;
//           }, 500);
//         }
//         vm.secondType.push(vm.secondMessage[vm.count]);
//         vm.count += 1;
//       }, 120)
//     }




//     vm.firstType(vm.wrongString, vm.backspace);
}
})();
