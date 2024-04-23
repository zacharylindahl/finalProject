function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var mealPlan = {
        Monday: {
            Breakfast: document.getElementById("monday-breakfast").value,
            Snack: document.getElementById("monday-snack").value,
            Lunch: document.getElementById("monday-lunch").value,
            Dinner: document.getElementById("monday-dinner").value
        },
        Tuesday: {
            Breakfast: document.getElementById("tuesday-breakfast").value,
            Snack: document.getElementById("tuesday-snack").value,
            Lunch: document.getElementById("tuesday-lunch").value,
            Dinner: document.getElementById("tuesday-dinner").value
        },
		Wednesday: {
            Breakfast: document.getElementById("wednesday-breakfast").value,
            Snack: document.getElementById("wednesday-snack").value,
            Lunch: document.getElementById("wednesday-lunch").value,
            Dinner: document.getElementById("wednesday-dinner").value
        },
		Thursday: {
            Breakfast: document.getElementById("thursday-breakfast").value,
            Snack: document.getElementById("thursday-snack").value,
            Lunch: document.getElementById("thursday-lunch").value,
            Dinner: document.getElementById("thursday-dinner").value
        },
		Friday: {
            Breakfast: document.getElementById("friday-breakfast").value,
            Snack: document.getElementById("friday-snack").value,
            Lunch: document.getElementById("friday-lunch").value,
            Dinner: document.getElementById("friday-dinner").value
        },
		Saturday: {
            Breakfast: document.getElementById("saturday-breakfast").value,
            Snack: document.getElementById("saturday-snack").value,
            Lunch: document.getElementById("saturday-lunch").value,
            Dinner: document.getElementById("saturday-dinner").value
        },
		Sunday: {
            Breakfast: document.getElementById("sunday-breakfast").value,
            Snack: document.getElementById("sunday-snack").value,
            Lunch: document.getElementById("sunday-lunch").value,
            Dinner: document.getElementById("sunday-dinner").value
        },
    };


    var html = "<!DOCTYPE html><html><head><title>Meal Plan</title></head><body>";
    html += "<h1>Meal Plan for " + name + "</h1>";
    html += "<p>Email: " + email + "</p>";
    html += "<p>Goal for the week: " + goal + "</p>";
    html += "<table border='1'><tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Dinner</th></tr>";
    for (var day in mealPlan) {
        html += "<tr><td>" + day + "</td><td>" + mealPlan[day].Breakfast + "</td><td>" + mealPlan[day].Snack + "</td><td>" + mealPlan[day].Lunch + "</td><td>" + mealPlan[day].Dinner + "</td></tr>";
    }
    html += "</table>";
    html += "</body></html>";


    var newWindow = window.open();
    newWindow.document.write(html);
}


function validateEmail(email) {

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
