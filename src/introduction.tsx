
let a = {
    name: 'React',
    number: 400,
    address: {
        city: 'Unknown'
    }
};
a = {
    name: 'Ts',
    number: 200,
    address: {
        city: 'Css'
    }
}
// console.log('city ' + a.address.city)

let users = [
    {
        name: 'React',
        number: 200,
        address: {
            city: 'Css',
            country: 'Usa'
        }
    },
    {
        name: 'Ts',
        number: 200,
        address: {
            city: 'Node.js',
            country: 'GB'
        }
    }
]

let b; //as any
b = 10;
b = 'b';

let c: string | boolean | number;
c = 'graph'
let d = true;
//d = 'str'

let arr: string[]; //Array<string | number>boolean number
arr = [];

arr.push('some text')
arr.push('info ')


console.log(arr)
export {}