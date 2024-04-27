/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCost = document.getElementById('calculated-cost');
let dailyRate = 35;
let dayCounter = 0;


dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener('click', function() {
        toggleClickedClass(dayButton);
        updateDayCounter();
        calculateCost();
    });
});

clearButton.addEventListener('click', clearDays);

halfDayButton.addEventListener('click', handleHalfDayClick);

fullDayButton.addEventListener('click', handleFullDayClick);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleClickedClass(dayButton) {
    dayButton.classList.toggle('clicked');
}

function updateDayCounter() {
    dayCounter = document.querySelectorAll('.day-selector li.clicked').length;
}

function calculateCost() {
    calculatedCost.textContent = dayCounter * dailyRate;
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    dayButtons.forEach(function(dayButton) {
        dayButton.classList.remove('clicked');
    });
    dayCounter = 0;
    calculatedCost.textContent = '0';
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function handleHalfDayClick() {
    fullDayButton.classList.remove('clicked');
    halfDayButton.classList.add('clicked');
    dailyRate = 20;
    calculateCost();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function handleFullDayClick() {
    halfDayButton.classList.remove('clicked');
    fullDayButton.classList.add('clicked');
    dailyRate = 35;
    calculateCost();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

