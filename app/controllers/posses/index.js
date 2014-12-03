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

  todaysProblem: function() {
   var initialDate = new Date(2014, 10, 1);
   var now = Date.now();
   var difference = now - initialDate;
   var millisecondsPerDay = 24 * 60 * 60 * 1000;
   var daysSince = Math.floor(difference / millisecondsPerDay);
   return daysSince;
  }.property('todaysProblem'),

  currentSolutions: function() {
    var todaysProblem = this.get('todaysProblem');
    var solutions = this.get('solution');
    var filtered = solutions.filter(function(solution) {
      var s = parseInt(solution._data.problem.id);
      if(s === todaysProblem){ return true; }
    });
    var sorted = filtered.sortBy('created_at').reverse();
    return sorted;
  }.property('currentSolutions'),
});
