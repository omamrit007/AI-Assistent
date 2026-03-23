from faster_whisper import WhisperModel
import tempfile

model = WhisperModel("base", compute_type="int8")

def transcribe_audio(audio_bytes):
    with tempfile.NamedTemporaryFile(delete=False) as f:
        f.write(audio_bytes)
        temp_path = f.name

    segments, _ = model.transcribe(temp_path)

    text = " ".join([seg.text for seg in segments])
    return text