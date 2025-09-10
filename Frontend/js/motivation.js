// Motivational quotes
const quotes = [
    "The journey of a thousand miles begins with one step.",
    "You are stronger than your cravings.",
    "One day at a time.",
    "Small progress is still progress.",
    "Believe in yourself and your recovery."
];

// Fetch daily entries to calculate milestones
const entries = JSON.parse(localStorage.getItem('dailyEntries')) || [];
const milestones = document.getElementById('milestones');

entries.forEach((entry, index) => {
    if(entry.cravings <= 3) {
        milestones.innerHTML += `<li>Day ${index + 1}: Low cravings!</li>`;
    }
    if(entry.mood >= 8) {
        milestones.innerHTML += `<li>Day ${index + 1}: Excellent mood!</li>`;
    }
});

// Random quote display
const quoteDiv = document.getElementById('quote');
quoteDiv.innerHTML = `<p>"${quotes[Math.floor(Math.random() * quotes.length)]}"</p>`;

