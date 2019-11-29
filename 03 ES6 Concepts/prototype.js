var user = function() {
    this.name = 'Amrit';
    this.state = 'Punjab';
};
// I am going to add member variable and a function in user, means i am extending user same like we do in inheritance in other languages.For that we need to use prototype.

user.prototype = {
    profession: 'Web Dev',
    getName: function() {
        return this.name;
    }
};

var objUser = new user();
console.log(objUser.getName())
