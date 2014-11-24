import Ember from 'ember';

export default Ember.Component.extend({
  content: function(key, val) {
    if (!this.editor) {
      this.preset = val;
      return val;
    }
    if (arguments.length === 1) {
      return this.editor.getSession().getValue();
    }
    var cursor = this.editor.getCursorPosition();
    this.editor.getSession().setValue(val);
    this.editor.moveCursorToPosition(cursor);
    return val;
  }.property(),

  didInsertElement: function() {
    this.editor = window.ace.edit('editor');
    this.editor.setTheme('ace/theme/github');
    this.editor.getSession().setMode('ace/mode/ruby');

    var self = this;
    this.editor.on('change', function() {
      self.notifyPropertyChange('content');
    });

    if (this.preset) {
      this.set('content', this.preset);
      this.preset = null;
    }
  },

  solution: 'hello',

  actions: {
    submit: function() {
      this.sendAction('submit', function(){
        //  create solution record & save to Rails
      });
    },

    run: function(solution) {
      //  get the code from the div
      var answer;
      var code = this.editor.getValue();
      //  send request to Rails/Eval.in via AJAX
      $.ajax({
        type: 'GET',
        url: 'http://0.0.0.0:3000/api/v1/coderunner',
        data:{code: code},
        dataType: 'jsonp'
        })
        .done(function(data, solution){
          answer = data;
          solution = "906609";
          if(answer === solution){
            alert('success!');
            //activate submit button
          }
          else{
            alert("you're wrong!");
          }
        })
        .fail(function(){
          alert("error");
        });
    }
  }
});
