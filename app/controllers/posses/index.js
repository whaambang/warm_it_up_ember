import Ember from 'ember';

export default Ember.ObjectController.extend({
  sortProperties: ['scores'],
  sortAscending: false,
  // highestScore: function(){
  //   var ob = this.get('firstObject');
  //   return ob.get('scores');
  // }.property('highestScore'),
  score: 1000,
  currentSolutions: function(){
    var solutions = this.get('solution');
    return solutions.filter(function(solution){
      var s = solution.get('created_at');
      var solutionDate = new Date(s).getDate();
      var currentDate = new Date().getDate();
      if(solutionDate === currentDate){ return true }
    });
  }.property('currentSolution')
});
