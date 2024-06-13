const user = {
    name : "thejan",
    email : "thejan1010@gmail.com",
    isActive : true
}

function createUser({name:string ,ispaid : boolean}){}


let newuser =  ({name : "thejan",ispaid : false , email:"thejan1010@gmail.com"})

function createCourse():{name: string , price : number}{
    return {name : "reactjs", price : 399}
}
createUser(newuser)


//Type Aliases

type user ={
    name : string;
    email : string;
    isActive : boolean
}

type myString = string

function createUser2(user : user):user{
    return {name:"",email: ",",isActive:true}
}

createUser2({name:"",email: ",",isActive:true})


type user2 = {
    readonly _id : string;
    name : string;
    email : string;
    isActive : boolean;
    creditcardDetails?:number
}

let myuser : user2 = {
     _id : "200228400890",
    name : "Sandeepana",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber : string

}
type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate &{
    cvv : number
}





myuser.email = "Sandeepanx@gmail.com"
myuser._id = "2002"

export{}