import DS from 'ember-data';

export default DS.Model.extend({
  solution: DS.belongsTo('solution')
});
