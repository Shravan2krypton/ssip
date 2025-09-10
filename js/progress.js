const entries = JSON.parse(localStorage.getItem('dailyEntries')) || [];

// Prepare data for chart
const labels = entries.map((_, index) => `Day ${index + 1}`);
const cravingsData = entries.map(entry => entry.cravings);
const moodData = entries.map(entry => entry.mood);

const ctx = document.getElementById('progressChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Cravings Level',
                data: cravingsData,
                borderColor: 'red',
                fill: false,
                tension: 0.3
            },
            {
                label: 'Mood Level',
                data: moodData,
                borderColor: 'green',
                fill: false,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Cravings vs Mood Over Time'
            }
        },
        scales: {
            y: {
                min: 0,
                max: 10
            }
        }
    }
});