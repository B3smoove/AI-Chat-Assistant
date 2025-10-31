# Create .gitignore file
cat > .gitignore << EOF
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
ENV/
env.bak/
venv.bak/

# Environment variables
.env
.env.local
.env.production

# VS Code
.vscode/
*.code-workspace

# OS
.DS_Store
Thumbs.db

# Backend specific
backend/instance/
backend/.pytest_cache/
EOF
