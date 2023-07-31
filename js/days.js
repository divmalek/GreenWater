



document.addEventListener('DOMContentLoaded', function () {
  // Loop through all the buttons and add click event listeners
  for (let i = 1; i <= 30; i++) {
    // Check if the "Day Completed" status is saved in local storage
    const isDayCompleted = localStorage.getItem(`day${i}Completed`);

    // Update the button based on the "Day Completed" status
    const dayButton = document.getElementById(`day${i}`);
    const allTsksButton = document.getElementById(`allTsks${i}`);

    if (isDayCompleted === 'true' && dayButton) {
      dayButton.textContent = 'Day Completed!';
      dayButton.style.width = '200px';
      dayButton.style.height = '200px';
      dayButton.style.fontSize = '30px';
      dayButton.style.borderRadius = '20px';
      dayButton.style.fontWeight = '700';
      dayButton.style.background = '#19e7a9';
      dayButton.style.display = 'flex'; // Set the display property to flex
      dayButton.style.justifyContent = 'center'; // Center the content horizontally
      dayButton.style.alignItems = 'center';
      dayButton.style.textAlign = "center"
      
   


    }

    if (allTsksButton) {
      allTsksButton.addEventListener('click', function () {
        // Change the text of the "ALL TASKS COMPLETED" button to "Completed"
        this.textContent = 'Completed';
        this.disabled = true; // Disable the button to prevent further clicks

        // Save the "Day Completed" status in local storage
        localStorage.setItem(`day${i}Completed`, 'true');

        // Update the corresponding day button text and style
        if (dayButton) {
          dayButton.textContent = 'Day Completed!';
          dayButton.style.width = '200px';
          dayButton.style.height = '200px';
          dayButton.style.fontSize = '30px';
          dayButton.style.borderRadius = '20px';
          dayButton.style.fontWeight = '700';
          // dayButton.style.background = '-webkit-linear-gradient(#13fff4, #15a97d)';
          dayButton.style.display = 'flex'; // Set the display property to flex
          dayButton.style.justifyContent = 'center'; // Center the content horizontally
          dayButton.style.alignItems = 'center';
          dayButton.style.background = "#15a97d";
          dayButton.style.textAlign = "center"

          
          
        }
      });
    }
  }
});








