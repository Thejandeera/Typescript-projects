"use strict";
function detectType(val) {
    if (typeof val == "string") {
        return val.toLocaleLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAnAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    pet.swim !== undefined;
}
// function getFood(pet: fish | bird) {
//     if (isFish (pet)) {
//         pet
//         console.log("Fish food");
//     } else {
//         console.log("Bird food");
//     }
// }
