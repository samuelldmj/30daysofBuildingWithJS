//html classes

// const secondsHand = document.querySelector('.second-hand');
// const minutesHand = document.querySelector('.min-hand');
// const hoursHand = document.querySelector('hour-hand');


// function setDate(){
// const date = new Date();

// //seconds
// const seconds = date.getSeconds();
// const secondsDegree = ((seconds / 60) * 360) + 90;
// secondsHand.style.transform =  `rotate(${secondsDegree}deg)`;

// //minutes
// const minutes = date.getMinutes();
// const minutesDegree = ((minutes / 60) * 360) + 90;
// minutesHand.style.transform =  `rotate(${minutesDegree}deg)`;

// //hours
// const hours = date.getHours();
// const hoursDegree = ((hours / 12) * 360) + 90;
// hoursHand.style.transform =  `rotate(${hoursDegree}deg)`;


// }

// setInterval(setDate, 1000);



const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Calculate degrees for each hand
  const secondsDegrees = (now.getSeconds() / 60) * 360 + 90; // Add 90 for initial offset
  const minutesDegrees = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6 + 90; // Account for minute hand movement due to seconds
  const hoursDegrees = (now.getHours() % 12 / 12) * 360 + (now.getMinutes() / 60) * 30 + 90; // Calculate 12-hour format and account for minute hand

  // Apply transformations with appropriate units
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // Update clock every second