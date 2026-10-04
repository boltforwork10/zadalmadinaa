import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { CONTACT } from '@/data';

type ChatAction = {
  label: string;
  route: string;
};

type ChatMessage = {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  action?: ChatAction;
};

type QuickQuestion = {
  id: string;
  question: string;
  answer: string;
  action?: ChatAction;
};

const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    id: 'services',
    question: 'What services do you offer?',
    answer:
      'We provide comprehensive technical solutions including AC maintenance, plumbing, electromechanical works, and luxury finishes.',
    action: { label: 'View All Services', route: '/services' },
  },
  {
    id: 'location',
    question: 'Where are you located?',
    answer: 'Our office is located at Office D-02, Almarzouqi Building 13-B, Al Goze First, Dubai, UAE.',
    action: { label: 'View on Map', route: '/contact' },
  },
  {
    id: 'quote',
    question: 'How can I request a quote?',
    answer:
      'You can easily request a customized quote by reaching out via our direct WhatsApp or through our contact form.',
    action: { label: 'Contact Us', route: '/contact' },
  },
  {
    id: 'projects',
    question: 'Can I see your past projects?',
    answer:
      'Absolutely! We have a strong track record of successful residential and commercial projects across Dubai.',
    action: { label: 'View Portfolio', route: '/projects' },
  },
];

const GREETING: ChatMessage = {
  id: 0,
  sender: 'bot',
  text: 'Welcome to Zad Almadina Technical Services! How can I help you today?',
};

let messageIdCounter = 1;
const nextId = () => messageIdCounter++;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleQuickQuestion = (q: QuickQuestion) => {
    if (usedQuestions.has(q.id)) return;

    setMessages((prev) => [
      ...prev,
      { id: nextId(), sender: 'user', text: q.question },
    ]);
    setUsedQuestions((prev) => new Set(prev).add(q.id));
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), sender: 'bot', text: q.answer, action: q.action },
      ]);
    }, 500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: nextId(), sender: 'user', text }]);
    setInputValue('');

    const matched = QUICK_QUESTIONS.find(
      (q) =>
        text.toLowerCase().includes(q.id) ||
        q.question.toLowerCase().split(' ').some((word) =>
          word.length > 4 && text.toLowerCase().includes(word)
        )
    );

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      if (matched) {
        setUsedQuestions((prev) => new Set(prev).add(matched.id));
        setMessages((prev) => [
          ...prev,
          { id: nextId(), sender: 'bot', text: matched.answer, action: matched.action },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            sender: 'bot',
            text: "I'd be happy to help! For specific inquiries, please contact us directly via WhatsApp or phone, and our team will assist you right away.",
            action: { label: 'Contact Us', route: '/contact' },
          },
        ]);
      }
    }, 500);
  };

  const handleNavigate = (route: string) => {
    setIsOpen(false);
    navigate(route);
  };

  const availableQuestions = QUICK_QUESTIONS.filter(
    (q) => !usedQuestions.has(q.id)
  );

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full gradient-gold text-burgundy-900 flex items-center justify-center shadow-xl shadow-gold-500/40 hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Unread pulse ring when closed */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gold-500 pointer-events-none"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[5.5rem] right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-96 h-[32rem] max-h-[calc(100vh-7rem)] bg-white rounded-2xl shadow-2xl shadow-burgundy-900/30 flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-burgundy-800 px-5 py-4 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center shrink-0">
                <Sparkles size={20} className="text-burgundy-900" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-heading font-bold text-sm tracking-tight">
                  Zad Assistant
                </p>
                <p className="text-gold-400 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Online
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors shrink-0"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-offwhite">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-burgundy-700 text-white rounded-br-md'
                        : 'bg-white text-gray-700 rounded-bl-md border border-gray-100 shadow-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.action && (
                      <button
                        onClick={() => handleNavigate(msg.action!.route)}
                        className={`mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                          msg.sender === 'user'
                            ? 'bg-white/20 text-white hover:bg-white/30'
                            : 'bg-burgundy-700 text-white hover:bg-burgundy-800'
                        }`}
                      >
                        {msg.action.label}
                        <Send size={12} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-2xl rounded-bl-md border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 rounded-full bg-gold-500"
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick question chips */}
              {availableQuestions.length > 0 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {availableQuestions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuickQuestion(q)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gold-300 text-burgundy-700 hover:bg-gold-500 hover:text-burgundy-900 hover:border-gold-500 transition-all duration-200"
                    >
                      {q.question}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input + WhatsApp shortcut */}
            <div className="shrink-0 border-t border-gray-100 bg-white">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 px-3 py-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3.5 py-2.5 rounded-full bg-offwhite border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full gradient-gold text-burgundy-900 flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
                  aria-label="Send message"
                >
                  <Send size={17} />
                </button>
              </form>
              <a
                href={`https://wa.me/${CONTACT.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-green-600 hover:bg-green-50 transition-colors border-t border-gray-50"
              >
                <WhatsAppIcon size={14} />
                Prefer WhatsApp? Chat with us directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
