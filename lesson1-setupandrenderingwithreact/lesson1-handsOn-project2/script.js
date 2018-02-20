/* Convert the following code to use the ES2015 features that were discussed: arrow functions, let/const, and interpolation

function hasUsernameAndPassword(user) {
    return user.name.length > 0 && user.password.length > 0;
}

function filterInvalidUsers(users) {
    var validUsers = [];

    for (var user of users) {
        if (hasUsernameAndPassword(user)) {
            validUsers.push(user);
        }
    }

    return validUsers;
}

function userToFormattedString(user) {
    return 'name: ' + user.name + '\nrole: ' + user.role;
}

var users = [
    {
        name: 'Kirk Douglass',
        password: 'iamspartacus',
        role: 'revolutionary'
    },
    {
        name: 'Charlie Chaplain',
        password: '',
        role: 'tramp'
    },
    {
        name: 'Harrison Ford',
        password: 'AnythingButSnakes',
        role: 'archaeologist'
    }
];

var validUsers = filterInvalidUsers(users);

for (var i = 0; i < validUsers.length; i++) {
    console.log(userToFormattedString(validUsers[i]));
}
 */