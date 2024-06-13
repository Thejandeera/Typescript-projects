"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signupUser(name, email, ispaid) {
}
function loginUser(name, email, yesorno) {
    if (yesorno === void 0) { yesorno = false; }
}
var number2 = addTwo(5);
var name2 = getUpper("thejan");
signupUser("Thejan", "thejan1010@gmail.com", true);
function getvalue(myval) {
    if (myval > 5) {
        return true;
    }
    return "200 ok";
}
var getHello = function (S) {
    return "";
};
var heroes = ["thor", "superman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
handleError("Thejandeera");
//if we used nevwe , and if we passed a value for that function , it will show an error msg on the ui
function handleError(errmsg) {
    throw new Error(errmsg);
}
