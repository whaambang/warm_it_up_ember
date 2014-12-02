import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],

  actions: {
    addLike: function(solution) {
      $.get("api/v1/solutions/" + solution.id + "/like");
    },
    removeLike: function(solution) {
      $.get("api/v1/solutions/" + solution.id + "/remove_like");
    }
  }
});
