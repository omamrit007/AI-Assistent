from fastapi import FastAPI
from app.routes import audio, query

app = FastAPI()

app.include_router(audio.router, prefix="/audio")
app.include_router(query.router, prefix="/query")

@app.get("/")
def root():
    return {"message": "AI Copilot Running 🚀"}