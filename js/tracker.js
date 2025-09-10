const trackerForm = document.getElementById('trackerForm');
const entriesList = document.getElementById('entries');

function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('dailyEntries')) || [];
    entriesList.innerHTML = '';
    entries.forEach((entry, index) => {
        entriesList.innerHTML += `<li><strong>Day ${index + 1}:</strong> Cravings: ${entry.cravings}, Mood: ${entry.mood}, Notes: ${entry.notes}</li>`;
    });
}

// Initial load
loadEntries();

trackerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cravings = document.getElementById('cravings').value;
    const mood = document.getElementById('mood').value;
    const notes = document.getElementById('notes').value;

    const entries = JSON.parse(localStorage.getItem('dailyEntries')) || [];
    entries.push({cravings, mood, notes});
    localStorage.setItem('dailyEntries', JSON.stringify(entries));

    trackerForm.reset();
    loadEntries();
});