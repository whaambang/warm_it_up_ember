import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: scores page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('scores page', function() {
  visit('/scores');

  andThen(function() {
    equal(currentPath(), 'scores');
    equal(find('#leaderboard-title').text(), 'Leaderboard');
  });
});
