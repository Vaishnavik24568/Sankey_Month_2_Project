function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  
  function selectOption(option) {
    // Add your logic to handle the selected option
    console.log('Selected Option:', option);
  
    // You can close the dropdown after selecting an option
    var dropdown = document.getElementById('roomConditionDropdown');
    dropdown.style.display = 'none';
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.iconseditdrop-down-list3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  };

  $(function() {
    $("#startDate").datepicker({
      onClose: function(selectedDate) {
        $("#endDate").datepicker("option", "minDate", selectedDate);
      }
    });
  
    $("#endDate").datepicker({
      onClose: function(selectedDate) {
        $("#startDate").datepicker("option", "maxDate", selectedDate);
      }
    });
  
    $("#startCalendarIcon").click(function() {
      $("#startDate").datepicker("show");
    });
  
    $("#endCalendarIcon").click(function() {
      $("#endDate").datepicker("show");
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const helpButton = document.getElementById('helpButton');
  
    helpButton.addEventListener('click', function () {
      // Open a new page or display a message here
      window.location.href = 'templates/help_page.html'; // Change the URL to your help_page.html
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const phoneIcon = document.getElementById('phoneIcon');
  
    phoneIcon.addEventListener('click', function () {
      alert('Contact on 1234567890 for more information!');
      // Alternatively, you can display the message in a modal or another way
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const englandButton = document.getElementById('englandButton');
  
    englandButton.addEventListener('click', function () {
      window.location.href = 'templates/england.html'; // Change the URL to your england.html
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const dollarButton = document.getElementById('dollarButton');
  
    dollarButton.addEventListener('click', function () {
      // Navigate to a new HTML page
      window.location.href = 'templates/currency-converter.html'; // Change the URL as needed
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('likeButton');
    let isMessageDisplayed = false; // Define the flag variable outside the event listener

    likeButton.addEventListener('click', function () {
        // Check if a message is already displayed
        if (!isMessageDisplayed) {
            // Display the text after clicking the like icon
            const wishlistMessage = document.createElement('div');
            wishlistMessage.textContent = 'Added to your wishlist';
            wishlistMessage.classList.add('wishlist-message');

            // Append the message to the parent container
            likeButton.appendChild(wishlistMessage);

            // Set the flag to true to indicate that the message is displayed
            isMessageDisplayed = true;

            // Remove the message after a certain duration (e.g., 3 seconds)
            setTimeout(function () {
                wishlistMessage.remove();
                // Reset the flag after removing the message
                isMessageDisplayed = false;
            }, 3000);
        } else {
            // Optional: If a message is already displayed, you may want to do something else
            console.log('A message is already displayed.');
        }
    });
});

  
document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function () {
      const message = document.createElement('div');
      message.textContent = 'Here are the search details';
      message.classList.add('search-message');

      // Append the message to the document body or any other appropriate container
      document.body.appendChild(message);

      // Remove the message after a certain duration (e.g., 3 seconds)
      setTimeout(function () {
          message.remove();
      }, 3000);
  });
});

      
  function selectButton(button) {
    // Remove the 'selected' class from all buttons
    var buttons = document.querySelectorAll('.chip-menu1 button');
    buttons.forEach(function(btn) {
      btn.classList.remove('selected');
    });
  
    // Add the 'selected' class to the clicked button
    button.classList.add('selected');
  }
  
  function selectTab(button) {
    // Remove the 'selected' class from all buttons
    var buttons = document.querySelectorAll('.tab-review');
    buttons.forEach(function(btn) {
      btn.classList.remove('selected');
    });
  
    // Add the 'selected' class to the clicked button
    button.classList.add('selected');
  }
  function openExplorePage() {
    window.location.href = 'templates/Explore_more.html';
  }
 
  function openSpecialOffers(){
    window.location.href= "templates/special_offers.html";
  }