const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const teamControlRef = document.querySelector('#theme-switch-toggle');

teamControlRef.addEventListener('change', changeTheme);

const saveTheme = localStorage.getItem('theme');
if (saveTheme === JSON.stringify(Theme.LIGHT)) {
  themeLight();
} else {
  themeDark();
  teamControlRef.setAttribute('checked', 'true');
}

function changeTheme(event) {
  const values = event.target.checked;
  if (values === true) {
    themeDark();
  }
  if (values === false) {
    themeLight();
  }
}
function themeDark(event) {
  bodyRef.classList.remove(`${Theme.LIGHT}`);
  bodyRef.classList.add(`${Theme.DARK}`);
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}

function themeLight(event) {
  bodyRef.classList.remove(`${Theme.DARK}`);
  bodyRef.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}
