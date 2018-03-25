var myForm = document.getElementById('newsletter');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var myElement = document.createElement('p');
    myElement.innerHTML = 'Thank you for signing up!';
    document.getElementById('newsletter').appendChild(myElement);
});
