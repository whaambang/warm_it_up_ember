import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({ poss: this.store.find('poss'),
            solution: this.store.find('solution')
          });
  }
});
