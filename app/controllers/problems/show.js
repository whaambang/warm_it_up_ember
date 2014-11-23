import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createSolution: function(answer) {
      var solution = this.store.createRecord('solution', {
        content: answer,
        posse_id: 1,
        problem_id: 1,
        points_earned: 15
      });
      solution.save();
      this.transitionTo('solutions');
    }
  }
});
