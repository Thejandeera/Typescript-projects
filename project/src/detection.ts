function detectType(val: number | string ){
    if(typeof val == "string"){
        return val.toLocaleLowerCase()
    }
    return val +3
}

function provideId(id:string | null){
    if(!id){
        console.log("please provide id")
        return
    }
    id.toLocaleLowerCase()
}

function printAll(strs: string | string[] | null) {
    if(strs){
        if (typeof strs === "object") {
            for (const s of strs) {
              console.log(s);
            }
          } else if (typeof strs === "string") {
            console.log(strs);
          }
    }
  }

interface user {
name : string,
email:string
 }
 
interface admin{
    name:string,
    email : string
    isAdmin : boolean
}

function isAnAdmin(account:user | admin){
    if ("isAdmin" in account){
        return account.isAdmin
    }
}

function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

type fish = {swim :()=> void};
type bird = {fly :()=> void};

function isFish(pet : fish | bird ){
    (pet as fish).swim !== undefined
}

// function getFood(pet: fish | bird) {
//     if (isFish (pet)) {
//         pet
//         console.log("Fish food");
//     } else {
//         console.log("Bird food");
//     }
// }