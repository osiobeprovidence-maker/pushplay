import React, { useState, useEffect } from 'react';
import { MOCK_CAMPAIGNS } from '../../data/mockData';
import { useAppStore } from '../../store/useAppStore';
import { Heart, MessageCircle, Share2, Users, Send } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Live() {
  const { addPoints } = useAppStore();
  const campaign = MOCK_CAMPAIGNS.find(c => c.type === 'live') || MOCK_CAMPAIGNS[2];
  
  const [progress, setProgress] = useState(0); // in seconds
  const targetDuration = 600; // 10 minutes
  const [isCompleted, setIsCompleted] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, user: 'david_k', text: 'This is amazing!', color: 'text-blue-400' },
    { id: 2, user: 'sarah_music', text: '🔥 🔥 🔥', color: 'text-red-400' },
    { id: 3, user: 'johnny_b', text: 'When is the next drop?', color: 'text-green-400' },
  ]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isCompleted) {
      interval = setInterval(() => {
        setProgress(p => {
          const next = p + 10;
          return next >= targetDuration ? targetDuration : next;
        });

        // Add random chat messages
        if (Math.random() > 0.7) {
          const randomMessages = ['So good!', 'Wow', 'I love this', 'Can you play the other one?', '🙌'];
          setMessages(prev => [...prev.slice(-10), { 
            id: Date.now(), 
            user: `user_${Math.floor(Math.random() * 1000)}`, 
            text: randomMessages[Math.floor(Math.random() * randomMessages.length)],
            color: 'text-neutral-300'
          }]);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCompleted, targetDuration]);

  // Handle completion
  useEffect(() => {
    if (progress >= targetDuration && !isCompleted) {
      setIsCompleted(true);
      addPoints(campaign.reward);
    }
  }, [progress, isCompleted, campaign.reward, addPoints, targetDuration]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages(prev => [...prev.slice(-10), { 
      id: Date.now(), 
      user: 'you', 
      text: chatInput,
      color: 'text-white font-bold'
    }]);
    setChatInput('');
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full bg-black md:flex-row">
      {/* Video Area */}
      <div className="flex-1 relative bg-neutral-900 overflow-hidden flex flex-col h-[60vh] md:h-full">
        <img 
          src={campaign.image} 
          alt="Live stream" 
          className="w-full h-full object-cover absolute inset-0 opacity-80"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</div>
          <div className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
            <Users className="w-3 h-3" />
            {Math.floor(8900 + (progress / 10))}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-96 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <img src={campaign.creatorAvatar} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-bold text-white">{campaign.creatorName}</div>
              <div className="text-xs text-neutral-400">{campaign.title}</div>
            </div>
            <Button size="sm" variant="primary" className="ml-auto h-8 px-3 rounded-full text-xs">Follow</Button>
          </div>
          
          <div className="bg-neutral-900/80 rounded-xl p-3 border border-neutral-700">
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-neutral-400">Stay for {formatTime(targetDuration)}</span>
              <span className="text-green-400">+{campaign.reward} PP</span>
            </div>
            <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden mb-1.5">
              <div className="h-full bg-green-500 rounded-full transition-all duration-1000 linear" style={{ width: `${(progress / targetDuration) * 100}%` }} />
            </div>
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>{formatTime(progress)}</span>
              {isCompleted ? <span className="text-green-400 font-bold">Reward Earned!</span> : <span>Keep watching</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 md:w-96 md:flex-none flex flex-col bg-neutral-950 border-l border-neutral-900 h-[40vh] md:h-full">
        <div className="p-4 border-b border-neutral-900 flex justify-between items-center bg-neutral-950 z-10">
          <h3 className="font-bold">Live Chat</h3>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-end space-y-3">
          {messages.map(msg => (
            <div key={msg.id} className="text-sm animate-in slide-in-from-bottom-2 duration-300">
              <span className={`${msg.color} font-medium mr-2`}>{msg.user}:</span>
              <span className="text-neutral-300">{msg.text}</span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-neutral-950 border-t border-neutral-900">
          <div className="flex justify-between mb-4">
            <button className="p-2 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSendMessage} className="relative">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Say something..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-full h-12 pl-4 pr-12 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-neutral-800 rounded-full transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
