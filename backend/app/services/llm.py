import openai

openai.api_key = "YOUR_API_KEY"

def generate_answer(question, context=""):
    prompt = f"""
    You are an interview assistant.
    Answer concisely.

    Question: {question}
    Context: {context}
    """

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response["choices"][0]["message"]["content"]