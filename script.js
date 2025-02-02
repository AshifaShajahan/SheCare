document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.getElementById("calendar-days");
    const monthTitle = document.getElementById("current-month");
    const periodDays = [1, 2, 3, 4, 5];
    const predictedDays = [18, 19, 20];
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    
    // Determine number of days in the selected month
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    function generateCalendar(year, month) {
        daysContainer.innerHTML = "";
        const totalDays = getDaysInMonth(year, month);
        monthTitle.innerText = today.toLocaleString('default', { month: 'long' }) + ` ${year}`;

        for (let i = 1; i <= totalDays; i++) {
            let dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            dayDiv.innerText = i;

            if (periodDays.includes(i)) {
                dayDiv.classList.add("period-day");
            } else if (predictedDays.includes(i)) {
                dayDiv.classList.add("predicted-day");
            } else {
                dayDiv.addEventListener("click", () => alert(`You clicked on day ${i}`));
            }

            daysContainer.appendChild(dayDiv);
        }
    }

    generateCalendar(currentYear, currentMonth);

    // Update Progress Circle
    let progressCircle = document.querySelector('.progress');
    let cycleDay = 12; // Example, dynamically use current cycle day if available
    let totalCycleLength = 28; // Default cycle length
    let progressValue = (cycleDay / totalCycleLength) * 283; // Calculate the dashoffset

    // Corrected stroke-dashoffset assignment
    progressCircle.style.strokeDashoffset = 283 - progressValue;
});
