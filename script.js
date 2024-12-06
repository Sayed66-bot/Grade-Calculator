// Function to calculate the grade based on marks
function calculateGrade() {
    // Get the value from the input field
    const marks = parseFloat(document.getElementById('marks').value);

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("grade").innerText = "Please enter a valid number between 0 and 100.";
        return; // Exit the function if invalid input
    }

    // Initialize the grade variable
    let grade = "";

    // Calculate grade based on ranges
    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "A-";
    } else if (marks >= 60) {
        grade = "B+";
    } else {
        grade = "Fail";
    }

    // Display the result
    document.getElementById("grade").innerText = `Grade: ${grade}`;
}
