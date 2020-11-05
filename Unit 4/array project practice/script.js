// let box1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
// let box2 = [1, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31];
// let box3 = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31];
// let box4 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31];
// let box5 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


// input = 19;
// output = "";

// loop:
// while(true) {
//     for(let i = 0; i < box5.length; i++) {
//         if(input == box5[i]) {
//             output += "1 ";
//             break loop;
//         }
//     }
//     output += "0 "
//     break loop;
// }

// loop:
// while(true) {
//     for(let i = 0; i < box4.length; i++) {
//         if(input == box3[i]) {
//             output += "1 ";
//             break loop;
//         }
//     }
//     output += "0 "
//     break loop;
// }

// loop:
// while(true) {
//     for(let i = 0; i < box3.length; i++) {
//         if(input == box3[i]) {
//             output += "1 ";
//             break loop;
//         }
//     }
//     output += "0 "
//     break loop;
// }

// loop:
// while(true) {
//     for(let i = 0; i < box2.length; i++) {
//         if(input == box2[i]) {
//             output += "1 ";
//             break loop;
//         }
//     }
//     output += "0 "
//     break loop;
// }

// loop:
// while(true) {
//     for(let i = 0; i < box1.length; i++) {
//         if(input == box1[i]) {
//             output += "1 ";
//             break loop;
//         }
//     }
//     output += "0 "
//     break loop;
// }

// console.log(output);



let music = ["jazz", "blues"];

music.push("R&B");

if(music.length % 2 == 1) {
    music[Math.floor(music.length / 2)] = "classic"
}

music.unshift("rap", "acapella")
console.log(music);