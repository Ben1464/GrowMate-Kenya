const solutions = [
    { 
        problem: "CBD", 
        infestationimage: "./images/CBD.jpg",
        description: "Thrips infestations pose a serious threat to coffee production, impacting on the tree health and berries quality. Vigilance and prompt action are essential for mitigating these pest's impact. By employing early detection methods and implementing appropriate management strategies, coffee farmers can protect their crops and ensure a sustainable yield in the face of thrips infestations.",
        solution: "To eradicate them use Kingcode 10mls + Integra 3mls/20ltrs of water.",
        sprayingintervals: "Repeat spray after 21 days. If the infestation is adverse repeat after 14 days.",
        image: "./images/Azolaxyl.jpg",
        availablepacksize:"50mls,100mls,250mls,1ltr.",
        pricerange:"Ksh (200-250),Ksh (300-350),Ksh (650-750),Ksh (2900-3000)"
       
    },
    { 
        problem: "Fruit and flowering foliar", 
        infestationimage: "./images/ripeberries.jpg",
        description: "OKINAWO® NPK GOLD is a fully water-soluble NPK fertilizer suitable for the entire vegetative and fruiting stages of agricultural crops.It’s ideal for periods when plants need elevated levels of Nitrogen and Potassium.",
        solution: "With its high Potassium content, it promotes enhanced seed and fruit formation, leading to higher yields. For optimal results, apply high-potassium fertilizers just before fruit formation. Spray 20mls/20ltrs.",
        sprayingintervals: "Repeat spray after every 14-21 days.",
        image: "./images/Okinawo.jpg",
        availablepacksize:"50mls,100mls,250mls,1ltr.",
        pricerange:"Ksh (200-250),Ksh (300-350),Ksh (650-750),Ksh (2900-3000)"
       
    },
    
    { 
        problem: "Pottasium", 
        infestationimage: "./images/ripeberries.jpg",
        description: "OKINAWO® NPK GOLD is a fully water-soluble NPK fertilizer suitable for the entire vegetative and fruiting stages of agricultural crops.It’s ideal for periods when plants need elevated levels of Nitrogen and Potassium.",
        solution: "With its high Potassium content, it promotes enhanced seed and fruit formation, leading to higher yields. For optimal results, apply high-potassium fertilizers just before fruit formation. Spray 20mls/20ltrs.",
        sprayingintervals: "Repeat spray after every 14-21 days.",
        image: "./images/Okinawo.jpg",
        availablepacksize:"50mls,100mls,250mls,1ltr.",
        pricerange:"Ksh (200-250),Ksh (300-350),Ksh (650-750),Ksh (2900-3000)"
       
    },
    { 
        problem: "Drought Stress", 
        infestationimage: "./images/stress free tomatoes.webp",
        description: "SEAGOLD® is a pure, natural fermented seaweed liquid biofertilizer enriched with chelating NPK. It helps plants overcome stress and stimulates growth, enhancing overall plant condition and production. Suitable for various crops including vegetables, fruits, and cereals.",
        solution: "Spray 10mls/20ltrs.",
        sprayingintervals: "Repeat spray after every 14-21 days.",
        image: "./images/Seagold.jpg",
        availablepacksize:"50mls,100mls,250mls,1ltr.",
        pricerange:"Ksh (200-250),Ksh (300-350),Ksh (650-750),Ksh (2900-3000)"
       
    },
]
function searchSolutions() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const solutionResults = document.getElementById("solutionResults");
    solutionResults.innerHTML = "";

    const filteredSolutions = solutions.filter(solution => {
        const problemName = solution.problem.toLowerCase();
        // Check if the full problem name matches the search input exactly
        return problemName == searchInput;
    });

    if (filteredSolutions.length === 0) {
        solutionResults.innerHTML = "<p>Kindly check your spelling or try rephrasing your search again.</p>";
    } else {
        filteredSolutions.forEach(solution => {
            const solutionDiv = document.createElement("div");
            solutionDiv.classList.add("solution");
            solutionDiv.innerHTML = `
                <h3>${solution.problem}</h3>
                <img src="${solution.infestationimage}" alt="${solution.problem}">
                <h3>Description:</h3>
                <p>${solution.description}</p>
                <h3>Solution:</h3>
                <p>${solution.solution}</p>
                <img src="${solution.image}" alt="${solution.problem}">
                <h3>Spraying Intervals:</h3>
                <p>${solution.sprayingintervals}</p>
                <h3>Available Pack Size:</h3>
                <table>
                    <tr>
                        <th>Pack Size</th>
                        <th>Price Range</th>
                    </tr>
                    ${solution.availablepacksize.split(',').map((size, index) => `
                        <tr>
                            <td>${size}</td>
                            <td>${solution.pricerange.split(',')[index]}</td>
                        </tr>
                    `).join('')}
                </table>`;
            
            solutionResults.appendChild(solutionDiv);
        });
    }
}

