function displayGreeting() {
    let greet = document.getElementById("greet");
    const userName = localStorage.getItem('userName');
  
    if (userName) {
      greet.innerText = `${userName} What's Up!`;
      // greet.style.color = "#19e7a9";
    } else {
      greet.innerText = "Hi!";
    }
  }
  
  displayGreeting();
// Check if the "Day Completed" status is saved in local storage
// const isDay1Completed = localStorage.getItem('day1Completed');

// // Update the "day1" button text based on the "Day Completed" status
// const day1Button = document.getElementById('day1');
// if (isDay1Completed === 'true') {
//   day1Button.textContent = 'Day Completed!';
//   day1Button.style.width = '300px';
//   day1Button.style.height = '300px';
//   day1Button.style.fontSize = '40px';
//   day1Button.style.borderRadius = '20px';
//   day1Button.style.fontWeight = '700';
//   day1Button.style.background = '-webkit-linear-gradient(#13fff4, #15a97d)';
//   day1Button.style.display = 'flex'; // Set the display property to flex
//   day1Button.style.justifyContent = 'center'; // Center the content horizontally
//   day1Button.style.alignItems = 'center';
//   }

