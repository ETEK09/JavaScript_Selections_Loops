console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i += 2) 
{
    if (i % 1 ==0) {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; 1 < 100; i++) 
{
    let output = "";

    if(i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log('${i} ${output}');
}

// Exercise 3 Section

while (i < 100)
{
    let output = "";

    if(i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log('${i} ${output}');

    i++;
}

// for (let i = 1; 1 < 100; i++) 
// {
//     if (i % 3 == 0 && 1 % 5 == 0) {
//         console.log("FIZZBUZZ");
//     } else { 
//         if (i % 3 == 0) {
//             console.log("FIZZ");
//         } else if (i % 5 == 0) {
//             console.log("BUZZ");
//         } else {
//             console.log(i);
//         }
//     }
// }

// for (let i = 1; 1 < 100; i++) 
// {
//     if (i % 3 == 0 && 1 % 5 == 0) {
//         console.log("FIZZBUZZ");
//     } else { 
//         if (i % 3 == 0) {
//             console.log("FIZZ");
//         } else if (i % 5 == 0) {
//             console.log("BUZZ");
//         } else {
//             console.log(i);
//         }
//     }
// }

// Exercise 4 Section

let numberToFind = Math.round(Math.random() * 500);
let n = math.round(math.random() * (500 - 100) + 100);

for (let i = 1; 1 <= n; i++) {
    if (i == numberToFind) {
        console.log('Found ${numberToFind}!');
        break;
    }

    if(i == n) {
        console.log('Did not find ${numberToFind} with 1-${n}..');
    }
}