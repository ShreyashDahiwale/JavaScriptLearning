class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `The email is: ${this._email}`;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const Shreyash = new User("S@Shreyash@ai", '12eofeohe3');
console.log(Shreyash.email);
console.log(Shreyash.password);
