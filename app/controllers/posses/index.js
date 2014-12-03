import Ember from 'ember';

export default Ember.ObjectController.extend({
  sortProperties: ['scores'],
  sortAscending: true,
  highestScore: function(){
    var posse = this.get('sortedPosses');
    var ob = posse.get('firstObject');
    return ob.get('scores');
  }.property('highestScores', 'sortedPosses'),
  sortedPosses: function(){
    var posses = this.get('poss');
    var sorted = posses.sortBy('scores').reverse();
    return sorted;
  }.property('sortedPosse'),
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
