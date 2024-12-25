//your JS code here. If required.
// Get references to the counter paragraph and the increment button
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

// Initialize the counter value
let counterValue = 0;

// Add an event listener to the increment button
incrementBtn.addEventListener("click", function() {
  // Show the alert with the current counter value before incrementing
  alert(counterValue);

  // Increment the counter value
  counterValue++;

  // Update the displayed counter value
  counter.textContent = counterValue;
});
