FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render( 'default', { yield: 'notFound' } );
    }
};

Accounts.onLogin( function() {
    var currentRoute = FlowRouter.current();
    if ( currentRoute && currentRoute.route.group.name === 'public' ) {
        Modules.both.redirectUser();
    }
});

if ( Meteor.isClient ) {
    Tracker.autorun( function() {
        if ( !Meteor.userId() && FlowRouter.current().route ) {
            FlowRouter.go( 'login' );
        }
    });
}