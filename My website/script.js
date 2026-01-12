function showMessage() {
    document.getElementById("message").innerText = "Hello! You clicked the button 😄";
}

function changeColor() {
    const colors = ["#f2f2f2", "#ffcccc", "#ccffcc", "#cce5ff", "#fff3cd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}
