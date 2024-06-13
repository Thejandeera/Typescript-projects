const user = {
    name : "thejan",
    email : "thejan@gmail.com",
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

export{}