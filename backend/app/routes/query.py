from fastapi import APIRouter
from app.services.llm import generate_answer
from app.services.detector import is_question

router = APIRouter()

@router.post("/")
def query(data: dict):
    text = data.get("text")

    if not is_question(text):
        return {"answer": None}

    answer = generate_answer(text)
    return {"answer": answer}