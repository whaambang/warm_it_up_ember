import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'posses/index',

  styledPointPercentage: function(){
    return 'width:' + this.get('pointPercentage') + '%';
  }.property('styledPointPercentage'),

  pointPercentage: function(){
    var mostPoints = this.get('controllers.posses/index').get('score');
    var possePoints = parseInt(this.get('scores'));
    var percentage = (possePoints/mostPoints) * 100;
    return percentage;
  }.property('pointPercentage'),
});
