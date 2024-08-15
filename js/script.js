const images = document.querySelectorAll('.image');
const countdownElement = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const container = document.getElementById('container');
let currentIndex = 0;
let countdown = 6;
let interval;
    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
        countdown = 6;
    }

    function startLoop() {
        startButton.style.display = 'none';
        container.style.display = 'block';
        images[currentIndex].classList.add('active');

        interval = setInterval(() => {
            countdown--;
            if (countdown <= 0) {
                showNextImage();
            }
                countdownElement.textContent = countdown;
        }, 1000);
    }

startButton.addEventListener('click', startLoop);