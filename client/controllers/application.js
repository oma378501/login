ApplicationController = RouteController.extend({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',

  onBeforeAction: function() {
    if (!Meteor.userId()) {
      this.render('login');
    }else{
      var user = Meteor.user();
      if (user.profile.disabled) {
        this.render('bulkRegistration');
      } else {
        this.next();
      }
    }
  }
});
