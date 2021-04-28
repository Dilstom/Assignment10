// "GLOBAL" VARIABLEs
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//STEP 1
// let pattern = /^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
// let date = prompt('Enter the month and year in mm/yyyy format. F/e: 01/2021');
// let month = 0;
// let year = 0;
// if(pattern.test(date)){
//  month = date.slice(0,2);
//  console.log('month: ', month)
// year = date.slice(-4);
//  numberOfDays = new Date(year, month, 0).getDate();
//     console.log(`${months[parseInt(month)-1]} has ${numberOfDays} days`);

// }else{
//     console.log('Error: invalid date format')
// }

//STEP 2
// let pattern = /^(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/;
// let date = prompt("Enter the date in mm/dd/yyyy format. F/e: 01/21/2021");
// let month = 0;
// if (pattern.test(date)) {
//   month = date.slice(0, 2);
//   console.log(`${date} is ${months[parseInt(month) - 1]}`);
// } else {
//   console.log("Error: invalid date format");
// }

//STEP 3
// let pattern = /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/;
// // let pattern = /^(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/;
// let date = prompt("Enter the date in yyyy-mm-dd format. F/e: 2021-01-28");

// if (pattern.test(date)) {
//   // GET DATE IN LOCAL TIME (NOT IN UTC)
//   date += "T00:00";
//   let day = new Date(date).getDay();
//   if (day === 6 || day === 0) {
//     console.log(`The day is ${days[day]} - it is a weekend!`);
//   } else {
//     console.log(` The day is ${days[day]} - it is a weekday`);
//   }
// } else {
//   console.log("Error: invalid date format");
// }

//STEP 4

// let day = new Date();
// let yesterday = new Date(day).getDay() -1 ;
// console.log(`Yesterday was a ${days[yesterday]} `);

//STEP 5

// let day = new Date().getDay();
// console.log(`Today is "${days[day].slice(0,1)}" `);
  