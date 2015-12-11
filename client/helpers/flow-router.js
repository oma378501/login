var pathFor = function( path, view ) {
  if ( path.hash ) {
    view = path;
    path = view.hash.route;
    delete view.hash.route;
  }

  var query = view.hash.query ? FlowRouter._qs.parse( view.hash.query ) : {};
  return FlowRouter.path( path, view.hash, query );
};

Template.registerHelper( 'pathFor', pathFor );

