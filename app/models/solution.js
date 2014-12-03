import DS from 'ember-data';

export default DS.Model.extend({
  posse_id: DS.attr('string'),
  problem_id: DS.attr('string'),
  content: DS.attr('string'),
  points_earned: DS.attr('string'),
  created_at: DS.attr('string'),
  votes: DS.hasMany('vote'),
  posse: DS.attr('string'),
  problem: DS.belongsTo('problem'),
  posse_image: DS.attr('string'),

  upvoteCount: function() {
    return this.get('votes.length')
  }.property('votes.length')
});
