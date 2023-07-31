function showSlide(className) {
    document.querySelector('.card').style.display = 'none';
    document.querySelector('.slide2').style.display = 'none';
    document.querySelector(className).style.display = 'block';
  }
  
  // Check if the user has visited the welcome page before in the current session
  if (!sessionStorage.getItem('visitedWelcomePage')) {
    // Set the flag for the current session
    sessionStorage.setItem('visitedWelcomePage', 'true');
    window.location.href = 'welcome.html';
  }
  
  // Event listener for the "Next" button click
  document.querySelector('.nextBtn').addEventListener('click', function () {
    showSlide('.slide2');
  });
  
  // Event listener for the "Get started" button click
  document.getElementById('getStartedBtn').addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput').value.trim();
  
    if (nameInput !== '') {
      localStorage.setItem('userName', nameInput);
      window.location.href = 'home.html';
    }
    //  else {
    //   alert('Please enter your name before getting started.');
    // }
   
  });
  
  // Automatically redirect back to home.html if the user goes back to welcome.html
  window.onpopstate = function () {
    if (document.location.href.includes('welcome.html')) {
      window.history.replaceState(null, '', 'home.html');
    }
  };
  
  // Check if the user has entered their name before showing slide2
  const userName = localStorage.getItem('userName');
  const currentURL = document.location.href;
  if (!userName && currentURL.includes('home.html')) {
    window.location.href = 'welcome.html';
  } else if (userName && currentURL.includes('welcome.html')) {
    window.location.href = 'home.html';
  }


  

