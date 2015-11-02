var route = function( options ) {
  return options && options.redirect ? _sendUserToDefault( options.redirect ) : _sendUserToDefault();
};

var _sendUserToDefault = function( redirect ) {
  var roles = _getCurrentUserRoles();

  if ( roles[0] === 'admin' )    {
    _redirectUser( 'users', redirect );
  }

  if ( roles[0] === 'manager' )  {
    _redirectUser( 'managers', redirect );
  }

  if ( roles[0] === 'employee' ) {
    _redirectUser( 'employees', redirect );
  }
};

var _getCurrentUserRoles = function() {
  return Roles.getRolesForUser( Meteor.userId() );
};

var _redirectUser = function( path, redirect ) {
  if ( redirect ) {
    redirect( path );
  } else {
    FlowRouter.go( FlowRouter.path( path ) );
  }
};

Modules.both.redirectUser = route;
