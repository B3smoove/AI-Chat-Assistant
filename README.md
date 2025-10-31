# My AI Chat Assistant

Welcome to my personal AI Chat Assistant project! This is a modern web-based AI chat application I built to explore full-stack development, integrating a FastAPI backend with a clean vanilla JavaScript frontend. It leverages the GitHub Models API for AI responses, providing a seamless chat experience.

## Overview of My Process

This project was developed as part of my learning journey in building AI-powered applications. Here's a summary of the steps I took:

### 1. Project Planning and Setup
- Conceptualized the idea of a simple yet functional AI chat assistant.
- Set up the project structure with separate backend and frontend directories.
- Chose FastAPI for the backend due to its speed and ease of use with Python, and vanilla JavaScript for the frontend to keep it lightweight without frameworks.

### 2. Backend Development
- Built the API using FastAPI, including endpoints for health checks, chat interactions, and CORS middleware for frontend integration.
- Integrated the LLM module to connect with GitHub Models API, handling authentication via environment variables.
- Implemented proper error handling, logging, and request validation using Pydantic models.

### 3. Frontend Development
- Created a responsive chat interface with HTML, CSS, and JavaScript.
- Implemented real-time message handling, including user input, API calls, and dynamic message display.
- Added features like loading states, keyboard shortcuts (Enter to send), and accessibility attributes.

### 4. Testing and Integration
- Tested the backend API endpoints locally.
- Ensured frontend-backend communication worked smoothly.
- Handled edge cases like empty messages and API errors.

### 5. Version Control and Deployment Preparation
- Initialized Git in the project directory.
- Added all files to staging, committed with an initial message.
- Set up GitHub repository as remote origin and pushed the code to the main branch.
- Prepared documentation and setup instructions for others to run the project.

Throughout the process, I focused on clean code, modularity, and best practices. The project demonstrates my skills in Python web development, JavaScript, API integration, and basic DevOps tasks like Git and environment management.

## Quick Start

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# Edit the .env file and add your GitHub token
```

### 2. Get GitHub Token

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Generate a new classic token with `repo` scope
3. Copy the token and add it to `backend/.env`:
   ```
   GITHUB_TOKEN=your_token_here
   ```

### 3. Run Backend

```bash
cd backend
python api.py
```

The API will be available at `http://localhost:5000`

### 4. Run Frontend

Open `frontend/index.html` in your web browser, or use VS Code's Live Server extension.

## API Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `POST /chat` - Send chat messages

## Development

- Backend: FastAPI with Python
- Frontend: Vanilla JavaScript, HTML, CSS
- AI: GitHub Models API
