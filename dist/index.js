"use strict";
// Basic Types
let id = 5;
let company = 'Foobar';
let isPublished = false;
let x = 'Hello';
let age = 30;
let ids = [1, 2, 3];
let arr = [1, true, 'foo', 'bar'];
// Tuple
let person = [1, 'foo', true];
// Tuple array
let employee = [[1, 'foo'], [2, 'bar']];
// Union
let uId = 100;
// Enum
var UserState;
(function (UserState) {
    UserState[UserState["Active"] = 1] = "Active";
    UserState[UserState["Deactivate"] = 2] = "Deactivate";
})(UserState || (UserState = {}));
console.log(UserState.Active);
var PostState;
(function (PostState) {
    PostState["Draft"] = "draft";
    PostState["Published"] = "published";
})(PostState || (PostState = {}));
console.log(PostState.Published);
const user = {
    id: 1,
    name: 'John Doe',
    age: 30
};
console.log(user);
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
// Void
function log(message) {
    console.log(message);
}
log('Hi');
log(123);
const user1 = {
    id: 1,
    name: 'John Doe',
};
const p1 = 1;
const addFunc = (x, y) => x + y;
const subFunc = (x, y) => x - y;
console.log(addFunc(1, 2));
console.log(subFunc(1, 2));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    eat() {
        return `${this.name} was eating`;
    }
}
const brad = new Person(1, 'John');
console.log(brad.id, brad.eat());
class Student extends Person {
    constructor(id, name, className) {
        super(id, name);
        this.className = className;
    }
}
const st = new Student(2, 'TrungX', 'FRT');
console.log(st, st.eat());
// Generics
function getArray(items) {
    // @ts-ignore
    return [].concat(items);
}
let numArr = getArray([1, 2, 3]);
let strArr = getArray(['1', '2', '3']);
console.log(numArr);
