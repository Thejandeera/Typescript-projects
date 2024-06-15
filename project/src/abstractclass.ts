abstract class takePhoto {
   constructor(
    public  cameraMode : string,
    public filter : string
   ){}

    abstract getSepia():void
    getReelTime():number{
        return 8
    }
}


class instergram extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter : string,
        public burst : number
    ){
        super(cameraMode,filter)
    }

    getSepia():void{
        console.log("Sephia")
    }
}

 const thejann = new instergram("test","test",3)
 thejann.getReelTime()