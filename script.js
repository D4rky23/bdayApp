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
    for (let i = 0; i < 250; i++) {
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
document.addEventListener('DOMContentLoaded', function () {
    const message = "La Multi Ani, Mihaela! ❤️❤️";
    const messageElement = document.getElementById('birthdayMessage');
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeMessage, 100); // Controlează viteza de scriere
        }
    }

    typeMessage(); // Pornește efectul de scriere
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

// Create rainbow element
function createRainbow() {
  const rainbowContainer = document.createElement('div');
  rainbowContainer.className = 'rainbow';
  
  // Create each color layer
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  
  colors.forEach(color => {
    const layer = document.createElement('div');
    layer.className = `rainbow-layer ${color}`;
    rainbowContainer.appendChild(layer);
  });
  
  // Insert the rainbow before the birthday message
  const birthdayMessage = document.getElementById('birthdayMessage');
  document.body.insertBefore(rainbowContainer, birthdayMessage);
}

// Call this function to create the rainbow
createRainbow();

document.getElementById('surpriseButton').addEventListener('click', function() {
    // Adaugă sunet de artificii
    const sound = new Audio('https://www.fesliyanstudios.com/play-mp3/5672');
    sound.volume = 0.5;
    sound.play().catch(e => console.log("Nu s-a putut reda sunetul: ", e));
    
    // Creează artificii
    createMassiveFireworks();
    
    // Creează text festiv care apare aleatoriu
    createFestiveTexts();
    
    // Dezactivează butonul temporar pentru a preveni spam-ul
    this.disabled = true;
    setTimeout(() => {
        this.disabled = false;
    }, 3000);
    
    // Adaugă efect de flash
    flashScreen();
    
    // Adaugă efect de tremur
    setTimeout(() => {
        shakeScreen();
    }, 100);
});

function createMassiveFireworks() {
    // Determine the number of fireworks based on screen size
    const isMobile = window.innerWidth <= 768;
    const numberOfFireworks = isMobile ? 5 : 15; // Reduced number for mobile
    
    // Lansăm mai multe artificii
    for (let i = 0; i < numberOfFireworks; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 300); // Lansează artificii la intervale de 300ms
    }
}

function createFirework() {
    // Poziție aleatoare pentru artificiu
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.7);
    
    // Culori pentru artificii
    const colors = [
        '#ff0000', '#00ff00', '#0000ff', '#ffff00', 
        '#ff00ff', '#00ffff', '#ff9900', '#9900ff'
    ];
    
    // Creează artificiul central
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    document.body.appendChild(firework);
    
    // Animația de explozie
    setTimeout(() => {
        // Șterge artificiul central
        firework.remove();
        
        // Determine the number of particles based on screen size
        const isMobile = window.innerWidth <= 768;
        const numberOfParticles = isMobile ? 20 : 40; // Reduced number for mobile
        
        // Creează particule pentru explozie
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Poziție inițială la locul exploziei
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            // Culoare aleatoare pentru fiecare particulă
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = color;
            
            // Direcție aleatoare pentru particulă
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 150;
            const xDistance = Math.cos(angle) * distance;
            const yDistance = Math.sin(angle) * distance;
            
            // Setează variabile CSS pentru animație
            particle.style.setProperty('--x', `${xDistance}px`);
            particle.style.setProperty('--y', `${yDistance}px`);
            
            document.body.appendChild(particle);
            
            // Curăță particula după animație
            setTimeout(() => {
                particle.remove();
            }, 1500);
        }
    }, 300);
}

function createFestiveTexts() {
    const texts = [
        "La Mulți Ani!", "Woohoo!", "Surpriză!", "Te iubesc!", 
        "❤️", "✨", "🎂", "🎉", "🎁", "🥳"
    ];
    
    // Determine the number of texts based on screen size
    const isMobile = window.innerWidth <= 768;
    const numberOfTexts = isMobile ? 5 : 15; // Reduced number for mobile
    
    // Creează texte festive aleatorii
    for (let i = 0; i < numberOfTexts; i++) {
        setTimeout(() => {
            const text = document.createElement('div');
            text.className = 'festive-text';
            
            // Poziție aleatoare pe ecran
            text.style.left = `${Math.random() * 80 + 10}%`;
            text.style.top = `${Math.random() * 80 + 10}%`;
            
            // Text aleatoriu din lista noastră
            text.textContent = texts[Math.floor(Math.random() * texts.length)];
            
            // Determine the font size based on screen size
            const fontSize = isMobile ? 20 + Math.random() * 20 : 30 + Math.random() * 30;
            text.style.fontSize = `${fontSize}px`;
            
            document.body.appendChild(text);
            
            // Curăță textul după animație
            setTimeout(() => {
                text.remove();
            }, 2000);
        }, i * 200);
    }
}

function shakeScreen() {
    const isMobile = window.innerWidth <= 768;
    const shakeIntensity = isMobile ? 5 : 10; // Reduced shake intensity for mobile
    
    document.body.classList.add('shake-effect');
    
    // Adjust the shake animation keyframes
    const styleSheet = document.styleSheets[0];
    const keyframes = `@keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-${shakeIntensity}px); }
        20%, 40%, 60%, 80% { transform: translateX(${shakeIntensity}px); }
    }`;
    
    // Insert the new keyframes
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    
    setTimeout(() => {
        document.body.classList.remove('shake-effect');
        
        // Remove the inserted keyframes
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            if (styleSheet.cssRules[i].name === 'shake') {
                styleSheet.deleteRule(i);
                break;
            }
        }
    }, 1000);
}

function flashScreen() {
    const flash = document.createElement('div');
    flash.className = 'screen-flash';
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.remove();
    }, 500);
}
