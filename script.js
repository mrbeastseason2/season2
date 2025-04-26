 // Countdown timer
    const countdown = document.getElementById('countdown');
    const launchDate = new Date("2025-06-01T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        countdown.innerHTML = "🎉 The Challenge Has Begun!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `<span>${days}</span> : <span>${hours}</span> : <span>${mins}</span> : <span>${secs}</span>`;
    };

    setInterval(updateTimer, 1000);


  // Check if dark mode was previously selected
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  document.getElementById('theme-toggle').textContent = '🌞'; // Set the correct icon for dark mode
}

// Get the button element
const toggleButton = document.getElementById('theme-toggle');

// Function to toggle dark mode
toggleButton.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the body
  document.body.classList.toggle('dark-mode');

  // Change the button icon depending on the mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '🌞';  // Switch to light mode icon
    localStorage.setItem('theme', 'dark'); // Store theme in localStorage
  } else {
    toggleButton.textContent = '🌙';  // Switch to dark mode icon
    localStorage.setItem('theme', 'light'); // Store theme in localStorage
  }
});


 const contactForm = document.getElementById('applicationForm'),
        contactMessage = document.getElementById('contact-message'),
        application = document.getElementById('form_container');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wsn9gaw', 'template_g58v8nj', contactForm, 'NFZ_9PV6-OtVKjKQB')
    .then(() => {
      application.style.display = 'none';  // Hide the form
      contactMessage.style.display = 'block'; // Show the message

      setTimeout(() => {
        contactMessage.style.display = 'none';
        contactMessage.textContent = '';
      }, 5000);

      contactForm.reset();
    })
    .catch((error) => {
      contactMessage.style.display = 'block';
      contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send application. Please try again later.</span>';

      setTimeout(() => {
        contactMessage.style.display = 'none';
        contactMessage.innerHTML = '';
      }, 5000);
    });
  };

  contactForm.addEventListener('submit', sendEmail);