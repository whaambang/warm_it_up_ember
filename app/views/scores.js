import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    var date = new Date();
    // date.setHours(8);
    // date.setMinutes(30);
    var clock = $('.countdown').FlipClock(1800, {
      autoStart: false,
      countdown: true,
      clockFace: "MinuteCounter"
    });
    if(date.getHours() === 8 && date.getMinutes() === 30){
      clock.start();
    }
  }
});
