// clock
setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);



// this week



// tabs
function openTab(event, tabId) {
    // Get all tab content elements
    var tabContent = document.getElementsByClassName("tab-content");

    // Hide all tab content elements
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    // Get all tab elements
    var tab = document.getElementsByClassName("tab");

    // Remove 'active' class from all tabs
    for (var i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = "block";

    // Add 'active' class to the selected tab
    event.currentTarget.className += " active";
  }


//   selected-date





// calender
function setupCalendar() {
  // Get the calendar container
  const calendarContainer = document.querySelector('.calendar');

  // Initialize the date
  let currentDate = new Date();

  // Add event listeners for the previous and next year buttons
  const prevYearBtn = document.getElementById('prev-year');
  prevYearBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  const nextYearBtn = document.getElementById('next-year');
  nextYearBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  // Render the calendar initially
  renderCalendar();

  // Function to render the calendar
  function renderCalendar() {
    const monthPicker = document.getElementById('month-picker');
    const yearPicker = document.getElementById('year');
    const monthYear = document.getElementById('month-year');
    const calendarDays = document.querySelector('.calendar-days');

    // Get the current month and year
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Update the month and year displayed
    monthPicker.textContent = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    yearPicker.textContent = currentYear;
    monthYear.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentDate);

    // Clear the calendar days
    calendarDays.innerHTML = '';

    // Get the first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startDay = firstDay.getDay();

    // Get the number of days in the month
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Generate the calendar grid
    for (let i = 0; i < startDay; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.classList.add('calendar-day', 'empty');
      calendarDays.appendChild(emptyDay);
    }

    for (let day = 1; day <= totalDays; day++) {
      let calendarDay = document.createElement('div');
      calendarDay.classList.add('calendar-day');
      calendarDay.textContent = day;

      // Add click event listener to store the selected date in a div
      calendarDay.addEventListener('click', function () {
        let selectedDate = document.getElementById('selected-date');
        let selectedDateString = new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).format(new Date(currentYear, currentMonth, day));
        selectedDate.textContent = selectedDateString;

        // Remove the 'selected' class from all calendar days
        const allCalendarDays = document.querySelectorAll('.calendar-day');
        allCalendarDays.forEach(day => {
          day.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked calendar day
        calendarDay.classList.add('selected');

        let calendarSchedule = document.querySelector('.calender-schedule');
        calendarSchedule.style.display = 'block';
      });

      calendarDays.appendChild(calendarDay);
    }
  }

  // Initialize the display of calendar schedule
  let calendarSchedule = document.querySelector('.calender-schedule');
  calendarSchedule.style.display = 'none';
}

// Call the setupCalendar function
setupCalendar();
