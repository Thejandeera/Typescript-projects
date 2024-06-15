"use strict";
// class User {
//     public email:string
//     private name : string
//     readonly city : string = ""
//     constructor(email:string,name:string){
//         this.email  = email;
//         this.name = name;
//         this.city = "haliela"
//     }
// }
class User {
    constructor(email, name, userid) {
        this.email = email;
        this.name = name;
        this.userid = userid;
        this._courseCount = 1;
        this.city = "";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getappleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(couseNum) {
        if (couseNum <= 1) {
            throw new Error("that course count should be more than one");
        }
        this._courseCount = couseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changecourseCount() {
        this._courseCount = 4;
    }
}
const thejan = new User("Thejan1010@gmal.com", "thejan");
//thejan.email = "outside of the class"
