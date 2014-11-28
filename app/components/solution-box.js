import Ember from 'ember';

export default Ember.Component.extend({
  isEnabled: false,
  liked: false,
  disliked: false,
  sortAscending: true,
  sortProperties: ['points_earned'],

  actions: {
    show: function(){
      this.toggleProperty('isEnabled');
      if(this.isEnabled){
        this.$('.show').addClass('clicked');
        this.$('pre').removeClass( 'hidden' );
      }else{
        this.$('.show').removeClass('clicked');
        this.$('pre').addClass( 'hidden' );
      }
    },
    dislike: function(){
      this.toggleProperty('isEnabled');
      if(this.isEnabled){
        this.$('.dislike').addClass('clicked');
      }else{
        this.$('.dislike').removeClass('clicked');
      }
             },
    like: function(){
      this.toggleProperty('isEnabled');
      if(this.isEnabled){
        this.$('.like').addClass('clicked');
      }else{
        this.$('.like').removeClass('clicked');
      }
          }
  }
});
