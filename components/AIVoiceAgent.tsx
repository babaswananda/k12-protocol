"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Mic, MicOff, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIVoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your .K-12 Protocol assistant. I can answer any questions about our federal education infrastructure platform. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const recognition = useRef<SpeechRecognition | null>(null);
  const synthesis = useRef<SpeechSynthesis | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        handleSendMessage(transcript);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      synthesis.current = window.speechSynthesis;
    }

    return () => {
      if (recognition.current) {
        recognition.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const startListening = () => {
    if (recognition.current && !isListening) {
      setIsListening(true);
      recognition.current.start();
    }
  };

  const stopListening = () => {
    if (recognition.current && isListening) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  const speak = (text: string) => {
    if (synthesis.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      synthesis.current.speak(utterance);
    }
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // K-12 Protocol specific responses
    if (lowerMessage.includes('executive order') || lowerMessage.includes('14192')) {
      return 'Executive Order 14192 mandates the integration of AI in public education. The .K-12 Protocol ensures full compliance with federal requirements for educational AI infrastructure, providing secure, sovereign, and compliant systems for all school districts.';
    }
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('contract')) {
      return 'We offer federal contract tiers: Pilot Program for single institutions, District Contracts for multi-school deployments, State Contracts for statewide implementation, and National Education contracts for multi-state deployment. All pricing follows GSA schedules and federal procurement guidelines.';
    }
    
    if (lowerMessage.includes('security') || lowerMessage.includes('encryption')) {
      return 'The .K-12 Protocol uses Department of Education approved encryption protocols with federal-grade security. All student data is protected with military-grade encryption and stored in compliance with FERPA, COPPA, and SOC 2 Type II standards.';
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return 'Our AI systems are government-certified and designed specifically for K-12 education. Each student receives personalized AI tutors that adapt to their learning patterns, while teachers get AI-assisted curriculum building and grading tools.';
    }
    
    if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
      return 'To request a federal briefing and demonstration, you\'ll need to submit security clearance documentation. Our classified demonstrations are available only to authorized district personnel. Would you like me to guide you through the authorization process?';
    }
    
    if (lowerMessage.includes('compliance') || lowerMessage.includes('regulation')) {
      return 'The .K-12 Protocol is fully compliant with Executive Order 14192, FERPA, COPPA, and SOC 2 Type II standards. We maintain continuous compliance monitoring and provide automated reporting for all federal education regulations.';
    }
    
    if (lowerMessage.includes('implementation') || lowerMessage.includes('deployment')) {
      return 'Implementation follows federal protocols with dedicated liaison support, comprehensive training, and phased deployment. We\'re currently in beta with 50 pilot districts, with national rollout planned for Q1 2025.';
    }
    
    if (lowerMessage.includes('data') || lowerMessage.includes('privacy')) {
      return 'All educational data remains under complete district ownership and control. We use end-to-end encryption, classified data vaults, and ensure no third-party access. Your data sovereignty is guaranteed by federal mandate.';
    }
    
    if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return 'We provide 24/7 federal support, dedicated government liaisons, comprehensive training programs, and ongoing compliance monitoring. All support follows government security protocols and clearance requirements.';
    }
    
    // Default response
    return 'I can help you with information about the .K-12 Protocol\'s federal education infrastructure, Executive Order 14192 compliance, security features, AI capabilities, implementation process, and federal contract options. What specific aspect would you like to know more about?';
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(messageText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      // Speak the response
      speak(aiResponse);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-usgov-600 hover:bg-usgov-700 text-white p-4 rounded-government-lg shadow-2xl transition-all duration-300 ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white border-4 border-usgov-600 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-usgov-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm uppercase tracking-wide">.K-12 Protocol Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-federal-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-usgov-600 text-white'
                        : 'bg-white border-2 border-federal-300 text-federal-900'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-federal-300 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-federal-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-federal-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-federal-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t-2 border-federal-300 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about .K-12 Protocol..."
                  className="flex-1 p-2 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none text-sm"
                />
                <button
                  onClick={isListening ? stopListening : startListening}
                  className={`p-2 rounded-government transition-colors ${
                    isListening
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-federal-300 hover:bg-federal-400 text-federal-900'
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleSendMessage()}
                  className="p-2 bg-usgov-600 hover:bg-usgov-700 text-white rounded-government transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs text-federal-600 mt-2 font-medium">
                {isListening ? 'Listening... Speak now' : 'Click mic to speak or type your question'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
