const rate = document.querySelectorAll('.puntuation');

document.querySelector('.submit').addEventListener('click', () => rate_me());

rate.forEach((rate) => {
    rate.addEventListener("click", () => {
        let counter = rate.textContent;
        span.textContent = counter;
    })
})

function rate_me() {
    document.querySelector('.result').style.display = 'block';
    document.querySelector('.main').style.display = 'none';
}

