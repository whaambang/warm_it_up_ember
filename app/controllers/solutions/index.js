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
  }.property('model.@each'),
  actions: {
    addLike: function(solution) {
      var currentUser = this.get('controllers.application.currentUser')
      var votes = solution.get('votes')

      var user_ids = votes.content.map(function(vote) {
        return vote._data.user_id;
      });
      var alreadyLiked = user_ids.some(function(user_id) {
        return user_id === currentUser.id;
      })

      if (alreadyLiked) {
           alert('you cant')
      } else {
        var vote = this.store.createRecord('vote', {
          solution: solution
        });
        vote.save()
      }
    }
  }
});
