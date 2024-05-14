// document.getElementById('btn').addEventListener('click', function() {
    
//     window.location.href ='studentform.html'; // Replace 'next_page.html' with the URL of your next page or form
// });

document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function() {
        // Redirect to studentform.html
        window.location.href = 'studentform.html';
    });
});
