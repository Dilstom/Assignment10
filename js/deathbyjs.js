//STEP 1
// const sortedStr = (str) => str.split("").sort().join("");

// console.log(sortedStr( 'webmaster' ))

//STEP 2
// function firstLetterToUpperCase(str){
//     let newStr =  str.split(" ");
//     let newArr = [];
//     for(let word of newStr){
//      newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
//     }
//     return(newArr.join(" "));
// }

// console.log(firstLetterToUpperCase('the quick brown fox'));

//STEP 3
// function countVowels(str) {
//     let vowels = str.toLowerCase().match(/[aouei]/g);
//     return (vowels.length);
// }

// console.log(countVowels('The quick brown fox'));

//STEP 4
// function idGenerator(n) {
//   let list = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   // let list = /\w/;
//   let id = "";
//   for (let i = 0; i < n; i++) {
//     id += list[Math.floor(Math.random() * list.length)];
//   }
//   return id;
// }
// console.log(idGenerator(8));
// console.log(idGenerator(6));

//STEP 5
// function Longest_Country_Name(arr) {
//     let max='';

//     for(let country of arr) {
//         country.length > max.length ? max = country : null;
//     }
//     return max;
// }

// console.log( Longest_Country_Name(["Australia", "Germany", "United States of America"]));