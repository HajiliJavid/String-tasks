/////String simple task
/*
//////Task 1
let word = "JavaScript"
console.log(word[3]);
*/


/*
//////Task 2
let sentence = "This is a simple sentence.";
let index = sentence.indexOf("is");
console.log(index);
*/

/*
//////Task 3
let sentence = "This is a sample sentence."
console.log(sentence.split(" "))
*/

/*
///////Task 4
let phrase = "Programming is fun!";
console.log(phrase.slice(0,11));
*/

/*
///////Task 5
let phrase = "Programming is fun!";
console.log(phrase.slice(15,18));
*/

////String algorithmical task 

/*
/////Task 1
function reverse(sentence) {
    let charSentence = sentence.split('');
    let reversedSentence = charSentence.reverse();
    let reversedStc = reversedSentence.join('');
    return reversedStc;
}
let originalString = "Hello, World!";
let reversedString = reverse(originalString);
console.log(reversedString);
*/

/*
///Task 2
function capitalizeWords(phrase) {
    let words = phrase.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return words.join(' '); 
}
let sentence = "javascript is fun";
console.log(capitalizeWords(sentence));
*/

/*
//////Task 3
function countVowels(phrase){
    count=0
    let letters = phrase.split('');
    for (let i = 0; i < letters.length; i++) {
        if(letters[i].toUpperCase() =="A" || letters[i].toUpperCase() =="O" || letters[i].toUpperCase() =="U"){
            count++
        }
    }
    return count
}
let text = "JavaScript is awesome!";
console.log(countVowels(text));
*/



//////Task 4
function findLongestWord(phrase){
    let words = phrase.split(' ');
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
let sentence = "This is a sample sentence with long words.";
console.log(findLongestWord(sentence));

