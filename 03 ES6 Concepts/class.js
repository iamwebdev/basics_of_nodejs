class User {
    constructor() {
        this.name = 'Amrit';
        this.state = 'Punjab';
    }

    getName() {
        return this.name;
    }

    getState() {
        return this.state;
    }
}
var objUser = new User();
console.log(objUser.getName());
console.log(objUser.getState());
