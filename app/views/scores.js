import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    $('.countdown').FlipClock(1800, {
      autoStart: true,
      countdown: true,
      clockFace: "MinuteCounter"

    });
  }
});
