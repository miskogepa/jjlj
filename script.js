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

            // Add event listener for send button
            document.querySelector('.send').addEventListener('click', function() {
                const message = document.querySelector('.send-input').value;
                document.querySelector('.message.six').innerText = message;
                document.querySelector('.send-input').value = '';
            });
        })
        .catch(error => console.error('Error loading chat:', error));
});
