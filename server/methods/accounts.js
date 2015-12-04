Meteor.methods({
    parseUpload: function (data) {
        check(data, Array);
        for (var i = 0; i < data.length; i++) {
            var user = data[i],
                exists = Meteor.users.findOne({sisId: user.sisId});

            if (!exists) {
                var nombres = data[i].Nombres.trim();
                var apellidos = data[i].Apellidos.trim();
                var username = (nombres + apellidos).toLowerCase();
                var userId = Accounts.createUser({
                    email: username + Meteor.settings.private.subDomain,
                    username: username,
                    password: 'password',
                    profile: {
                        name: {
                            first: data[i].Nombres,
                            last: data[i].Apellidos
                        },
                        disabled: true,
                        sisId: data[i].sisId,
                    }

                });
                Roles.setUserRoles(userId, 'student');

            } else {
                console.warn('Reject. This item already exists.');
            }
        }
    },
    finishRegistration: function(user) {
        TMModules.server.updateUserInfoFile(user);
    }
});