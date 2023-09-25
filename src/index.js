document.addEventListener('DOMContentLoaded', () => {
    // Function to display ramen details
    function displayRamenDetails(ramen) {
      const detailImage = document.querySelector('.detail-image');
      const nameElement = document.querySelector('.name');
      const restaurantElement = document.querySelector('.restaurant');
      const ratingDisplay = document.getElementById('rating-display');
      const commentDisplay = document.getElementById('comment-display');
  
      detailImage.src = ramen.image;
      detailImage.alt = ramen.name;
      nameElement.textContent = ramen.name;
      restaurantElement.textContent = ramen.restaurant;
      ratingDisplay.textContent = ramen.rating;
      commentDisplay.textContent = ramen.comment;
    }
  
    // Fetch and display all ramen images on page load
    const ramenMenu = document.getElementById('ramen-menu');
  
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(ramens => {
        ramens.forEach(ramen => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.addEventListener('click', () => displayRamenDetails(ramen));
          ramenMenu.appendChild(img);
        });
      });
  
    // Handle the submission of the new ramen form
    const newRamenForm = document.getElementById('new-ramen');
    newRamenForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Extract form data
      const name = document.getElementById('new-name').value;
      const restaurant = document.getElementById('new-restaurant').value;
      const image = document.getElementById('new-image').value;
      const rating = document.getElementById('new-rating').value;
      const comment = document.getElementById('new-comment').value;
  
      // Create a new ramen object
      const newRamen = {
        name,
        restaurant,
        image,
        rating,
        comment,
      };
  
      // Reset the form
      newRamenForm.reset();
  
      // Create a new image for the ramen and add it to the menu
      const img = document.createElement('img');
      img.src = newRamen.image;
      img.addEventListener('click', () => displayRamenDetails(newRamen));
      ramenMenu.appendChild(img);
    });
  });

