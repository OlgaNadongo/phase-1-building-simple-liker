// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 
const emptyHearts = document.querySelectorAll('.like-glyph');



emptyHearts.forEach(emptyHeart =>{
    emptyHeart.addEventListener('click',function (){
    mimicServerCall()
    .then(response=>{
      emptyHeart.textContent = FULL_HEART;
      emptyHeart.classList.add('activated-heart')

      emptyHeart.addEventListener('click',function(){
        emptyHeart.textContent = EMPTY_HEART;
        emptyHeart.classList.remove('activated-heart')
      })
    })
    .catch(error=>{
    const errorModal = document.getElementById('modal');
    errorModal.classList.remove('hidden');
    document.getElementById('modal-message').textContent = error;

     setTimeout(function(){
        errorModal.classList.add('hidden');
     },3000)
  
    })

})

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
