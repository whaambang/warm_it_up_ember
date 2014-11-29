import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  uid: DS.attr('string'),
  posse_id: DS.attr('string'),
});
