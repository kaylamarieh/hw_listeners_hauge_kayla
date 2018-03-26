var myForm = document.getElementById('newsletter');

//listens for the submit on the form
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var myElement = document.createElement('p');
    //adds a thank you message to the page after submission
    myElement.innerHTML = 'Thank you for signing up!';
    document.getElementById('newsletter').appendChild(myElement);
});

//listens for scroll on window
var show = window;

show.addEventListener('scroll', function () {
    //changes the opacity on icons to show up
    document.getElementById('one').style.opacity = '1';
    document.getElementById('two').style.opacity = '1';
    document.getElementById('three').style.opacity = '1';
});





var info = document.getElementById('begin');

//listens for a click on the word 'Begginer'
info.addEventListener('click', function () {
    var more = document.createElement('p');
    //adds more inoformation about the beginner option under the words
    more.innerHTML = 'If you have just started out, but want to learn more.';
    document.getElementById('moreinfo').appendChild(more);
});

var other = document.getElementById('inter');

other.addEventListener('click', function () {
    var most = document.createElement('p');
    most.innerHTML = 'If you know some, but would like to expand your knowledge';
    document.getElementById('moreinfo').removeChild(('moreinfo').firstChild);
});