function searchSolutions() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const solutionResults = document.getElementById("solutionResults");
    solutionResults.innerHTML = "";

    const filteredSolutions = solutions.filter(solution => {
        const problemName = solution.problem.toLowerCase();
        // Check if the full problem name matches the search input exactly
        return problemName == searchInput;
    });

    if (filteredSolutions.length === 0) {
        solutionResults.innerHTML = "<p>Kindly check your spelling or try rephrasing your search again.</p>";
    } else {
        filteredSolutions.forEach(solution => {
            const solutionDiv = document.createElement("div");
            solutionDiv.classList.add("solution");
            solutionDiv.innerHTML = `
                <h3>${solution.problem}</h3>
                <img src="${solution.infestationimage}" alt="${solution.problem}">
                <h3>Description:</h3>
                <p>${solution.description}</p>
                <h3>Solution:</h3>
                <p>${solution.solution}</p>
                <img src="${solution.image}" alt="${solution.problem}">
                <h3>Spraying Intervals:</h3>
                <p>${solution.sprayingintervals}</p>
                <h3>Available Pack Size:</h3>
                <table>
                    <tr>
                        <th>Pack Size</th>
                        <th>Price Range</th>
                    </tr>
                    ${solution.availablepacksize.split(',').map((size, index) => `
                        <tr>
                            <td>${size}</td>
                            <td>${solution.pricerange.split(',')[index]}</td>
                        </tr>
                    `).join('')}
                </table>`;
            
            solutionResults.appendChild(solutionDiv);
        });
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to handle automatic search based on URL parameter
function handleAutomaticSearch() {
    const searchQuery = getQueryParam('search');
    if (searchQuery) {
        // Perform search based on the query parameter
        document.getElementById("searchInput").value = searchQuery;
        searchSolutions();
    }
}

// Call the function to handle automatic search when the page loads
window.onload = function() {
    handleAutomaticSearch(); // Perform automatic search based on URL parameter
};


// Function to handle the click event on the Connect button
// Function to handle the click event on the Connect button
// Function to handle the click event on the Connect button
function showContactList() {
    const contactList = document.getElementById("contactList");

    // Clear any existing content
    contactList.innerHTML = "";

    // Create and append the table
    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Regions</th>
            <th>Name</th>
            <th>Contact</th>
        </tr>
        <tr>
        <td>Mt.Kenya Regional-Manager</td>
        <td>Nmae 1</td>
        <td><a href="tel:+254759790387"><i class="fas fa-phone"></i> +254759790387</a></td>
    </tr>

        <tr>
            <td>Kiambu</td>
            <td>Name 2</td>
            <td> <a href="tel:+254742512369"><i class="fas fa-phone"></i> +254742512369</a></td>
        </tr>
        <tr>
            <td>Murang'a</td>
            <td>Name 3</td>
            <td> <a href="tel:+254742511873"><i class="fas fa-phone"></i> +254742511623</a></td>
        </tr>
        <tr>
            <td>Kirinyaga</td>
            <td>Name 4</td>
            <td><a href="tel:+254742512107"><i class="fas fa-phone"></i> +254742512107</a></td>
        </tr>
        <tr>
            <td>Embu</td>
            <td>Name 5</td>
            <td> <a href="tel:+254743566824"><i class="fas fa-phone"></i> +254743566824</a></td>
        </tr>
        <tr>
            <td>Meru-Tharaka</td>
            <td>Name 6</td>
            <td> <a href="tel:+254743086987"><i class="fas fa-phone"></i> +254743086987</a></td>
        </tr>
        <tr>
            <td>Maua-Isiolo</td>
            <td>Name 7</td>
            <td><a href="tel:+254742511623"><i class="fas fa-phone"></i> +254742511623</a></td>
        </tr>
        <tr>
            <td>Nanyuki-Narumoru</td>
            <td>Name 8</td>
            <td> <a href="tel:+254742512384"><i class="fas fa-phone"></i> +254742512384</a></td>
        </tr>
        <tr>
            <td>Coffee Embu-Kirinyaga</td>
            <td>Name 9</td>
            <td> <a href="tel:+254742512645"><i class="fas fa-phone"></i> +254742512645</a></td>
        </tr>
        <tr>
            <td>Coffee Nyeri-Murang'a-Kiambu-Meru</td>
            <td>Name 10</td>
            <td><a href="tel:+254743086533"><i class="fas fa-phone"></i> +254743086533</a></td>
        </tr>
        


    `;
    contactList.appendChild(table);
}

// Add event listener to the Connect button
document.querySelector('.connect').addEventListener('click', showContactList);

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header h2');
    const text = header.textContent;
    header.textContent = ''; // Clear the initial text
    header.classList.add('typewriter');

    let i = 0;
    const speed = 100; // Adjust typing speed here

    function typeWriter() {
        if (i < text.length) {
            header.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            header.classList.remove('typewriter');
        }
    }

    typeWriter();
});