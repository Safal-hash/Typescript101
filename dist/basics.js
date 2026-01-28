"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== "null" &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving chai that is ${item.type} with ${item.sugar}`;
    }
    return `Serving bhayanak chai ${item}`;
}
console.log(serveOrder({ type: "bhayank",
    sugar: 66 }));
//# sourceMappingURL=basics.js.map