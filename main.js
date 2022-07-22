// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Assign eventlistener to all of the <li> with class like
const lilike = document.querySelectorAll('li.like')

//Create Like Function
const LikeFunc = (e) => {
  //if heart is activated, deactivate...
  if (e.target.classList.contains('activated-heart')) {
    e.target.textContent = EMPTY_HEART;
    e.target.classList.remove('activated-heart')
    console.log(e.target)
  } else { // ... else we will run the mimic function
    //invoke mimic server response
    mimicServerCall()

    //if true, then activate heart
    .then(status => {
      e.target.textContent = FULL_HEART;
      e.target.classList.add('activated-heart');
    }) .catch( (error) => {
      document.getElementById('modal').classList.remove('hidden');
      setTimeout(() => document.getElementById('modal').classList.add('hidden'), 3000);
      document.getElementById('modal-message').textContent = error
    })
  }
}

//add eventlistener to each heart button
lilike.forEach((element) =>{
  element.addEventListener('click', (e) => LikeFunc(e))
})





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
