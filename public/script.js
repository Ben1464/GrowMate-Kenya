const solutions = [
    { 
        problem: "CBD", 
        infestationimage: "./images/CBD.jpg",
        description: "Thrips infestations pose a serious threat to coffee production, impacting on the tree health and berries quality. Vigilance and prompt action are essential for mitigating these pest's impact. By employing early detection methods and implementing appropriate management strategies, coffee farmers can protect their crops and ensure a sustainable yield in the face of thrips infestations.",
        solution: "To eradicate them use Kingcode 10mls + Integra 3mls/20ltrs of water.",
        sprayingintervals: "Repeat spray after 21 days. If the infestation is adverse repeat after 14 days.",
        image: "./images/1719653451675.jpg",
        availablepacksize:"50mls,100mls,250mls,1ltr.",
        pricerange:"Ksh (200-250),Ksh (300-350),Ksh (650-750),Ksh (2900-3000)"
       
    },
    { 
        problem: "Pottasium", 
        infestationimage: "./images/ripeberries.jpg",
        description: "Kingcode Elite® 50EC is a highly systemic and contact insecticide and is active against all sucking and chewing pests like thrips,white flies,aphids,mealybugs,leafminers,berrybores and berry moths with broad spectrum long residual activity.",
        solution: "Use Kingcode 10mls/20ltrs plus Integra 3mls/20ltrs of water.After spotting cases of infrstation.",
        sprayingintervals: "Repeat spray after 21 days. If the infestation is adverse repeat after 14 days.",
        image: "./images/1719653478357.jpg",
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

function sendFeedback(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Create an object to hold the form data
    const feedbackData = {};
    formData.forEach((value, key) => {
        feedbackData[key] = value;
    });

    // Make a POST request to the server
    fetch('https://coffee-digital-backend.onrender.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(feedbackData) // Convert the form data object to JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Handle successful response (optional)
        event.target.reset();
        
        
        console.log('Feedback sent successfully!');
        return response.json();
        // You can display a success message or perform any other actions here
    })
    .then(data => {
        var tag = document.getElementById('received');
        tag.innerHTML = data.message || "Sent successfully";
        
    })
    .catch(error => {
        // Handle error (optional)
        console.error('Error sending feedback:', error.message);
        // You can display an error message or perform any other actions here
    });
}

// Attach sendFeedback function to the form submission event
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', sendFeedback);

// Function to update the footer date dynamically
function updateFooterDate() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    
    // Update the content of the footer with the current year
    document.getElementById("footer-date").innerHTML = "&copy; " + currentYear + " Coffee Digital: All Right Reserved";
}

// Call the function to update the footer date once the page is loaded
window.onload = updateFooterDate;


// Function to parse URL parameters
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
    updateFooterDate(); // Update footer date as before
    handleAutomaticSearch(); // Perform automatic search based on URL parameter
};