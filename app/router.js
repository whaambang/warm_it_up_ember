import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scores');
  this.resource('problems', function() {
    this.route('show', { path: ':problem_id' });
  });
});

export default Router;
