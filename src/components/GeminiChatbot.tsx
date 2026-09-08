import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GeminiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    { text: "Halo! Ada yang bisa saya bantu dengan masalah sanitasi Anda?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" as const }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();
      setMessages([...newMessages, { text: data.text, sender: "bot" as const }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Maaf, terjadi kesalahan.", sender: "bot" as const }]);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
      >
        <MessageSquare />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-40 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-emerald-100 flex flex-col h-[400px]"
          >
            <div className="p-4 border-b border-emerald-100 flex justify-between items-center bg-emerald-50 rounded-t-2xl">
              <h3 className="font-bold text-emerald-900">Tanya Mitra Bersih</h3>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 text-emerald-600" /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3" ref={chatContainerRef}>
              {messages.map((m, i) => (
                <div key={i} className={`p-3 rounded-lg text-sm ${m.sender === "user" ? "bg-emerald-100 self-end ml-auto" : "bg-slate-100 self-start"}`}>
                  {m.text}
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-emerald-100 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 p-2 border border-emerald-200 rounded-lg text-sm"
              />
              <button onClick={handleSend} className="bg-emerald-600 text-white p-2 rounded-lg"><Send className="w-4 h-4" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
