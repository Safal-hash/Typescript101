/* //enums

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}


const size = CupSize.LARGE


//another example of defining enum and passing them in a function


enum ChaiType {
    GINGER = "ginger",
    MASALA = "masala",
}


function makeChai (type: ChaiType){
        console.log(`Making: ${type} chai!!`)
}


makeChai(ChaiType.MASALA) */




/* 
//OOPS

class Chai {
   
    constructor(public flavour:string, public price:number)
    {
    }

    getName ():string{
        return `'I am ${this.flavour}'`
    }

}



const ginger = new Chai("ginger",20)

//OOPS access modifier 

class HiChai{
    public flavour:string = "masala chai";


    private secrectIngredients = "elaichi"


    reveal(){
        return this.secrectIngredients 
    }
}


 */
//Interface

interface DiscountCalc{
    (price:number):number
}



const apply50:DiscountCalc = (p) => p* 0.5






interface TeaMachine{
    start():void;
    stop():void
}


const t:TeaMachine = {
    start() {
        console.log("ramey boiii")
    },
    stop() {
        console.log("gayeb bhoi")
    },
}


t.start()