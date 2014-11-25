import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    var date = new Date();
    var clock = $('.clock').FlipClock({
      clockFace: 'TwelveHourClock'
    });
  }
});
