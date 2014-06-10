'use strict';

angular.module('testAngularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10.30 pm',
        location:{
            address: 'Google Headqoters',
            city:'Mountain View',
            province: 'CA'
        },
        imageUrl: '',
        sessions:[
            {
                name: 'Directives Masterclass',
                creatorName:'Bob Smith',
                duration:'1 hr',
                level:'Advanced',
                abstract:'In this session you will learn the ins and cuts of directives',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName:'John Doe',
                duration:'30 min',
                level:'Introductory',
                abstract:'This session will take a closer look at scopes.',
                upVoteCount: 0
            },
            {
                name: 'Well behaved controllers',
                creatorName:'Jane Dou',
                duration:'2 hours',
                level:'Intermediate',
                abstract:'Controllers are the beginning of everything Angular does ',
                upVoteCount: 0
            }
        ]
    };
  });
