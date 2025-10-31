class ChatApp {
    constructor() {
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Backend configuration
        this.BASE_URL = "http://localhost:5001";
        this.API_ENDPOINT = `${this.BASE_URL}/chat`;
        
        // Set welcome message time
        this.setWelcomeTime();
        this.initializeEventListeners();
    }
    
    setWelcomeTime() {
        const welcomeTime = document.getElementById("welcome-time");
        if (welcomeTime) {
            welcomeTime.textContent = new Date().toLocaleTimeString();
        }
    }
    
    initializeEventListeners() {
        // Form submission
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Enter key support
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
        
        // Auto-focus input
        this.input.focus();
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        
        const messageText = this.input.value.trim();
        if (!messageText) return;
        
        this.setLoading(true);
        this.appendMessage(messageText, "user");
        this.input.value = '';
        
        try {
            const reply = await this.callAPI(messageText);
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage(
                "Sorry, I'm having trouble connecting to the AI service. Please check if the backend server is running.", 
                "error"
            );
        } finally {
            this.setLoading(false);
        }
    }
    
    async callAPI(message) {
        const response = await fetch(this.API_ENDPOINT, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ message })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.response;
    }
    
    appendMessage(text, role) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${role}`;
        messageElement.innerHTML = `
            <div class="message-content">
                <span class="message-text">${this.escapeHtml(text)}</span>
                <span class="message-time">${new Date().toLocaleTimeString()}</span>
            </div>
        `;
        
        this.messages.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    scrollToBottom() {
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    setLoading(isLoading) {
        this.sendButton.disabled = isLoading;
        this.input.disabled = isLoading;
        this.sendButton.textContent = isLoading ? "Sending..." : "Send";
        
        if (!isLoading) {
            this.input.focus();
        }
    }
}

// Initialize the chat app when page loads
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
