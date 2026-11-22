const password = document.getElementById('lab-password');
const toggle = document.getElementById('lab-password-toggle');

function setPasswordVisible(visible) {
  password.type = visible ? 'text' : 'password';
  toggle.textContent = visible ? 'Passwort ausblenden' : 'Passwort anzeigen';
}

toggle.addEventListener('click', () => setPasswordVisible(password.type === 'password'));
password.form.addEventListener('submit', () => setPasswordVisible(false));
window.addEventListener('pagehide', () => setPasswordVisible(false));
toggle.hidden = false;
