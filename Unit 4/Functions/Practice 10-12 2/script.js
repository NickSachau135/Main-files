function power() {
    number = Math.ceil(Math.random() * 10);
    pow = Math.pow(number, 2);
    console.log(`${number} raised to the power of 2 is ${pow}`);
}

function square() {
    number = Math.ceil(Math.random() * 10);
    sqrt = Math.sqrt(number);
    if(Number.isInteger(Math.sqrt(number)) == false) {
        do {
            number = Math.ceil(Math.random() * 10);
        } while(Number.isInteger(Math.sqrt(number)) == false)
    }
    console.log(number);
}

function slope() {
    chance = Math.ceil(Math.random() * 10);
    if(chance == 1 || chance == 2) {
        console.log(`Don't Go Snowboarding`);
    }else if(chance == 3 || chance == 4) {
        console.log(`That will be risky`);
    }else if(chance == 5 || chance == 6) {
        console.log(`Go snowboarding`);
    }else if(chance == 7 || chance == 8) {
        console.log(`You could but it wouldn't be as fun`);
    }else if(chance == 9 || chance == 10) {
        console.log(`cannot predict now`);
    }else {
        console.log(`Concentrate and ask me again`);
    }
}