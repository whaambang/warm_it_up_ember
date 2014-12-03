import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],

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
    var solutions = this.get('model');
    var filtered =  solutions.filter(function(solution) {
      var s = parseInt(solution._data.problem.id);
      if(s === todaysProblem){ return true; }
    });
    var sortedByPoints = filtered.sort(function(a,b){return a.points_earned-b.points_earned});
    return sortedByPoints;
  }.property('currentSolutions'),

  actions: {
    addLike: function(solution) {
      $.get("api/v1/solutions/" + solution.id + "/like");
    },
    removeLike: function(solution) {
      $.get("api/v1/solutions/" + solution.id + "/remove_like");
    }
  }
});
