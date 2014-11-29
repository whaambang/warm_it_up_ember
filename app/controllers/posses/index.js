import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['scores'],
  sortAscending: false,
  highestScore: function(){
    var ob = this.get('firstObject');
    return ob.get('scores');
  }.property('highestScore')
});
