import Ember from 'ember';

export default Ember.Component.extend({
  solution: this.get('problem.solution'),
  actions: {
    submit: function() {
      this.sendAction('submit', {
        //  create solution record & save to Rails
      });
    },

    run: function(solution) {
      this.sendAction('run', function(solution){

        //  get the code from the div
            var answer;
        //  send request to Rails/Eval.in via AJAX
            $.post('/coderunner', {code: 'puts "Hello Wold"'})
              .done(function(data, solution){
                answer = data;
                if(answer === solution){
                  //success notification
                  //activate submit button
                }
                else{
                  //failure notification
                }
              });
      });
    }
  }
});
