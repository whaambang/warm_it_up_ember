import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('solution');
  },

  actions: {
    create: function() {
    var my_model = this.controller.get('model');
    my_model.save();
    this.transitionTo('solutions', my_model);
    }
  }
});
