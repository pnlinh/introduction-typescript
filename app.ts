function add(num1: number, num2: number) {
    console.log(typeof num1)

    return num1 + num2;
}

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);

console.log(result);

const person: {
    name: string;
    age: number;
} = {
    name: 'John Doe',
    age: 30
}

console.log(person);
