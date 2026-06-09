import { useState, useRef, useEffect } from 'react'
import { useAction } from 'convex/react'
import { api } from '../../convex/_generated/api'

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Hello! I am your Real Pearl dental assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const chatAction = useAction(api.agent.chat)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await chatAction({ message: userMessage })
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 bg-brand-navy text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-2 border-brand-gold"
      >
        <span className="text-xl">💬</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 z-50 w-80 md:w-96 bg-white rounded-lg shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-brand-navy p-4 text-white flex justify-between items-center border-b border-brand-gold/30">
            <div>
              <h3 className="font-serif font-bold">Dental Assistant</h3>
              <p className="text-xs text-brand-gold">Online 24/7</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">&times;</button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 h-96 overflow-y-auto space-y-4 bg-brand-light-gray/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-navy text-white rounded-br-none' 
                    : 'bg-white text-brand-navy border border-gray-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg text-sm border border-gray-200 rounded-bl-none shadow-sm animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 text-sm border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-brand-gold"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-brand-gold text-white p-2 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
