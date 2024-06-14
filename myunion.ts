let score:number | string  = 33

score = 44
score = "55"

type user = {
    name : string;
    id : number
}

type admin = {
    username : string;
    id : number
}

let thejan : user| admin ={
    name : "thejan",
    id: 200228400890
}

thejan = { username : "sandeepana", id : 2002}

// function getDbId (id:number | string){
//     console.log(`Db id is : ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId (id:number | string){
    // id.toLowerCase()
    if(typeof id == "string"){
        id.toLowerCase()
    }   
}

//array

const data : (number | string) [] = [1,2,3,"4"]
const data1 : number[] | string [] = [10,20,30]

let pi : 3.14 = 3.14

let seatAllotment : "aisle" | "middle" | "window" = "window";
// seatAllotment = "anything else"