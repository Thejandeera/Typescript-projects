interface Users {
    readonly dbid:number
    email : string,
    userid : number,
    googleid?: string,
    startTrial : () =>string,
    startTrial2():string
    getCoupon(couponname:string, value : number) :number
}

interface Users{
    githubToken : number
    
}

interface Admin extends Users {
    role : "admin" | "ta" | "learner"
}

const thejand : Users | Admin = {dbid:22, email:"thejan@.com", userid : 2211,
    githubToken :223 ,
    role : "admin" ,
    startTrial : () => {
        return "trial started"
    },
    startTrial2 : () => {
        return "trial started"
    },
    getCoupon:(name: "thejan", off : 10 ) =>{
        return 10
    }}

thejand.email = "thejan1010"
