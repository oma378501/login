Template.sendInvitationModal.events({
  'submit form': function ( event, template ) {
    event.preventDefault();

    var email = template.find( "[name='emailAddress']" ).value,
        role  = template.find( "[name='roles'] option:selected" ).value;

    if ( email && role !== "" ) {
      Meteor.call( "sendInvitation", {
        email: email,
        role: role
      }, function( error, response ) {
        if ( error ) {
          Bert.alert( error.reason, "warning" );
        } else {
          $( "#send-invitation-modal" ).modal( 'hide' );
          $( '.modal-backdrop' ).hide();
          Bert.alert( "Invitation sent!", "success" );
        }
      });
    } else {
      Bert.alert( "Please set an email and at least one users type!", "warning" );
    }
  }
});
