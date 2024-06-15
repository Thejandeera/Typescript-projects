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

    protected  _courseCount = 1

    
    readonly city : string = ""
    constructor(
        public email:string,
        public name:string,
        private userid? :string,){
    }
    private deleteToken(){
        console.log("token deleted")
    }

    get getappleEmail():string{
        return `apple${this.email}`
    }
    get courseCount (): number{
        return this._courseCount
    }
    set courseCount(couseNum){
        if(couseNum <=1){
            throw new Error ("that course count should be more than one")
        }
        this._courseCount = couseNum
    }
}

class subUser extends User{
    isFamily : boolean = true
    changecourseCount(){
        this._courseCount = 4
    }
}

const thejan = new User("Thejan1010@gmal.com", "thejan")
//thejan.email = "outside of the class"


