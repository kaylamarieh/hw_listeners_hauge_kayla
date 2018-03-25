var myForm = document.getElementById('contact_form');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('The ' + document.getElementsByClassName('info')[0].name + ' is: ' + document.getElementsByClassName('info')[0].value);
    console.log('The ' + document.getElementsByClassName('info')[1].name + ' is: ' + document.getElementsByClassName('info')[1].value);
    console.log('The ' + document.getElementsByClassName('info')[2].name + ' is: ' + document.getElementsByClassName('info')[2].value);
    console.log('The ' + document.getElementsByClassName('info')[3].name + ' is: ' + document.getElementsByClassName('info')[3].value);
});
