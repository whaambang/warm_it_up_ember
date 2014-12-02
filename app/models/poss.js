import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  scores: DS.attr('number'),
  imageUrl: DS.attr('string')
});
