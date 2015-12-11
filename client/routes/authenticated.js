const authenticatedRedirect = function() {
    if ( !Meteor.loggingIn() && !Meteor.userId() ) {
        FlowRouter.go( 'login' );
    }
};

const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated',
    triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/users', {
    name: 'users',
    action: function() {
        BlazeLayout.render( 'layout', { yield: 'users' } );
    }
});

authenticatedRoutes.route( '/invites', {
    name: 'invites',
    action: function() {
        BlazeLayout.render( 'layout', { yield: 'invites' } );
    }
});
