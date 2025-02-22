const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.querySelector('.theme-toggle .sun-icon');
const moonIcon = document.querySelector('.theme-toggle .moon-icon');
const body = document.body;

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLightTheme = body.classList.contains('light-theme');
  body.setAttribute('data-theme', isLightTheme ? 'light' : 'dark');
  sunIcon.style.opacity = isLightTheme ? '0' : '1';
  moonIcon.style.opacity = isLightTheme ? '1' : '0';
});

// Hamburger Menu Functionality
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

// Scroll Event Listener
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// Close Mobile Menu on Item Click
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
