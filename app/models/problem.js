import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  answer: DS.attr('string'),
  solutions: DS.hasMany('solution', {async: true})
});
