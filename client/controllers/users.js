AdminController = ApplicationController.extend({
  onBeforeAction: function() {
    var loggedInUser = Meteor.user();

    if (!Meteor.userId() || !Roles.userIsInRole(loggedInUser, 'admin')) {
      this.redirect('login');
    } else {
      this.next();
    }
  }
});

Router.route('/users', {
  name: 'users',
  controller: 'AdminController',
  template: 'users',

  waitOn: function() {
    return Meteor.subscribe('Users.users');
  }
});

Router.route('/invite/:token', {
  name: 'inviteRegistration',
  template: 'inviteRegistration',

  waitOn: function() {
    return [
      Meteor.subscribe('Users.invite', this.params.token)
    ];
  }

});

Router.route('/invites', {
  name: 'invites',
  controller: 'ApplicationController',
  template: 'invites',

  waitOn: function() {
    return Meteor.subscribe('Users.invites');
  }
});
