// script.js

// Immediately Invoked Function Expression (IIFE) to encapsulate code and prevent global pollution
(function() {
    // Variables
    const myVariable = "Hello, World!";

    // Functions
    function greetUser(name) {
        console.log(`Welcome, ${name}!`);
    }

    // Event Listeners
    document.addEventListener('DOMContentLoaded', () => {
        const myButton = document.getElementById('myButton');
        if (myButton) {
            myButton.addEventListener('click', () => {
                greetUser("User");
            });
        }
    });

    // Other logic
    console.log(myVariable);

})();
