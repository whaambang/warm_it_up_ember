import Ember from 'ember';

export default Ember.Component.extend({
  solution: 'helloworld',
  actions: {
    submit: function() {
      this.sendAction('submit', function(){
        //  create solution record & save to Rails
      });
    },

    run: function(solution) {
      //  get the code from the div
      var answer;
      //  send request to Rails/Eval.in via AJAX
      $.post('http://0.0.0.0:3000/api/v1/coderunner', {code: 'puts "Hello Wold"'})
        .done(function(data, solution){
          answer = data;
          debugger;
          if(answer === solution){
            //success notification
            //activate submit button
          }
          else{
            //failure notification
          }
        })
        .fail(function(){
          alert("error");
        });
    }
  }
});
