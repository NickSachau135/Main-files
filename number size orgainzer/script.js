let input = "";
let num1 = 0;
    num2 = 0;
    num3 = 0;
    num4 = 0;
    num5 = 0;
    num6 = 0;
    num7 = 0;
    num8 = 0;
    num9 = 0;
    num10 = 0;
    num11 = 0;

num1 = Math.ceil(Math.random() * 10);
num2 = Math.ceil(Math.random() * 10);

while(true){
    if(num1 == num2){
        num2 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num2 == num3 || num3 == num1){
        num3 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num3 == num4 || num4 == num2 || num4 == num1){
        num4 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num4 == num5 || num5 == num3 || num5 == num2 || num5 == num1){
        num5 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num5 == num6 || num6 == num4 || num6 == num3 || num6 == num2 || num6 == num1){
        num6 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num6 == num7 || num7 == num5 || num7 == num4 || num7 == num3 || num7 == num2 || num7 == num1){
        num7 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num7 == num8 || num8 == num6 || num8 == num5 || num8 == num4 || num8 == num3 || num8 == num2 || num8 == num1){
        num8 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num8 == num9  || num9 == num7 || num9 == num6 || num9 == num5 || num9 == num4 || num9 == num3 || num9 == num2 || num9 == num1){
        num9 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

while(true){
    if(num9 == num10 || num10 == num9 || num10 == num8 || num10 == num7 || num10 == num6 || num10 == num5 || num10 == num4 || num10 == num3 || num10 == num2 || num10 == num1 ){
        num10 = Math.ceil(Math.random() * 10);
    }else {
        break;
    }
}

let htmlOut = `${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}, ${num7}, ${num8}, ${num9}, ${num10}.`