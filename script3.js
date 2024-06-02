const text = document.querySelector(".sec-txt");

const textload = () => {
    setTimeout(() => {
        text.textContent = "DataAnalyst"
    }, 0);
    setTimeout(() => {
        text.textContent = "WebDeveloper"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 8000);
    
}

textload();
setInterval(textload, 12000);