let users = [
    {name: `vasya`, age: 31, status: false},
    {name: `petya`, age: 30, status: true},
    {name: `kolya`, age: 29, status: true},
    {name: `olya`, age: 28, status: false},
    {name: `max`, age: 30, status: true},
    {name: `anya`, age: 31, status: false},
    {name: `oleg`, age: 28, status: false},
    {name: `andrey`, age: 29, status: true},
    {name: `masha`, age: 30, status: true},
    {name: `olya`, age: 31, status: false},
    {name: `max`, age: 31, status: true}

];

for (let user of users) {
    console.log(user);
}

for (let j = 0; j < users.length; j++) {
    console.log(j);
}

let nazar = {
    name: `nazar`,
    age: 23
}

for (const nazarKey in nazar) {
    console.log(nazar[nazarKey])
}



let i = 0;
while (i < users.length){
    console.log(users[i]);
    i++;
}



function foo() {
    console.log(arguments)
}

foo(11, 22)