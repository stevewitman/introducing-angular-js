'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
var myApp = angular.module('movieManiaApp', []);
myApp.controller('MainCtrl', function ($scope) {
  var movieList = [
    {
      'title': 'Ace Drummond',
      'image': 'http://ia.media-imdb.com/images/M/MV5BMjEyNzg3MzcyNF5BMl5BanBnXkFtZTcwNjQ2NTQyMQ@@._V1_SY317_CR3,0,214,317_AL_.jpg',
      'description': "This 13 chapter serial is based on the comic strip character Ace Drummond created by Eddie Rickenbacker. Ace is a 'G-Man of the sky' working out of Washington D.C. He is sent to Mongolia to find out why a mysterious villain known only as 'The Dragon' is trying to prevent the newly formed International Airways from setting up an airport there. Ace meets Peggy Trainor (Jean Rogers) who is searching for her archaeologist father who has disappeared. Together they search for answers to the puzzles.",
      'category': "Awesome"
    },
    {
      'title': 'And Then There Were None',
      'image': 'http://ia.media-imdb.com/images/M/MV5BMTMyMDA2ODE5M15BMl5BanBnXkFtZTcwNjg0NjIyMQ@@._V1_SY317_CR5,0,214,317_AL_.jpg',
      'description': "Based on a novel and subsequent stage play by Agatha Christie; ten people are invited to an isolated island, only to be killed one-by-one. Could one of them be the killer?",
      'category': "Epic"

    },
    {
      'title': 'Captain Kidd',
      'image': 'http://ia.media-imdb.com/images/M/MV5BMzMyMzk3Nzc3Nl5BMl5BanBnXkFtZTcwNzczMzU1MQ@@._V1_SY317_CR51,0,214,317_AL_.jpg',
      'description': "The unhistorical adventures of pirate Captain Kidd revolve around treasure and treachery.",
      'category': "Awesome"
    }
  ];
  $scope.movies = movieList;

  $scope.movie = {
    title: '',
    image: 'https://www.digitalprolab.com/products/video/images/Movie-Reel-hero.jpg',
    description: ''
  };

  $scope.validateTitle = function() {
    if($scope.movie.title.length > 0) {
      console.debug($scope.movie.title);
    } else {
      window.alert('Title is required');
    }
  };

  $scope.addMovie = function() {
    $scope.movies.push(angular.copy($scope.movie));
  };

  $scope.checkCategorySelected = function() {
    if($scope.newMovieCategory === '') {
      window.alert('Category cannot be empty');
    }
  };

  $scope.checkDescription = function() {
    console.debug($scope.newMovieDescription);
  };




});
