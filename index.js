const languages=[
    'C#','Javascript','Ruby','PHP','Python'
]
console.log(languages);

languages.splice(5,0,'Kotlin');
console.log(languages);

languages.splice(3,0,'Java');
console.log(languages);

languages.splice(0,1);
console.log(languages);

languages.splice(0,0,'Scala','Swift');
console.log(languages);

languages.splice(5,1,'Go','Rust');
console.log(languages);


let fruit = ['apple', 'mango','banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit);



const numbs = [34, 76, 98, 46, 09, 32]

console.log(Math.max(...numbs));

const number = [76, 78, 23, 54];

const result = number.map(function(eachNum,index){return eachNum*index;});

console.log(result);

