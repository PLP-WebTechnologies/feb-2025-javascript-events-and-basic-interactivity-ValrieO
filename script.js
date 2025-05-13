// Button click
document.getElementById('clickMeBtn').addEventListener('click', () => {
  alert('Button was clicked!');
});

// Keypress detection
document.getElementById('keyInput').addEventListener('keydown', (e) => {
  console.log('Key pressed: ' + e.key);
});

// Change text button
document.getElementById('changeTextBtn').addEventListener('click', () => {
  document.getElementById('changeTextBtn').textContent = "Text Changed!";
});

// Image gallery
let images = [
  "https://via.placeholder.com/300/FF5733",
  "https://via.placeholder.com/300/33FF57",
  "https://via.placeholder.com/300/3357FF"
];
let index = 0;

document.getElementById('nextImageBtn').addEventListener('click', () => {
  index = (index + 1) % images.length;
  document.getElementById('galleryImage').src = images[index];
});

// Tabs
let tabBtns = document.querySelectorAll('.tabBtn');
let tabContent = document.getElementById('tabContent');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabContent.textContent = `Content for Tab ${btn.dataset.tab}`;
  });
});

// Form Validation
document.getElementById('sampleForm').addEventListener('submit', (e) => {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (!email.includes('@')) {
    alert('Invalid email!');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  alert('Form submitted successfully!');
});
