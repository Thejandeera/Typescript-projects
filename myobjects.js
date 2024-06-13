"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "thejan",
    email: "thejan1010@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
var newuser = ({ name: "thejan", ispaid: false, email: "thejan1010@gmail.com" });
function createCourse() {
    return { name: "reactjs", price: 399 };
}
createUser(newuser);
function createUser2(user) {
    return { name: "", email: ",", isActive: true };
}
createUser2({ name: "", email: ",", isActive: true });
var myuser = {
    _id: "200228400890",
    name: "Sandeepana",
    email: "h@h.com",
    isActive: false
};
myuser.email = "Sandeepanx@gmail.com";
