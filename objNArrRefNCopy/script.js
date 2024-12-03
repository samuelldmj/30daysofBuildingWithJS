// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
let team = players
// console.log(players, team);

//reference
team[3] = 'Dan';
// console.log(players, team);

//copy
const sliceTeam = team.slice(1,3);
// console.log(sliceTeam, team);
const conCatTeam = [].concat(team);
// console.log(conCatTeam, team);

const sprTeam = [...team];
// console.log(sprTeam, team);

// with Objects
const person = {
    name: 'Sam Bol',
    age: 80
};

//reference
const cap = person;
// cap['number'] = 99
// console.log(cap, person);

//copy
const copyObj = Object.assign({}, cap, {number:99} );
console.log(copyObj, cap);

// Things to note - this is only 1 level deep - both for Arrays and Objects.
//lodash has a cloneDeep method, but you should think twice before using it.