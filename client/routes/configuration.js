FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('layout', {yield: 'NotFound'});
    }
};