'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope) {
    var movie = {
      title: 'Ace Drummond',
      image: 'http://ia.media-imdb.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_SY317_CR3,0,214,317_AL_.jpg',
      description: "This 13 chapter serial is based on the comic strip character Ace Drummond created by Eddie Rickenbacker. Ace is a 'G-Man of the sky' working out of Washington D.C. He is sent to Mongolia to find out why a mysterious villain known only as 'The Dragon' is trying to prevent the newly formed International Airways from setting up an airport there. Ace meets Peggy Trainor (Jean Rogers) who is searching for her archaeologist father who has disappeared. Together they search for answers to the puzzles."
    };
    $scope.movie = movie;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
