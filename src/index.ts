// Basic Types
let id: number = 5;
let company: string = 'Foobar';
let isPublished: boolean = false;
let x: any = 'Hello';
let age: number = 30;

let ids: number[] = [1, 2, 3];
let arr: any = [1, true, 'foo', 'bar'];

// Tuple
let person: [number, string, boolean] = [1, 'foo', true];
// Tuple array
let employee: [number, string][] = [[1, 'foo'], [2, 'bar']];

// Union
let uId: string | number = 100;

// Enum
enum UserState {
    Active = 1,
    Deactivate = 2
}

console.log(UserState.Active)

enum PostState {
    Draft = 'draft',
    Published = 'published',
}

console.log(PostState.Published)

// Object
type User = {
    id: number,
    name: string,
    age: number
};

const user: User = {
    id: 1,
    name: 'John Doe',
    age: 30
}

console.log(user)

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1, 2));

// Void
function log(message: string | number) {
    console.log(message)
}

log('Hi');
log(123);

// Interfaces
interface UserInterface {
    id: number,
    name: string,
    age?: number,
}

const user1: UserInterface = {
    id: 1,
    name: 'John Doe',
}

type Point = number | string;
const p1: Point = 1;

interface MathFunc {
    (x: number, y: number): number
}

const addFunc: MathFunc = (x: number, y: number): number => x + y;
const subFunc: MathFunc = (x: number, y: number): number => x - y;

console.log(addFunc(1, 2))
console.log(subFunc(1, 2))

// Classes
interface PersonInterface {
    id: number,
    name: string,
    eat(): string
}

class Person implements PersonInterface {
    public id: number;
    name: string;

    constructor(id: number, name: string) {
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
    className: string;

    constructor(id: number, name: string, className: string) {
        super(id, name);
        this.className = className
    }
}

const st = new Student(2, 'TrungX', 'FRT');
console.log(st, st.eat());

// Generics
function getArray<T>(items: T[]): T[] {
    // @ts-ignore
    return [].concat(items);
}

let numArr = getArray<number>([1, 2, 3]);
let strArr = getArray<string>(['1', '2', '3']);
console.log(numArr);
