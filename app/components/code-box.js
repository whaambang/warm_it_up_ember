import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('submit', {
        //  create solution record & save to Rails
      });
    },

    run: function() {
      this.sendAction('run', {
        //  get the code from the div
        //  send request to Rails/Eval.in via AJAX
        //
        //  get response from ^^
        //  compare result with problem.solution
        //  decide success or failure
        //
        //  if success
        //    notify success
        //    activate submit button
        //
        //  else
        //    notify failure
      });
    }
  }
});
