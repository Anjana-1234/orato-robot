import { useEffect, useMemo, useRef, useState } from "react";

type ChatMsg = {
  role: "user" | "assistant" | "system";
  text: string;
};

declare global {
  interface Window {
    webkitSpeechRecognition?: any;
    SpeechRecognition?: any;
  }
}

function getRecognition(): any | null {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;

  const rec = new SR();
  rec.continuous = false;
  rec.interimResults = true;
  rec.lang = "en-US";
  return rec;
}

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;

  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 1;
  u.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// Offline “AI” fallback (no API). Replace later with real backend AI.
function localCoachReply(userText: string) {
  const t = userText.trim();
  if (!t) return "Say something and I will help you practice.";

  const tips: string[] = [];
  if (/\bi am go\b/i.test(t)) tips.push(`Try: "I am going"`);
  if (/\bhe go\b/i.test(t)) tips.push(`Try: "He goes"`);
  if (/\bshe go\b/i.test(t)) tips.push(`Try: "She goes"`);
  if (/\byesterday\b/i.test(t) && /\bgo\b/i.test(t)) tips.push(`Because you said "yesterday", use past tense: "went"`);

  const question = `Tell me more about that. Why do you think so?`;
  const praise = `Nice! Your sentence is understandable.`;

  return tips.length
    ? `${praise}\n\nSmall correction(s):\n- ${tips.join("\n- ")}\n\n${question}`
    : `${praise}\n\n${question}`;
}

export default function SpeakingCoach() {
  const recognition = useMemo(() => getRecognition(), []);
  const [supported, setSupported] = useState(true);

  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [textInput, setTextInput] = useState("");

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "system",
      text: "You are an English speaking coach. Keep answers short and friendly. Ask follow-up questions.",
    },
    {
      role: "assistant",
      text: "Hi! Click Start and speak in English. I will reply and help you improve.",
    },
  ]);

  const [autoSpeak, setAutoSpeak] = useState(true);
  const lastAssistantSpokenRef = useRef<string>("");

  useEffect(() => {
    if (!recognition) setSupported(false);
  }, [recognition]);

  const addUserAndReply = (userText: string) => {
    const assistantText = localCoachReply(userText);

    // ✅ single state update (prevents missing messages)
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "assistant", text: assistantText },
    ]);

    if (autoSpeak && assistantText && assistantText !== lastAssistantSpokenRef.current) {
      lastAssistantSpokenRef.current = assistantText;
      speak(assistantText);
    }
  };

  const startListening = () => {
    if (!recognition) return;

    setInterim("");
    setListening(true);

    recognition.onresult = (event: any) => {
      let full = "";
      let inter = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) full += transcript;
        else inter += transcript;
      }

      if (inter) setInterim(inter);

      if (full) {
        setInterim("");
        setListening(false);
        addUserAndReply(full.trim());
      }
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    try {
      recognition?.stop();
    } catch {}
    setListening(false);
  };

  const sendText = () => {
    const t = textInput.trim();
    if (!t) return;
    setTextInput("");
    addUserAndReply(t);
  };

  return (
    <div
      style={{
        borderRadius: 16,
        background: "#ffffff",
        border: "1px solid #e9e9e9",
        padding: 20,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
        <div>
          <h2 style={{ margin: 0 }}>Speaking Practice (AI Coach)</h2>
          <p style={{ margin: "6px 0 0", color: "#666" }}>
            Speak in English or type a message. The coach will reply and correct you.
          </p>
          {!supported && (
            <p style={{ marginTop: 8, color: "#b00020" }}>
              Speech recognition not supported in this browser. Use typing instead.
            </p>
          )}
        </div>

        <label style={{ display: "flex", alignItems: "center", gap: 8, userSelect: "none" }}>
          <input type="checkbox" checked={autoSpeak} onChange={(e) => setAutoSpeak(e.target.checked)} />
          Auto Speak
        </label>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <button
          onClick={startListening}
          disabled={!supported || listening}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #d8d8d8",
            background: listening ? "#f3f3f3" : "#e9fff1",
            cursor: listening ? "not-allowed" : "pointer",
            fontWeight: 600,
          }}
        >
          🎤 Start
        </button>

        <button
          onClick={stopListening}
          disabled={!supported || !listening}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #d8d8d8",
            background: !listening ? "#f3f3f3" : "#ffecec",
            cursor: !listening ? "not-allowed" : "pointer",
            fontWeight: 600,
          }}
        >
          ⏹ Stop
        </button>

        <button
          onClick={() => {
            setMessages((prev) => prev.slice(0, 2));
            setInterim("");
          }}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #d8d8d8",
            background: "#f7f7ff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          🧹 Clear Chat
        </button>
      </div>

      {listening && (
        <div style={{ marginTop: 10, color: "#0a6", fontWeight: 600 }}>
          Listening… {interim ? `“${interim}”` : ""}
        </div>
      )}

      <div
        style={{
          marginTop: 16,
          background: "#fbfbfb",
          border: "1px solid #eee",
          borderRadius: 14,
          padding: 14,
          height: 280,
          overflowY: "auto",
        }}
      >
        {messages
          .filter((m) => m.role !== "system")
          .map((m, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  maxWidth: "78%",
                  padding: "10px 12px",
                  borderRadius: 12,
                  whiteSpace: "pre-wrap",
                  background: m.role === "user" ? "#e9fff1" : "#ffffff",
                  border: "1px solid #eaeaea",
                }}
              >
                <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>
                  {m.role === "user" ? "You" : "Coach"}
                </div>
                {m.text}
              </div>
            </div>
          ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type in English…"
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #d8d8d8",
            outline: "none",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendText();
          }}
        />
        <button
          onClick={sendText}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #d8d8d8",
            background: "#e9fff1",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Send
        </button>
      </div>

      <p style={{ marginTop: 10, color: "#777", fontSize: 12 }}>
        Note: Speech works best in Chrome/Edge. Current coach replies offline (no API). You can connect real AI later.
      </p>
    </div>
  );
}