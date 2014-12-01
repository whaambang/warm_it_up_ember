import Ember from 'ember';

export default Ember.Component.extend({
  problemNumber: function() {
    var initialDate = new Date(2014, 10, 1); // Attention: month is zero-based
    var now = Date.now();
    var difference = now - initialDate;
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var daysSince = Math.floor(difference / millisecondsPerDay);
    return daysSince;
  }.property()
})
