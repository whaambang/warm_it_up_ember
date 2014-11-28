import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posses', { path: '/'}, function(){
    this.route('show', { path: ':poss_id'})
  });
  this.resource('problems', function() {
    this.route('show', { path: ':problem_id' });
  });

  this.resource('solutions', function() {
    this.route('show', { path: ':solution_id' });
    this.route('create', { path: 'create'});
  });

});


export default Router;
