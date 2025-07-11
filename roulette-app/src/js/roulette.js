const numbersContainer = document.querySelector('.numbers');
const resultEl = document.getElementById('result');
const numberDivs = [];

// create number elements 1-10
for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  div.textContent = i + 1;
  const angle = i * 36;
  div.style.transform = `rotate(${angle}deg) translate(0, -140px) rotate(-${angle}deg)`;
  numbersContainer.appendChild(div);
  numberDivs.push(div);
}

let spinning = false;

function spin() {
  if (spinning) return;
  spinning = true;
  resultEl.textContent = '';
  numberDivs.forEach(div => div.classList.remove('active'));
  const randomIndex = Math.floor(Math.random() * 10); // 0-9
  const spins = 5; // number of full spins
  const finalDeg = -(spins * 360 + randomIndex * 36);
  const roulette = document.getElementById('roulette');
  roulette.style.transition = 'transform 2s cubic-bezier(0.33, 1, 0.68, 1)';
  roulette.style.transform = `rotate(${finalDeg}deg)`;
  setTimeout(() => {
    spinning = false;
    resultEl.textContent = `Result: ${randomIndex + 1}`;
    numberDivs[randomIndex].classList.add('active');
  }, 2000);
}

document.getElementById('roulette').addEventListener('click', spin);
