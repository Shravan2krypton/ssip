// Sample treatment plans for each addiction type
const treatments = {
    "Tobacco": [
        {herb: "Tulsi", dosage: "2-3 leaves daily"},
        {herb: "Licorice Root", dosage: "1 tsp powder with warm water"},
        {herb: "Ashwagandha", dosage: "500mg capsule daily"}
    ],
    "Alcohol": [
        {herb: "Brahmi", dosage: "1 tsp powder with milk"},
        {herb: "Guduchi", dosage: "500mg capsule daily"},
        {herb: "Shankhpushpi", dosage: "1 tsp powder in warm water"}
    ],
    "Drugs": [
        {herb: "Ashwagandha", dosage: "500mg capsule daily"},
        {herb: "Tulsi", dosage: "2-3 leaves daily"},
        {herb: "Triphala", dosage: "1 tsp powder before sleep"}
    ],
    "Caffeine": [
        {herb: "Tulsi", dosage: "2-3 leaves daily"},
        {herb: "Brahmi", dosage: "1 tsp powder with milk"},
        {herb: "Ashwagandha", dosage: "500mg capsule daily"}
    ]
};

// Fetch addiction type from localStorage
const addictionType = localStorage.getItem('addictionType');
const planContainer = document.getElementById('plan');

if(addictionType && treatments[addictionType]) {
    planContainer.innerHTML = `<h2>Treatment for ${addictionType}</h2>`;
    treatments[addictionType].forEach(item => {
        planContainer.innerHTML += `<p><strong>${item.herb}:</strong> ${item.dosage}</p>`;
    });
    planContainer.innerHTML += `<p><strong>Lifestyle Recommendations:</strong> Yoga, meditation, and avoiding triggers.</p>`;
} else {
    planContainer.innerHTML = "<p>No treatment plan found. Please select your addiction type first.</p>";
}

