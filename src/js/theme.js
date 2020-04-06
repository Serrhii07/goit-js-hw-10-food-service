const switchRef = document.querySelector('input.js-switch-input');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkTheme();

switchRef.addEventListener('change', handleCheckbox);

function handleCheckbox(e) {
  if (e.target.checked) {
    setDarkTheme();
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    setLightTheme();
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

function checkTheme() {
  const themeStatus = localStorage.getItem('Theme');

  if (themeStatus === Theme.DARK) {
    setDarkTheme();
    switchRef.checked = true;
  } else {
    setLightTheme();
  }
}

function setDarkTheme() {
  bodyRef.classList.add('dark-theme');
  bodyRef.classList.remove('light-theme');
}

function setLightTheme() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
}
