import DS from 'ember-data';

export default DS.Model.extend({
  posse_id: DS.attr('string'),
  problem_id: DS.attr('string'),
  content: DS.attr('string'),
  points_earned: DS.attr('string'),
  votes: DS.hasMany('vote'),
  posse: DS.attr('string'),
  problem: DS.belongsTo('problem')
});
