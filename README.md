# AI Chat Assistant

A modern web-based AI chat assistant built with FastAPI and vanilla JavaScript.

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


## Development

- Backend: FastAPI with Python
- Frontend: Vanilla JavaScript, HTML, CSS
- AI: GitHub Models API
