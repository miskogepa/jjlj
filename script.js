document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'Jelena' && password === 'Jeco') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('card-container').style.display = 'grid';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('dugme3').addEventListener('click', function() {
    fetch('kk.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('chat-container').innerHTML = data;
            document.getElementById('chat-container').style.display = 'flex';
            document.getElementById('card-container').style.display = 'none';
        })
        .catch(error => console.error('Error loading chat:', error));
});
