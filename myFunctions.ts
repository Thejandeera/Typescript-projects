function addTwo(num : number){
    
    return num + 2
}

function getUpper(val : string){
    return val.toUpperCase()
}

function signupUser(name : string , email : string , ispaid : boolean){

}

function loginUser(name:string , email : string , yesorno : boolean = false) :void {}

let number2 : number = addTwo(5)
let name2 : string = getUpper("thejan")
signupUser("Thejan","thejan1010@gmail.com",true)


function getvalue(myval:number) {
    if (myval>5){
        return true
    }
    return "200 ok"
}

const getHello = (S:string):string => {
    return ""
}

const heroes = ["thor", "superman","ironman"]

heroes.map(hero => {
    return `hero is ${hero}`
})


function consoleError(errmsg:string):void{
    console.log(errmsg)
}

handleError("Thejandeera")

//if we used nevwe , and if we passed a value for that function , it will show an error msg on the ui
function handleError(errmsg:string):never{
    throw new Error(errmsg);
}

export{}