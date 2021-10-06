const addButton = document.getElementById("add-button");
//const removeButton = document.getElementById("remove-button");
const foodInput = document.getElementById("food-input");
const calorieInput = document.getElementById("calorie-input");

//var totalCalories = 0;
//appendItem("list", "Total Calories: " + totalCalories.toString());

// this function is called when the add item button is clicked
addButton.onclick = function() {
    // check if the text boxes actually contain text
    if (foodInput.value != "" && calorieInput.value != "")
    {
        // append text to the list
        appendItem("list", foodInput.value + " - " + calorieInput.value);

        // add to total calories
        //totalCalories = totalCalories + Number(calorieInput.value);
    }
    else
    {
        // error handling
        alert("you must enter a value");
    }
}

// this function is for appending items to unordered list
function appendItem(listid, content) {
    var ul = document.getElementById(listid);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(content));
    ul.appendChild(li);
  }