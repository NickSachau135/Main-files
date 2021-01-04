function lorem(input) {
    input = input.split(" ");
    let output = "";
    for(let i = 0; i < input.length; i++) {
        if(input[i].length > 4) {
            output += input[i] + " ";
        }
    }
    return (output);
}

console.log(lorem("Cupidatat est officia irure ipsum ea minim excepteur deserunt proident cillum eiusmod."));
console.log(lorem("Id consequat dolore est magna elit enim officia duis ipsum."));
console.log(lorem("Non eu veniam dolore sit fugiat."));