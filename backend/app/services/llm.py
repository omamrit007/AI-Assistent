import google.generativeai as genai
from app.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-1.5-flash")

def generate_answer(question, context=""):
    prompt = f"""
    You are an interview assistant.
    Answer concisely.

    Question: {question}
    Context: {context}
    """

    response = model.generate_content(prompt)

    return response.text