// let student = {
//     Name: "Nick Sachau",
//     ID: 10821,
//     HairColor: "Brown",
//     FavoriteSnack: "cereal",
//     WestMecClass: "1:00",
//     Height: '6 \' 2'
// };

// console.log(student);

// delete student.Height;

// console.log(student)


function createStudent (name) {
    return {
        Name: name,
    }
}

setTimeout(function() {
    let profile = createStudent('yes');
    console.log(`${profile}`)
},1000);



function submit() {
    console.log(`${profile}`);
}

// let worker = {
    
// };

// let Name = prompt("What is you name" , "last, first")
// let id = prompt("What is your id");


// worker["Name"] = Name;
// worker["Id"] = id;

// console.log(worker);