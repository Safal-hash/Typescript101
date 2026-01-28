type ChaiOrder = {
    type: string,
    sugar: number
}  


function isChaiOrder(obj:any):obj is ChaiOrder{
     return (
        typeof obj === "object" &&
        obj !== "null" &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
     )
}



function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving chai that is ${item.type} with ${item.sugar}`
         
    }
    return `Serving bhayanak chai ${item}`
}




console.log(serveOrder({type:"bhayank",
    sugar: 66}))