const openTab = (tab) => {
  document.querySelectorAll('.tab').forEach(item => item.style.background = "#151515");
  document.querySelectorAll('.pages').forEach(item => item.style.display = "none");

  document.getElementById(`${tab}-tab`).style.background = '#2D2B30';
  document.getElementById(`${tab}-page`).style.display = 'block';
}

const generatePassword = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

let text = generatePassword(25);

const print = (l = 0) => {
  document.getElementById('print').innerHTML += text[l];
  if (l + 1 < text.length) {
    setTimeout(() => print(l + 1), 200);
  }
};

const remove = () => {
  const printElement = document.getElementById('print');
  printElement.innerHTML = printElement.innerHTML.slice(0, -1);

  if (printElement.innerHTML.length) {
    setTimeout(remove, 100);
  } else {
    printElement.classList.add('rainbow-text');
    setTimeout(print, 200);
  }
};

setTimeout(remove, 1500);

document.addEventListener('keydown', (e) => {
  const inputElement = document.getElementById('input');
  const inputText = inputElement.innerHTML.replace(/&nbsp;/g, '');

  if (e.key === 'Backspace' && inputText.length) {
    e.preventDefault();
    inputElement.innerHTML = inputText.slice(0, -1);
  }
});

document.addEventListener('keypress', (e) => {
  const inputElement = document.getElementById('input');
  const inputText = inputElement.innerHTML.replace(/&nbsp;/g, '');

  if (e.key === 'Enter' && inputText.length > 0) {
    document.getElementById('perm').hidden = false;
    inputElement.innerHTML = '';
    setTimeout(() => document.getElementById('perm').hidden = true, 4000);
    e.preventDefault();
  } else if (!['Enter', 'Escape'].includes(e.key) && !(e.keyCode >= 35 && e.keyCode <= 40) && inputText.length < 20) {
    inputElement.innerHTML += e.key === ' ' ? '&nbsp;' : e.key;
  }
});
