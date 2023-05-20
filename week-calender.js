function setupCalendar() {
  // Get the calendar container
  const calendarContainer = document.querySelector('.week-info');

  // Initialize the date
  let currentDate = new Date();

  // Add event listeners for the previous and next week buttons
  const prevWeekBtn = document.getElementById('prevWeekButton');
  prevWeekBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 7);
    renderCalendar();
  });

  const nextWeekBtn = document.getElementById('nextWeekButton');
  nextWeekBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 7);
    renderCalendar();
  });

  // Render the calendar initially
  renderCalendar();

  // Function to render the calendar
  // function renderCalendar() {
  //   const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  //   // Update the week dates
  //   const weekDates = calendarContainer.getElementsByClassName('date-week');
  //   const weekStart = getWeekStartDate(currentDate);

  //   for (let i = 0; i < 7; i++) {
  //     weekDates[i].textContent = weekStart.getDate();
  //     weekDates[i].classList.remove('current-date');

  //     // Highlight the current date
  //     if (isSameDate(weekStart, new Date())) {
  //       weekDates[i].classList.add('current-date');
  //     }

  //     weekStart.setDate(weekStart.getDate() + 1);
  //   }
  // }

  // Function to render the calendar
function renderCalendar() {
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Update the week dates
  const weekDates = calendarContainer.getElementsByClassName('week-dates');
  const weekStart = getWeekStartDate(currentDate);

  for (let i = 0; i < 7; i++) {
    const dateElement = weekDates[i].querySelector('.date-week');
    dateElement.textContent = weekStart.getDate();
    weekDates[i].classList.remove('active');

    // Highlight the current date
    if (isSameDate(weekStart, new Date())) {
      weekDates[i].classList.add('active');
    }

    weekStart.setDate(weekStart.getDate() + 1);
  }
}

  // Helper function to get the start date of the week
  function getWeekStartDate(date) {
    const weekDay = date.getDay();
    const diff = date.getDate() - weekDay + (weekDay === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  // Helper function to check if two dates are the same
  function isSameDate(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}

// Call the setupCalendar function
setupCalendar();
