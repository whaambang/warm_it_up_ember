import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    $.getJSON("api/v1/users/current", function(data) {
      controller.set('currentUser', data.user);
    });
  }
});
