// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Get references to the heart element and the error modal
const heart = document.getElementById('heart');
const errorModal = document.getElementById('error-modal');

// Hide the error modal on initial load
errorModal.classList.add('hidden');

// Add an event listener to the heart element
heart.addEventListener('click', () => {
  if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART; // Change to empty heart
    heart.classList.remove('activated-heart'); // Remove the filled heart class
  } else {
    mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART; // Change to full heart
        heart.classList.add('activated-heart'); // Add the filled heart class
      })
      .catch((error) => {
        errorModal.classList.remove('hidden'); // Show error modal
        errorModal.innerText = error; // Display the error message

        setTimeout(() => {
          errorModal.classList.add('hidden'); // Hide error modal after 3 seconds
        }, 3000);
      });
  }
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}