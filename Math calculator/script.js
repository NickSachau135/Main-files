
var li = document.getElementById('number').innerHTML;
li.innerHTML = `<li>
<label for="num">
    Enter A Number:
    <input id="num" name="number" type="text">
</label>
</li>
<li>
    <button onclick="newNumber()">Another Number?</button>
</li>`

function newNumber() {
    
    li.innerHTML += `<li> <label for="num"> Enter A Number: <input id="num" name="number" type="text"> </label> </li>`
}