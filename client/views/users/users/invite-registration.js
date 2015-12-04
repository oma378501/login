Template.inviteRegistration.onCreated( function() {});

Template.inviteRegistration.helpers({
  invitation: function() {
    var invite = Invitations.findOne();

    if ( invite ) {
      return invite;
    }
  }
});

Template.inviteRegistration.events({
  'submit form': function( event, template ) {
    var route = Router.current(),
      token = route.params.token;

    event.preventDefault();

    var email = template.find( '[name="emailAddress"]' ).value;
    var password = template.find( '[name="password"]' ).value;
    var username = template.find( '[name="username"]' ).value;
    var firstname = template.find( '[name="firstname"]' ).value;
    var lastname = template.find( '[name="lastname"]' ).value;

    var user = {
      email: email,
      password: Accounts._hashPassword( password ),
      token: token,
      username: username,
      firstname: firstname,
      lastname: lastname
    };

    Meteor.call( 'acceptInvite', user, function( error, response ) {
      if ( error ) {
        console.log('error saving invitation');
        console.log(error);
      } else {
        Router.go('/login');
        Meteor.loginWithPassword( user.email, password );
      }
    });
  }
});