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
    var scrollPos = window.scrollY;
    var op;
    //changes the opacity on icons to show up depending upon scroll location
    op = scrollPos / 500;
    if (op > 1) {
        op = 1; //because opacity cannot be greater than 1
    }
    document.getElementById('one').style.opacity = op;
    document.getElementById('two').style.opacity = op;
    document.getElementById('three').style.opacity = op;
});

var beginner = document.getElementById('begin');
var intermediate = document.getElementById('inter');
var count = 0;
var place; //make place a global variable

//listens for a click on the word 'beginner'
beginner.addEventListener('click', function () {
    if (count === 0) {
        place = document.createElement('p');
        count = 1;
    } //only creates paragraph element one time
    //adds more information about beginnger
    place.innerHTML = 'If you have just started out, but want to learn more.';
    document.getElementById('moreinfo').appendChild(place);
});
//listenes for a click on the word 'intermediate'
intermediate.addEventListener('click', function () {
    if (count === 0) {
        place = document.createElement('p');
        count = 1;
    }//repeated incase intermediate is clicked first
    place.innerHTML = 'If you know some, but would like to expand your knowledge.';
    document.getElementById('moreinfo').appendChild(place);
});
