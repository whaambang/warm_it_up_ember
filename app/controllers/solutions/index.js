import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    addLike: function(solution) {
      $.get("api/v1/solutions/" + solution.id + "/like");
    }
  }
});
