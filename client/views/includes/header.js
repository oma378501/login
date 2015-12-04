Template.header.helpers({
  canManage: function() {
    var loggedInUser = Meteor.user();

    if (loggedInUser == undefined) {
      return false;
    }

    return !Roles.userIsInRole(loggedInUser, 'student');
  }
});

Template.header.events({
  'click .logout': function () {
    Meteor.logout( function( error ) {
      if ( error ) {
        console.log(error);
      } else {
        console.log('Logged out!')
      }
    });
  }
});