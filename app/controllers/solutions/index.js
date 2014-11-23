import Ember from 'ember';

export default Ember.ArrayController.extend({

  content: function(key, val) {
    if (!this.editor) {
      this.preset = val;
      return val;
    }
    if (arguments.length == 1) {
      return this.editor.getSession().getValue();
    }
    var cursor = this.editor.getCursorPosition();
    this.editor.getSession().setValue(val);
    this.editor.moveCursorToPosition(cursor);
    return val;
  }.property(),

  didInsertElement: function() {
    var codeDivs = document.querySelectorAll('#editor');
    for(var i = 0; i < codeDivs.length; i++){
      var codeDiv = codeDivs[i];
      this.editor = window.ace.edit(codeDiv);
      this.editor.setTheme('ace/theme/github');
      this.editor.getSession().setMode('ace/mode/ruby');
      this.editor.setReadOnly(true);

      var self = this;

      if (this.preset) {
        this.set('content', this.preset);
        this.preset = null;
      }
    }
  }
});
