var myForm = document.getElementById('newsletter');

//listens for the submit on the form
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var myElement = document.createElement('p');
    //adds a thank you message to the page after submission
    myElement.innerHTML = 'Thank you for signing up!';
    document.getElementById('newsletter').appendChild(myElement);
});
