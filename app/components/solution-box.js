import Ember from 'ember';

export default Ember.Component.extend({
  isEnabled: false,
  liked: false,
  disliked: false,

  actions: {
    show: function(){
      this.toggleProperty('isEnabled');
      if(this.isEnabled){
        $('.show').addClass('clicked')
        $('pre').removeClass( 'hidden' );
      }else{
        $('.show').removeClass('clicked')
        $('pre').addClass( 'hidden' );
      }
    },
    dislike: function(){
      this.toggleProperty('isEnabled');
      if(this.isEnabled){
        $('.dislike').addClass('clicked')
      }else{
        $('.dislike').removeClass('clicked')
      }
             },
    like: function(){
      this.toggleProperty('isEnabled');
      if(this.isEnabled){
        $('.like').addClass('clicked')
      }else{
        $('.like').removeClass('clicked')
      }
          }
  }
});
