import Ember from 'ember';

export default Ember.ObjectController.extend({
  sortProperties: ['scores'],
  sortAscending: false,
  // highestScore: function(){
  //   var ob = this.get('firstObject');
  //   return ob.get('scores');
  // }.property('highestScore'),
  score: 1000
});
