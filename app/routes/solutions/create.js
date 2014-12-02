import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.controllFor('application').get('currentUser')) {
      var auth_deferred = $.get('/session');

      return auth_deferred;
    }
  }
});

//   model: function() {
//     return this.store.createRecord('solution');
//   },

//   actions: {
//     create: function() {
//     var my_model = this.controller.get('model');
//     my_model.save();
//     this.transitionTo('solutions', my_model);
//     }
//   }
// });
