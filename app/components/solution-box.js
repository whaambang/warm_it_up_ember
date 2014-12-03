import Ember from 'ember';

export default Ember.Component.extend({
  isEnabled: false,
  sortAscending: true,
  sortProperties: ['points_earned'],
  needs: ['application'],

  wasLiked: function () {
    var currentUser = this.get('currentUser');
    var solution = this.get('solution');
    var votes = solution.get('votes');
    var user_ids = votes.content.map(function(vote) {
      return vote._data.user_id;
    });
    return user_ids.some(function(user_id) {
      return user_id === currentUser.id;
    })
  }.property(),

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
    addLike: function(solution){
      // this.toggleProperty('isEnabled');
      this.sendAction('like', solution);
    },
    removeLike: function(solution) {
      this.sendAction('unlike', solution);
    },
  }
});
