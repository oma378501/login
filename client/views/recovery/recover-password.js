Template.recoverPassword.onRendered( function() {
  Modules.client.recoverPassword({
    form: "#recover-password",
    template: Template.instance()
  });
});

Template.recoverPassword.events({
  'submit form': function( event ) {event.preventDefault();}
});
