import Ember from 'ember';

export default Ember.Component.extend({
  isEnabled: false,
  liked: false,
  disliked: false,

  actions: {
    show: function(){
      this.toggleProperty('isEnabled');
      if(this.isEnabled){
        $('.show').addClass('clicked');
        $('pre').removeClass( 'hidden' );
      }else{
        $('.show').removeClass('clicked')
        $('pre').addClass( 'hidden' );
      }
    },
    addLike: function(solution){
      // this.toggleProperty('isEnabled');
      this.sendAction('like', solution);
    }
  }
});
