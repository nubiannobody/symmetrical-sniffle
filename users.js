const users = [
    {name: 'Amir', loginCount: 5},
    {name: 'Betty', loginCount: 16},
];
function loginCount(user) {
    return {[user.name]: user.loginCount};
}
[
    loginCount(users[0]),
    loginCount(users[1]),
];

console.log(users);

love! 