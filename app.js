document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Kirim data ke Google Apps Script Web App
  fetch('https://script.google.com/macros/s/WEB_APP_URL/exec', {
    method: 'POST',
    body: JSON.stringify({ email: email, password: password }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      alert('Login berhasil');
      // Redirect atau logic lain
    } else {
      alert('Login gagal: ' + data.message);
    }
  })
  .catch(error => console.error('Error:', error));
});
