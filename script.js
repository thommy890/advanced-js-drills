let fruits = ['apple', 'tomato', 'banana'];

// Calling showAlert before declaration would throw an error
// showAlert();

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        let leastFav = 'tomato'; // Assign your least favorite fruit here
        console.log(favFruit);
        console.log(leastFav);  // Logging leastFav within printFavFruit
    }

    printFavFruit(); // Call the nested function to execute it

    // This will throw an error because leastFav is not accessible here
    // console.log(leastFav); 
}

printFruits();

// Declare showAlert after calling printFruits
let showAlert = function() {
    alert("This is an alert!");
};

// Now you can call showAlert
showAlert();
