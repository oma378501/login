const admins = [
  { "email": "admin@admin.com" }
];

var setAdmins = function() {
  // for ( var i = 0; i < admins.length; i++ ) {
  //   var admin   = Meteor.users.findOne( { "emails.address": admins[i].email }, { fields: { "_id": 1 } } );
  //       isAdmin = _isUserAnAdmin( admin._id );
  //
  //   if ( !isAdmin ) {
  //     Roles.setUserRoles( admin._id, 'admin' );
  //   }
  // }
};

var _isUserAnAdmin = function( userId ) {
  return Roles.userIsInRole( userId, 'admin' );
};

TMModules.server.setAdmins = setAdmins;
