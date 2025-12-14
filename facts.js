// Local database of elephant facts and images
const elephantData = [
    {
        fact: "Elephants are the world's largest land animal. The African Savanna (Bush) elephant can stand up to 3m high!",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/African_elephant_%2821061038745%29.jpg/640px-African_elephant_%2821061038745%29.jpg",
        credit: "Leo Li / Wikimedia Commons"
    },
    {
        fact: "Female elephants have the longest pregnancy of any mammal, lasting 22 months.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Elephants.jpg/640px-Elephants.jpg",
        credit: "Wikimedia Commons"
    },
    {
        fact: "Elephants can communicate with vibrations through their feet, detecting signals from miles away.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Asian_Elephant_Image_001.jpg/640px-Asian_Elephant_Image_001.jpg",
        credit: "Ltshears / Wikimedia Commons"
    },
    {
        fact: "Elephants eat for up to 16 hours a day and can consume hundreds of pounds of food.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Asian_Elephant_%2829300602857%29.jpg/640px-Asian_Elephant_%2829300602857%29.jpg",
        credit: "Mike Prince / Wikimedia Commons"
    },
    {
        fact: "Elephants are excellent swimmers and use their trunks as snorkels.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Asian_Elephant_10.jpg/640px-Asian_Elephant_10.jpg",
        credit: "SuperJew / Wikimedia Commons"
    },
    {
        fact: "Elephants have a great memory and can remember locations of water sources for years.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Elephant_Drawing.jpg/640px-Elephant_Drawing.jpg",
        credit: "Public Domain"
    }
];

function displayRandomFact() {
    const container = document.getElementById('daily-fact-container');
    if (!container) return;

    // Pick random index
    const randomIndex = Math.floor(Math.random() * elephantData.length);
    const data = elephantData[randomIndex];

    // Build HTML
    const html = `
        <div class="fact-card">
            <h3>Did you know?</h3>
            <div class="fact-image-container">
                <img src="${data.image}" alt="Elephant Image" class="fact-image">
                <small>Image: ${data.credit}</small>
            </div>
            <p class="fact-text">${data.fact}</p>
        </div>
    `;

    container.innerHTML = html;
}

// Load on start
document.addEventListener('DOMContentLoaded', displayRandomFact);
