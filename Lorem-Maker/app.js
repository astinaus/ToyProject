const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', async function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const data = await fetch('./text.json');
  const text = await data.json();

  const value = parseInt(amount.value);

  if (isNaN(value) || value < 0 || value > 9) {
    const random = Math.floor(Math.random() * Object.keys(text).length) + 1;
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    result.innerHTML = '';
    for (let i = 0; i < value; i++) {
      const random = Math.floor(Math.random() * Object.keys(text).length) + 1;
      result.innerHTML += `<p class="result">${text[random]}</p>`;
    }
  }
});
