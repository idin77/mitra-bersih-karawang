import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export default function GeminiChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', text: "Halo! Ada yang bisa saya bantu dengan layanan Mitra Bersih?" }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', text: m.text })) }),
      });
      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', text: data.text }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', text: "Maaf, terjadi kesalahan. Mohon coba lagi." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col z-[60] border border-gray-200"
    >
      <div className="p-4 bg-emerald-600 text-white rounded-t-2xl flex justify-between items-center">
        <h3 className="font-bold flex items-center gap-2"><Bot size={18} /> Asisten AI</h3>
        <button onClick={onClose}><X size={18} /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-emerald-100 ml-auto' : 'bg-gray-100'}`}>
            {m.text}
          </div>
        ))}
        {isLoading && <div className="text-gray-500 text-sm">Mengetik...</div>}
      </div>
      <div className="p-4 border-t flex gap-2">
        <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-full text-sm"
            placeholder="Ketik pesan..."
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-emerald-600 text-white p-2 rounded-full"><Send size={16} /></button>
      </div>
    </motion.div>
  );
}
