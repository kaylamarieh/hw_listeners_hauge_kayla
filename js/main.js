var myForm = document.getElementById('newsletter');

//listens for the submit on the form
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var myElement = document.createElement('p');
    //adds a thank you message to the page after submission
    myElement.innerHTML = 'Thank you for signing up!';
    document.getElementById('newsletter').appendChild(myElement);
});

//var show = document.getElementById('appear');

//show.addEventListener('scroll', function () {
    //var animation =
    //document.getElementsById('appear').animate([
        //{ transform: 'translateY(0)' },
        //{ transform: 'translateY(-100%)' }
    //]);
//});

//var show = document.getElementById('work');

var show = window

//function opcChange() {
    //var amount = 'opacity = 1';
    //document.getElementsByClassName('appear').style.opacity = amount;
//}

//show.addEventListener('scroll', opcChange);


show.addEventListener('scroll', function () {
    document.getElementById('work').style.opacity = '1';
});
