class User {
    email:string
    name : string
    city : string = ""
    constructor(email:string,name:string){
        this.email  = email;
        this.name = name
    }
}

const thejan = new User("Thejan1010@gmal.com", "thejan")
thejan.city = "Haliela"