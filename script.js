// script.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.chat-message-input input');
    const sendButton = document.querySelector('.chat-message-input button');
    const chatHistory = document.querySelector('.chat-history');

    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = input.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'today');
            messageElement.textContent = message;
            chatHistory.appendChild(messageElement);
            input.value = '';
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }
    }
});
