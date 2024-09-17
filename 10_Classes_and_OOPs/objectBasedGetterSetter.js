const User = {
    _email: 'Shreyash@jio.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email= value;
    }
}

const Tea = Object.create(User)