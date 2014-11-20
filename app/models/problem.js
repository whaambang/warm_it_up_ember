import Ember from 'ember';

export default DS.Model.extend({
  content: DS.attr('string'),
  answer: DS.attr('string')
});
