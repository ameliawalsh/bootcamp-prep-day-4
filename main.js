
// eslint-disable-next-line
function greet(){

    // get the first name inputs by id

    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');

    
    //get the values out of the inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    
    console.log(firstName, lastName);

    //make the greeting string

    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';

    console.log(greeting);
    
    //display the greeting


    //remove prompt
    
    console.log('greet function called');

}

//TODO: calidate name inputs
//TODO: clear inputs after greets?