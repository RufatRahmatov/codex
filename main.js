{ <-
function  isPaLindrome(num)
//CONVERTING TO STRING NOT ALLOWED 

var 

result = isPaLindrome(12321)}


let originalNum = 12321;
let reversedNum = 0;

while (originalnum > 0) {
    let remainder = num % 10;
    reversedNum = (reversedNum * 10) + remainder;
    num = Math.floor(num / 10);
}

return originalNum === reversedNum;{
}
 
while(12321 > 0){
    let remainder = 12321 % 10;
    reversedNum = (0*10) + 1232;
    num = Math.floor(1232/10)
    originalNum= 1232
    reversedNum= 2
}
{
    while(1232>0)
    let remainder = 1232% 10;
reversedNum= (2*10) + 123;
num = Math.floor(143/10)
originalNum = 14
reversedNum = 3
}
{
while (14>0)
let remainder =14 % 10
reversedNum = (4*10 + 1);
num = Math.floor(41 /10)
originalNum = 4
reversedNum = 1
}
{
while(4>1)
let remainder = 4 % 10
reversedNum (4*10 + 0)
num = Math.floor(40/10)
originalNum = 4
reversedNum = 0
}
{
while(4>1)
let remainder = 4 % 10
reversedNum (0 * 10 + 4)
num = Math.floor(4/10 )
originalNum =0
reversedNum = 4
}
while(0>0)
// sıfır sıfırdan böyük olmadığı üçün döngü tamamlanır.
//Əgər say neqativ çıxsa polidrom sayılmayacaq.
// Sayı əksine çevirdikdə əgər əvvəlkinə bərabərdisə demək o polidromdur.
{

return originalNum === reversedNum;
}

let result = isPalindrome(12321);
console.log(result); // true


// dog -> god
//palm - > lamp
//hello - > world





var word1 = "dog";
var word2 = "god";

// iki sozun uzunlugunu yoxlayiriq
if (word1.length !== word2.length) {
    console.log("iki soz anagram olmaz, çünkü ferqli uzunluqdadi.");
} else {
    var isAnagram = true;
    // Her herfi yoxlayiriq
    for (var i = 0; i < word1.length && isAnagram; i++) {
        var test = false;
        // her herfi diger sozun icinde yoxlayiriq
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                test = true;
                break;
            }
        }
        if (!test) {
            isAnagram = false;
        }
    }
    if (isAnagram) {
        console.log("anagramdır.");
    } else {
        console.log("anagram deyil.");
    }
}


































































































































































fun




        
      

  