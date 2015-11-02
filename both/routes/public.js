const publicRedirect = function( context, redirect )  {
    if ( Meteor.userId() ) {
        Modules.both.redirectUser( { redirect: redirect } );
    }
};

const publicRoutes = FlowRouter.group({
    name: 'public',
    triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/invite/:token', {
    name: 'invite',
    action: function() {
        BlazeLayout.render( 'default', { yield: 'invite' } );
    }
});

publicRoutes.route( '/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render( 'default', { yield: 'login' } );
    }
});

publicRoutes.route( '/recover-password', {
    name: 'recover-password',
    action: function() {
        BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
    }
});

publicRoutes.route( '/reset-password/:token', {
    name: 'reset-password',
    action: function() {
        BlazeLayout.render( 'default', { yield: 'resetPassword' } );
    }
});
