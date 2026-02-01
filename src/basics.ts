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

/* interface DiscountCalc{
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


//index signature
interface ChaiRating {
    [flavor:string]:number
}



const c:ChaiRating = {
    masala : 11,
    terobau: 88
}

console.log(c.terobau)




interface A {a:string}
interface B {b:string}

interface C extends A,B {c:number}


const red:C = {
    a : "three",
    b:"thiri",
    c: 3
} */





//Generics

//<t> is comminly used to refer to generic

/* 
function SomeRandomName<T> (item:T):T {
return item
}



SomeRandomName(11)




function pair<A,B>(a:A, b:B):[A,B]{
    return [a,b]
}


pair("ramey",11)

pair("masala",{
    name:"wagwan",price:69
})


interface box<T>{
    content: T
}



const bt:box<number> = {
    content:11
}


interface APIPromise <T>{
    status:number,
    data: T
}


const response:APIPromise<object> = {
    status:200,
   data: {promise:"ammakasam",number:88}
} */



 /*   
import axios, { AxiosResponse}from "axios"
interface Todo {
    userId:number;
    id:number,
    title:string,
    completed:boolean,
}


const fetchData = async() =>{


    try{
        const response:AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("toDO", response.data)

    }
    catch ( error:any){
        if(axios.isAxiosError(error)){
            console.log("Axios error:", error.message)
        }
    }
}


 */


interface Todo {
    userId:number;
    id:number,
    title:string,
    completed:boolean,
}


const fetchData = async() =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!response.ok){
            throw new Error(`WE SO DONE FAM ${response.status}`)
        }
        const data:Todo = await response.json()

    } catch (error:any) {
        console.log("kand hogaya malik", error)
    }
}