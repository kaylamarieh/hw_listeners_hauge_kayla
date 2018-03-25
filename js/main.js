var heading = document.getElementsByTagName('h1')[0];
var x = 1;

heading.addEventListener('click', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'This is click number ' + x + '.';
    document.body.appendChild(myElement);
    x = x + 1;
});
