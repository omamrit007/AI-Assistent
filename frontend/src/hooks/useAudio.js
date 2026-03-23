export async function startListening(onText) {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = async (event) => {
    const blob = event.data;

    const formData = new FormData();
    formData.append("file", blob);

    const res = await fetch("http://localhost:8000/audio/transcribe", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    onText(data.text);
  };

  mediaRecorder.start(2000); // every 2 sec
}