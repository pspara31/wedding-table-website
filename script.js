const password = "event123"; // Example password for validation
const tableData = {
    "John Doe": {
        "table": 5,
        "meal": "Vegetarian"
    },
    "Jane Smith": {
        "table": 3,
        "meal": "Chicken"
    }
};

// Show password prompt when clicking the button
document.getElementById("login-btn").addEventListener("click", () => {
    document.getElementById("password-prompt").style.display = "flex";
});

// Validate password and show name prompt
document.getElementById("submit-password").addEventListener("click", () => {
    const enteredPassword = document.getElementById("password-input").value;
    if (enteredPassword === password) {
        document.getElementById("password-prompt").style.display = "none";
        document.getElementById("name-prompt").style.display = "flex";
    } else {
        alert("Incorrect password!");
    }
});

// Store user name and fetch meal selection
document.getElementById("submit-name").addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const fullName = `${firstName} ${lastName}`;
    
    if (tableData[fullName]) {
        // Update meal selection page
        document.getElementById("meal-selection-page").style.display = "block";
        document.getElementById("table-number").textContent = `Table Number: ${tableData[fullName].table}`;
        document.getElementById("meal-selection").textContent = `Meal Selection: ${tableData[fullName].meal}`;
        document.getElementById("name-prompt").style.display = "none";
    } else {
        alert("No data found for this name.");
    }
});
