// let A = 10; 
// let B = 8 

// let count = 0;
// while (A >= B) {
//     A -= B;
//     count++;
// }
// console.log("Joylashtirilgan B kesmalar soni: " + count);
// console.log("Qolgan joy: " + A);


// let number = 16; 
// let power = 0;

// while (number > 1) {
//     number /= 2;
//     power++;
// }
// console.log("2 ning darajasi: " + power);





// let a = 2; 
// let n = 5; 
// let result = 1;

// for (let i = 0; i < n; i++) {
//     result *= a;
// }
// console.log(a + " ning " + n + "-darajasi: " + result);



// let a = 3; 
// let b = 6; 
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i * i;
// }
// console.log(a + " dan " + b + " gacha bo'lgan sonlar kvadratlari yig'indisi: " + sum);



// let min = 1;
// let max = 100;
// let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
// let guess;
// let attempts = 0;
// let maxAttempts = 10;

// alert("Sizda 10 ta imkoningiz bor."); 

// while (attempts < maxAttempts) {
//     guess = parseInt(prompt("Son kiriting (1 dan 100 gacha): "), 10); 
//     attempts++;
    
//     if (guess === secretNumber) {
//         alert("Tabriklayman! To'g'ri topdingiz " + attempts + " urinishda.");
//         alert("Siz yutdingiz! O'yin tugadi.");
//         break;
//     } else if (guess > secretNumber) {
//         alert("Kichikroq son kiriting.");
//     } else {
//         alert("Kattaroq son kiriting.");
//     }

//     alert("Sizda " + (maxAttempts - attempts) + " ta imkon qoldi.");

//     if (attempts === maxAttempts) {
//         alert("Siz yutqazdingiz. 10 ta imkon tugadi. To'g'ri javob: " + secretNumber);
//     }
// }
