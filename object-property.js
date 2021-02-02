const students = [
    {id: 21, name: 'omar sunny'},
    {id: 31, name: 'Manna'},
    {id: 35, name: 'Joya Hasan'},
    {id: 45, name: 'Tisha'},
];

// let output = [];
// for(let i=0; i<students.length; i++){
//     const result = students[i];
//     output.push(result.id);
// }
// console.log(output);

const names = students.map( s => s.name);
const ids =students.map(s => s.id);

const bigger = students.filter(s => s.id> 30);

const bigger1 = students.find(s => s.id> 30);
console.log(bigger1);