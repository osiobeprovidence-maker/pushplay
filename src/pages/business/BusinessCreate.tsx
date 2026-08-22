import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function BusinessCreate() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Campaign created successfully! (Simulated)');
      navigate('/business/dashboard');
    }, 1500);
  };

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto w-full">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Create Ad Campaign</h1>
        <p className="text-neutral-400">Launch a new targeted campaign for your audience.</p>
      </header>

      <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">Campaign Name</label>
          <input type="text" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none" required placeholder="e.g. Summer Sale 2026" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Objective</label>
            <select className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-indigo-500 outline-none">
              <option>Brand Awareness</option>
              <option>Product Sales</option>
              <option>App Installs</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Total Budget (₦)</label>
            <input type="number" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-indigo-500 outline-none" required defaultValue={1000000} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">Target Audience</label>
          <select className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white focus:border-indigo-500 outline-none" multiple>
            <option>18-24</option>
            <option>25-34</option>
            <option>Music Lovers</option>
            <option>Gamers</option>
          </select>
          <p className="text-xs text-neutral-500 mt-2">Hold Ctrl/Cmd to select multiple</p>
        </div>

        <Button type="submit" variant="brand" className="w-full" isLoading={isLoading}>
          Launch Campaign
        </Button>
      </form>
    </div>
  );
}
