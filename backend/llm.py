import os
import openai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize OpenAI client for GitHub Models
openai.api_key = os.environ.get("GITHUB_TOKEN", "")
openai.api_base = "https://models.inference.ai.azure.com"

def call_llm(prompt: str, system_message: str = "You are a helpful and friendly AI assistant."):
    """
    Send a prompt to the AI model and return the response.

    Args:
        prompt: User's message
        system_message: Instructions for AI behavior

    Returns:
        AI response text
    """
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o",  # Use available model
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=500
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"AI API error: {str(e)}")
        return "I'm having trouble connecting right now. Please try again later."
