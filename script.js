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

            // Play sound and display initial message after 1 second
            setTimeout(() => {
                const audio = new Audio('zvuk.mp3');
                audio.play();
                document.querySelector('.message.six').innerText = 'Jeco jesi li tu?';
                document.querySelector('.message.six').style.textAlign = 'left';
            }, 1000);

            // Add event listener for send button
            document.querySelector('.send').addEventListener('click', function() {
                const message = document.querySelector('.send-input').value;
                if (message.trim() !== '') {
                    document.querySelector('.message.five').innerText = 'Jeco jesi li tu?';
                    document.querySelector('.message.five').style.textAlign = 'left';
                    document.querySelector('.message.six').innerText = message;
                    document.querySelector('.message.six').style.textAlign = 'right';
                    document.querySelector('.send-input').value = '';
                }
            });
        })
        .catch(error => console.error('Error loading chat:', error));
});
