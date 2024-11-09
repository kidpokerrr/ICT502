// Scroll to section
function scrollToSection(sectionId) {
    // Scroll to the section smoothly
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Trip Calculator
document.getElementById("calculate-btn")?.addEventListener("click", () => {

    // Get the destination entered by the user and remove extra spaces
    const destination = document.getElementById("destination").value.trim();

    // Get the number of travelers as an integer
    const numTravelers = parseInt(document.getElementById("num-travelers").value);

    // Get the trip duration (in days) as an integer
    const duration = parseInt(document.getElementById("duration").value);

    // Get the cost per day (per person) as a float/real number
    const costPerDay = parseFloat(document.getElementById("cost-per-day").value);


    // if loop which check if all the fields are filled correctly and calculates the travel cost
    if (!destination || !numTravelers || !duration || !costPerDay) {
        // If destination is empty
        document.getElementById("result").textContent =
            "Please fill in all fields to calculate the cost.";
    } else if (numTravelers <= 0 || numTravelers > 500) {
        // If numTravelers is out of range
        document.getElementById("result").textContent =
            "Number of travelers must be between 1 and 500.";
    } else if (duration <= 0 || duration > 500) {
        // If duration is out of range
        document.getElementById("result").textContent =
            "Duration must be between 1 and 500 days.";
    } else if (costPerDay <= 0 || costPerDay > 10000000) {
        // If costPerDay is out of range
        document.getElementById("result").textContent =
            "Cost per day must be between $1 and $10,000,000.";
    } else {
        // If all fields are valid, calculate the total cost
        const totalCost = numTravelers * duration * costPerDay;

        // Show the result
        document.getElementById("result").textContent =
            `Total cost for ${numTravelers} traveler(s) to ${destination} is $${totalCost}.`;
    }
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    // Check each element that the observer is watching
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the "in-view" class when the element is visible in the viewport
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.2 });  // Trigger it when 20% of the element is visible

// Add observer to all elements with the "data-animate" attribute
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
