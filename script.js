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


    // if loop which check if all the fields are filled and calculates the travel cost
    if (destination && numTravelers && duration && costPerDay) {

        // The formula
        const totalCost = numTravelers * duration * costPerDay;

        // Print the output message in the result section
        document.getElementById("result").textContent =
            `Total cost for ${numTravelers} traveler(s) to ${destination} is $${totalCost}.`;
    } 
    else {
        // If the any field is empty, show this error message
        document.getElementById("result").textContent =
            "Please fill in all fields to calculate the cost.";
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