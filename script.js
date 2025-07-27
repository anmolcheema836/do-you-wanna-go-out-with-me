// Get references to the buttons
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');

// Function to redirect to the 'yes.html' page
function nextPage() {
    window.location.href = "yes.html";
}

// Function to move the 'No' button randomly
function moveButton() {
    // Get the dimensions of the container and the button
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    // Calculate the maximum possible positions
    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;

    // Generate random positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position to the 'No' button
    noButton.style.position = 'absolute'; // This is crucial for positioning
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Event Listeners
yesButton.addEventListener('click', nextPage);

// For desktop users with a mouse
noButton.addEventListener('mouseover', moveButton);

// For mobile users (touch), move the button on click
noButton.addEventListener('click', moveButton);