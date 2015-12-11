const publicRedirect = function()  {
  if ( Meteor.userId() ) {
    FlowRouter.go( 'index' );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render( 'layout', { yield: 'login' } );
  }
});

publicRoutes.route( '/invite/:token', {
  name: 'inviteRegistration',
  action: function() {
    BlazeLayout.render( 'layout', { yield: 'inviteRegistration' } );
  }
});