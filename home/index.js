const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
  hamburger.style.display = 'none';
  closeBtn.style.display = 'block';
  //   navLinks.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  hamburger.style.display = 'block';
  closeBtn.style.display = 'none';
  //   navLinks.style.display = 'none';
});

// calendar for events

function updateNewYorkTime() {
  const date = new Date();

  const options = {
    timeZone: 'America/New_York',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formatted = formatter.format(date).replace(',', '');

  document.getElementById('dateDisplay').textContent = formatted;
}

// Initial call
updateNewYorkTime();

// Update every second
setInterval(updateNewYorkTime, 1000);

function highlightTodayEvent() {
  const eventElements = document.querySelectorAll('.eventdetails');
  const today = new Date();

  // Get current date in New York timezone
  const nowNY = new Date(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(today)
  );

  eventElements.forEach((el) => {
    const dateText = el.querySelector('h1').textContent.trim(); // e.g. "June 27"
    const [monthName, day] = dateText.split(' ');

    const eventDate = new Date(`${monthName} ${day}, ${nowNY.getFullYear()}`);

    // Compare only the date parts
    if (
      eventDate.getDate() === nowNY.getDate() &&
      eventDate.getMonth() === nowNY.getMonth()
    ) {
      el.classList.add('highlight');
    }
  });
}

// Call on load
highlightTodayEvent();

// tutorial
