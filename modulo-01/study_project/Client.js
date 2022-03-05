class Client{
    constructor(name, email, phone){
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get name(){
        return this._name;
    }
}