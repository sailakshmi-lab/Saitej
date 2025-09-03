document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const myHeading = document.getElementById('myHeading');

    myButton.addEventListener('click', function() {
        myHeading.textContent = 'Button Clicked!';
        myHeading.style.color = 'green';
    });
});