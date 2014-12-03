import DS from 'ember-data';

export default DS.Model.extend({
  posse_id: DS.attr('string'),
  problem_id: DS.attr('string'),
  content: DS.attr('string'),
  points_earned: DS.attr('string'),
  votes: DS.hasMany('vote'),
  posse: DS.attr('string'),
<<<<<<< HEAD
  problem: DS.belongsTo('problem'),

  upvoteCount: function() {
    return this.get('votes.length')
  }.property('votes.length')
=======
  posse_image: DS.attr('string'),
  problem: DS.belongsTo('problem')
>>>>>>> 6409c26e92d34974103dfee9049d393a3cd71166
});
