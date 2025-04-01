function updateTimer() {
    const birthday = new Date('2025-04-13T00:00:00');
    const now = new Date();
    const timeDiff = birthday.getTime() - now.getTime();

    if (timeDiff <= 0) {
        document.getElementById('timer').innerHTML = "It's her birthday!";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
}

function updateAge() {
    const birthday = new Date('2004-04-13T00:00:00');
    const now = new Date();
    let age = now.getFullYear() - birthday.getFullYear();
    const monthDiff = now.getMonth() - birthday.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthday.getDate())) {
        age--;
    }

    document.getElementById('age').innerHTML = `Age: ${age} years`;
}

setInterval(updateTimer, 1000);
updateAge();

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const music = document.getElementById('backgroundMusic');

    // Autoplay music
    music.play();

    function createHeart() {
        console.log("Creating a heart!"); // Add this line for debugging
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heart.style.setProperty('--random-x', Math.random() * 200 - 100 + 'vw');
        heart.innerText = '❤️'; // Folosim un emoji temporar
        heart.style.background = 'none'; // Dezactivăm fundalul imagine
        document.body.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";

        const randomX = Math.random() * 200 - 100 + "vw";
        confetti.style.setProperty('--random-x', randomX);

        body.appendChild(confetti);

        confetti.addEventListener('animationend', function() {
            confetti.remove();
        });
    }

    // Check if the setInterval is running
    console.log("setInterval is running"); // Add this line for debugging
    setInterval(createHeart, 100);
    setInterval(createConfetti, 200);
});

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heart.style.setProperty('--random-x', Math.random() * 200 - 100 + 'vw');
        heart.innerText = '❤️'; // Folosim un emoji pentru testare
        document.body.appendChild(heart);

        console.log('Heart created:', heart); // Mesaj de depanare

        heart.addEventListener('animationend', () => {
            heart.remove();
            console.log('Heart removed'); // Mesaj de depanare
        });
    }

    setInterval(createHeart, 1000); // Creăm o inimă la fiecare secundă pentru testare
});

function explodeConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = Math.random() * 100 + "vh";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";

        // Setăm o direcție aleatorie pentru confetti
        const randomX = Math.random() * 200 - 100 + "px";
        const randomY = Math.random() * 200 - 100 + "px";
        confetti.style.setProperty('--random-x', randomX);
        confetti.style.setProperty('--random-y', randomY);

        document.body.appendChild(confetti);

        // Eliminăm confetti-ul după terminarea animației
        confetti.addEventListener('animationend', function () {
            confetti.remove();
        });
    }
}

// Lansează confetti la încărcarea paginii
document.addEventListener('DOMContentLoaded', explodeConfetti);

function typeMessage(message, elementId, speed) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index < message.length) {
            element.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Lansează efectul de scriere
document.addEventListener('DOMContentLoaded', function() {
    typeMessage("La Multi Ani, Mihaela! 🎉", "birthdayMessage", 100);
});

function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = Math.random() * 5 + 3 + "s";
        document.body.appendChild(star);
    }
}

// Creează stele la încărcarea paginii
document.addEventListener('DOMContentLoaded', createStars);
