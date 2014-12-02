import DS from 'ember-data';

export default DS.Model.extend({
  posse_id: DS.attr('string'),
  problem_id: DS.attr('string'),
  content: DS.attr('string'),
  points_earned: DS.attr('string'),
  created_at: DS.attr('string'),
  posse: DS.attr('string'),
  problem: DS.belongsTo('problem')
});
