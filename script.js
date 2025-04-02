// Sample data for table and meal selection
const data = {
  "John Doe": {
    "tableNumber": 12,
    "mealSelection": "Chicken Parmesan"
  },
  "Jane Smith": {
    "tableNumber": 8,
    "mealSelection": "Vegetarian Lasagna"
  }
};

// Event listener for password submission
document.getElementById("password-submit").addEventListener("click", function() {
  const password = document.getElementById("password").value;
  if (password === "yourpassword") {
    document.getElementById("password-container").classList.add("hidden");
    document.getElementById("name-container").classList.remove("hidden");
  } else {
    alert("Incorrect password!");
  }
});

// Event listener for name submission
document.getElementById("name-submit").addEventListener("click", function() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const fullName = firstName + " " + lastName;

  if (data[fullName]) {
    const tableInfo = data[fullName];
    document.getElementById("table-number").textContent = `Table Number: ${tableInfo.tableNumber}`;
    document.getElementById("meal-selection").textContent = `Meal Selection: ${tableInfo.mealSelection}`;

    document.getElementById("name-container").classList.add("hidden");
    document.getElementById("table-info").classList.remove("hidden");
    document.getElementById("qr-code").classList.remove("hidden");
  } else {
    alert("No information found for this name!");
  }
});
