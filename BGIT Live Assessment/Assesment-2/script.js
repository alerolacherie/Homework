// To get the modal element
const modal = document.getElementById('recipeModal');

// To get the button that opens the modal
const btn = document.querySelector('.view-details-btn');

// To get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close')[0];

// The Function to open the modal
btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// The Function to close the modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// To close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
