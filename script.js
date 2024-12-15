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
            //poruka 1
            // Play sound and display initial message after 1 second
            setTimeout(() => {
                const audio = new Audio('zvuk.mp3');
                audio.play();
                document.querySelector('.message.one').innerText = 'Jeco jesi li tu?';
                document.querySelector('.message.one').style.textAlign = 'left';
            }, 1000);

            //odgovara

            // Add event listener for send button
            document.querySelector('.send').addEventListener('click', function() {
                const message = document.querySelector('.send-input').value.trim();
                if (message !== '') {
                    if (message.toLowerCase() === 'da' || message.toLowerCase() === 'jesam') {
                        document.querySelector('.message.two').innerText = message;
                        document.querySelector('.message.two').style.textAlign = 'right';
                        setTimeout(() => {
                            const audio = new Audio('zvuk.mp3');
                            audio.play();
                            //poruka 2
                            document.querySelector('.message.three').innerText = 'Razmisljao sam o necemu ovih dana...';
                            document.querySelector('.message.three').style.textAlign = 'left';
                        }, 1000);
                    } else {
                        document.querySelector('.message.five').innerText = document.querySelector('.message.six').innerText;
                        document.querySelector('.message.five').style.textAlign = 'left';
                        document.querySelector('.message.six').innerText = message;
                        document.querySelector('.message.six').style.textAlign = 'right';
                    }
                    document.querySelector('.send-input').value = '';
                }
            });
        })
        .catch(error => console.error('Error loading chat:', error));
});
