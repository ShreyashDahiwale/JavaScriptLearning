class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const Shreyash = new User('Shreyash');
// console.log(Shreyash.createId());

class Teacher extends User{
    
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('myUser', 'i@phone.com')
console.log(iphone.createId());
