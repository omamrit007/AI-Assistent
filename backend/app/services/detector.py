def is_question(text: str) -> bool:
    triggers = ["what", "why", "how", "explain", "?"]
    return any(t in text.lower() for t in triggers)