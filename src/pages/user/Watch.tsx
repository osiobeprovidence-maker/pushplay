import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Pause, Maximize2, CheckCircle2, ChevronLeft, Award } from 'lucide-react';
import { MOCK_CAMPAIGNS } from '../../data/mockData';
import { useAppStore } from '../../store/useAppStore';
import { Button } from '../../components/ui/Button';

export function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addPoints } = useAppStore();
  
  const campaign = MOCK_CAMPAIGNS.find(c => c.id === id) || MOCK_CAMPAIGNS[0];
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isCompleted, setIsCompleted] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && progress < 100 && !isCompleted) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + (100 / (campaign.duration / 2));
          return next >= 100 ? 100 : next;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isCompleted, campaign.duration]);

  // Handle completion
  useEffect(() => {
    if (progress >= 100 && !isCompleted) {
      setIsPlaying(false);
      setIsCompleted(true);
      setShowRewardModal(true);
      addPoints(campaign.reward);
    }
  }, [progress, isCompleted, campaign.reward, addPoints]);

  return (
    <div className="flex flex-col h-full bg-black">
      <header className="p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold border border-white/10">
          Reward: <span className="text-green-400">+{campaign.reward} PP</span>
        </div>
      </header>

      {/* Simulated Player Area */}
      <div className="flex-1 relative bg-neutral-900 group flex flex-col justify-center overflow-hidden">
        <img 
          src={campaign.image} 
          alt={campaign.title}
          className={`w-full h-full object-cover transition-all duration-[20000ms] ease-linear ${isPlaying ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Play Button Overlay */}
        {!isPlaying && !isCompleted && (
          <button 
            onClick={() => setIsPlaying(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white text-black rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <Play className="w-10 h-10" />
          </button>
        )}

        {/* Player Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-neutral-300">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button className="hover:text-neutral-300">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-between text-xs text-neutral-300">
            <span>{Math.floor((progress / 100) * campaign.duration)}s</span>
            <span>{campaign.duration}s</span>
          </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="bg-neutral-950 p-6 border-t border-neutral-900 md:h-64 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{campaign.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <img src={campaign.creatorAvatar} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-medium text-sm">{campaign.creatorName}</div>
              <div className="text-xs text-neutral-500">{(campaign.participants / 1000).toFixed(1)}k participants</div>
            </div>
          </div>
          <p className="text-neutral-400 text-sm">{campaign.description}</p>
        </div>
        
        <div className="w-full md:w-80 bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shrink-0">
          <h3 className="font-bold mb-2">Campaign Requirements</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2 text-sm text-neutral-300">
              <CheckCircle2 className={`w-5 h-5 shrink-0 ${isCompleted ? 'text-green-400' : 'text-neutral-600'}`} />
              Watch at least 90% of the video
            </li>
            <li className="flex items-start gap-2 text-sm text-neutral-300">
              <CheckCircle2 className="w-5 h-5 text-neutral-600 shrink-0" />
              Like the video (Optional)
            </li>
          </ul>
          {isCompleted ? (
            <div className="w-full py-3 bg-green-500/20 text-green-400 font-bold text-center rounded-xl border border-green-500/30">
              Campaign Completed
            </div>
          ) : (
            <div className="text-center text-sm text-neutral-500">
              Progress: {Math.round(progress)}%
            </div>
          )}
        </div>
      </div>

      {/* Reward Modal */}
      {showRewardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <Award className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Campaign Complete!</h2>
            <p className="text-neutral-400 mb-6">You've successfully completed the requirements.</p>
            <div className="text-4xl font-bold text-green-400 mb-8">
              +{campaign.reward} <span className="text-xl">PP</span>
            </div>
            <Button 
              className="w-full" 
              onClick={() => {
                setShowRewardModal(false);
                navigate('/dashboard');
              }}
            >
              Continue Playing
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
