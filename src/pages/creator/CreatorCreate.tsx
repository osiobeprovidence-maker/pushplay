import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Music, Radio, Award, Image as ImageIcon, UploadCloud } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CreatorCreate() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const campaignTypes = [
    { id: 'video', icon: Play, label: 'Video Campaign', desc: 'Promote a video or trailer' },
    { id: 'music', icon: Music, label: 'Music Release', desc: 'Promote new tracks or albums' },
    { id: 'live', icon: Radio, label: 'Live Session', desc: 'Host a rewarded livestream' },
    { id: 'challenge', icon: Award, label: 'Challenge', desc: 'Create a gamified experience' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert('Campaign submitted for review! (Simulated)');
        navigate('/creator/dashboard');
      }, 1500);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-3xl mx-auto w-full">
      <header className="mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Create Campaign</h1>
        <p className="text-neutral-400">Launch a new rewarded experience for your audience.</p>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-2 w-16 rounded-full transition-colors ${i <= step ? 'bg-blue-500' : 'bg-neutral-800'}`} />
          ))}
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold mb-6">Select Campaign Type</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {campaignTypes.map(type => (
                <label key={type.id} className="relative flex flex-col p-6 cursor-pointer border border-neutral-700 rounded-2xl hover:bg-neutral-800 transition-colors focus-within:ring-2 focus-within:ring-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/5">
                  <input type="radio" name="campaignType" value={type.id} className="absolute opacity-0" required />
                  <type.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <div className="font-bold mb-1">{type.label}</div>
                  <div className="text-sm text-neutral-400">{type.desc}</div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold mb-6">Upload Content</h2>
            
            <div className="border-2 border-dashed border-neutral-700 rounded-3xl p-12 text-center hover:bg-neutral-800/50 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-neutral-950 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                <UploadCloud className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="font-bold mb-2">Drag & Drop Media</h3>
              <p className="text-sm text-neutral-500 mb-6">Support MP4, MP3, JPG up to 500MB</p>
              <Button type="button" variant="secondary" size="sm">Browse Files</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
            <h2 className="text-xl font-bold mb-2">Campaign Details</h2>
            
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Campaign Title</label>
              <input type="text" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" required placeholder="e.g. New Single Release" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Description</label>
              <textarea className="w-full h-32 bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" required placeholder="Describe the campaign..." />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Category</label>
                <select className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-blue-500 outline-none">
                  <option>Entertainment</option>
                  <option>Music</option>
                  <option>Gaming</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Duration (Seconds)</label>
                <input type="number" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-blue-500 outline-none" required defaultValue={120} />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
            <h2 className="text-xl font-bold mb-2">Reward & Budget</h2>
            
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Reward per participant (PP)</label>
              <input type="number" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-blue-500 outline-none text-2xl font-bold" required defaultValue={100} />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Maximum Participants</label>
              <input type="number" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-blue-500 outline-none" required defaultValue={5000} />
            </div>
            
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Total Campaign Budget</span>
                <span className="text-xl font-bold">500,000 PP</span>
              </div>
              <p className="text-sm opacity-80">This amount will be reserved from your creator balance.</p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-neutral-800">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={() => setStep(step - 1)}
            disabled={step === 1 || isLoading}
          >
            Back
          </Button>
          <Button 
            type="submit" 
            variant={step === 4 ? 'brand-blue' : 'primary'}
            isLoading={isLoading}
          >
            {step === 4 ? 'Submit Campaign' : 'Continue'}
          </Button>
        </div>

      </form>
    </div>
  );
}
