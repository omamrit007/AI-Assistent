import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import { startListening } from "./hooks/useAudio";
import { sendText } from "./services/api";

function App() {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    startListening(async (text) => {
      const res = await sendText(text);
      if (res.answer) setAnswer(res.answer);
    });
  }, []);

  return <Overlay answer={answer} />;
}

export default App;