//STEP 1
// let userName = prompt('Please enter your first name');
// if(userName){
//     alert(`The length of your name is ${userName.trim().length}`);
// }else {
//     alert('Error: prompt is empty')
// }

//STEP 2
// let userName = prompt('Please enter your first name');
// let i = prompt('Enter a positive number that less than the length of your name');
// userName = userName.trim();
// if(i < userName && i >= 0) {

//     alert(`"${userName.charAt(i)}" is at index ${i} in "${userName}"`)
// } else {
//     alert('Please enter the valid positive number that less than the length of your name')
// }

//STEP 3
// let firstName = prompt('Please enter your first name');
// let lastName = prompt('Please enter your last name');
// userName = firstName.trim().concat(lastName.trim());
// if(firstName && lastName) {

//     alert(`Your name is: ${userName}`);
// } else {
//     alert('Please enter both your first name and last name');
// }

//STEP 4
// let txt = "The quick brown fox jumps over the lazy dog";
// alert(` The index of the word “fox” is ${txt.indexOf('fox')}`);

//STEP 5
// let txt = "The quick brown fox jumps over the lazy fox";
// alert(`The last index of the word “fox” is ${txt.lastIndexOf('fox')}`);

//STEP 6
// let txt = "The quick brown fox jumps over the lazy dog";
// let userName = prompt('Please enter your name');
// if(userName.trim()){
//     alert(`${txt.replace('the lazy dog', userName.trim())}`);
// } else {
//     alert('Your name is missing');
// }

//STEP 7
// let txt = "The quick brown fox jumps over the lazy dog";
// let word = prompt('Please enter a word');
// if(word.trim()){
//     if(txt.match(word)){
//         alert(`"${txt}" contains the word "${word}" `);
//     }else {
//         alert(`"${txt}" does not contains the word "${word}" `);
//     }
// } else {
//     alert('Error: Please enter a word');
// }

//STEP 8
// let  old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.slice(-8);
// alert(new_string.toUpperCase());

//STEP 9
// let txt = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// alert(txt.trim().toLowerCase());

//STEP 10
// let txt = "the quick brown fox jumps over the lazy dog";
// let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
// alert(newTxt)