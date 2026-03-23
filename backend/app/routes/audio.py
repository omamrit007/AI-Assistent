from fastapi import APIRouter, UploadFile
from app.services.stt import transcribe_audio

router = APIRouter()

@router.post("/transcribe")
async def transcribe(file: UploadFile):
    audio_bytes = await file.read()
    text = transcribe_audio(audio_bytes)
    return {"text": text}