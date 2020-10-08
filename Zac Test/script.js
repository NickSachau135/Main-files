// This is where we'll store all of our simplified form data after we collect it
var signupData = {}; // Not only are we declaring this var, we're also letting the browser know that this var is going to hold an object (in TypeScript we would call this giving the var a "type" of Object)
function processSignupForm() {
  // Select the form we want to collect data from
  const signupForm = document.getElementById("signupForm");
  // Loop through each form control within the form
  for (var i = 0; i < signupForm.elements.length; i++) {
    // Make sure that the submit button control isn't added to the object
    if (signupForm.elements[i].type !== "submit") {
      // Run one set of coditions for the checkbox inputs
      // This is so that we can get the value of the check box and also know if the user checked the box
      if (signupForm.elements[i].type === "checkbox") {
        // Collect all the data we care about from each checkbox input
        const checkboxName = signupForm.elements[i].name; // The name given to the checkbox control
        const checkboxValue = signupForm.elements[i].value; // This is the data value written in on the checkbox
        const checkboxStatus = signupForm.elements[i].checked; // A property on the input element which specifies whether the element has been checked or not
        // Add a new property onto the object with the control name of the the checkbox
        // The info saved to this new property consists of another nested object with the checked/notchecked boolean and the actual date that the checkbox is for
        signupData[checkboxName] = {
          value: checkboxStatus,
          field: checkboxValue,
        };
        // Runs a slightly modified set of rules for the form controls which are not checkbox input fields
      } else if (signupForm.elements[i].type !== "checkbox") {
        // Collect all the data we care about from each input
        const inputName = signupForm.elements[i].name; // this is the name that was assigned to the input
        const inputValue = signupForm.elements[i].value; //This is the value that the user entered
        // Add a new property onto the object with the control name of the the input control
        // Within the object created on the new property, the same property names are used as in the checkbox if condition that way we can quickly output the info back to the user
        signupData[inputName] = {
          value: inputValue,
          field: inputName,
        };
      }
    }
  }
  // Output our simplified form data to the console so that you, the devloper, can see the data structure within the console section in the dev tools
  console.log("signupData", signupData);
  // The variables where we're putting the dates that the user is and is not available
  // This time we're "typing" the var to a string rather than an object like we did for the signupData var above
  var availableDates = "";
  var unavailableDates = "";
  // This is a method of looping through an object simular to how we loop through the array in the for loop above
  Object.values(signupData).forEach((property) => {
    // Adds checkboxes that were checked to the available dates var defined above
    if (property.value === true) {
      availableDates += `\n${property.field}`;
    }
    // Adds checkboxes that were not checked to the unavailable dates var defined above
    if (property.value === false) {
      unavailableDates += `\n${property.field} `;
    }
  });
  // Now we'll let the user know what they selected when they submitted the form
  window.alert(`
  Name: ${signupData.name.value}\n
  Shirt Size: ${signupData.size.value}\n
  Shirt Number: ${signupData.number.value}\n
  Available Dates: ${availableDates}\n
  Unavailable Dates: ${unavailableDates}
  `);
}

const playerlist = document.querySelector('#signup-list');
const form = document.querySelector('#signupForm');

//create element and render players
function cornholePlayers(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let size = document.createElement('span');
    let number = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    number.textContent = doc.data().number;
    size.textContent = doc.data().size;

    li.appendChild(name);
    li.appendChild(size);
    li.appendChild(number);

    cafelist.appendChild(li);
}

// saving data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(form.name.value);
//     db.collection('Signup form').add({
//         name: form.name.value,
//         size: form.size.value,
//         number: form.number.value
//     });
//     form.name.value = '';
//     form.size.value = '';
//     form.number.value = '';
// });

function submitForm(event) {
    console.log(event)
  }