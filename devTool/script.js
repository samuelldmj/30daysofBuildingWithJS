
console.log('hello');
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];


let p = document.querySelector('p');

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

// Interpolated

// Styled
// console.log("%c Testing this on the console", 'font-size:50px; background-color:tomato');

// warning!
// console.warn('you are passing your boundary');

// Error :|
// console.error('This is an error')

// Info
// console.info('Take note of this line')

// Testing
//this will only display when the condition is wrong.
// console.assert(1 > 2, 'That is wrong');
// console.assert(1 < 2, 'That is true');

// // clearing
// console.clear() //clear console.

// Viewing DOM Elements
// console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})
// counting

// timing
//checks amount of time it took for a request or code to run










