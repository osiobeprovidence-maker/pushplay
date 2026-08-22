import React from 'react';
import { Settings, Save } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function AdminSettings() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-5xl mx-auto w-full">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Settings</h1>
      <p className="text-neutral-400 text-sm mb-8">Platform configuration.</p>
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
        <div className="flex items-center gap-3 mb-4"><Settings className="w-6 h-6 text-white" /><h3 className="text-xl font-bold">General</h3></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div><label className="block text-xs font-bold text-neutral-500 mb-1.5">Platform Name</label><input defaultValue="Push Play" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-neutral-600" /></div>
          <div><label className="block text-xs font-bold text-neutral-500 mb-1.5">Support Email</label><input defaultValue="support@pushplay.com" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-neutral-600" /></div>
          <div><label className="block text-xs font-bold text-neutral-500 mb-1.5">Reward Rate (PP per watch)</label><input defaultValue="50" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-neutral-600" /></div>
          <div><label className="block text-xs font-bold text-neutral-500 mb-1.5">Withdrawal Fee %</label><input defaultValue="2" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-neutral-600" /></div>
        </div>
        <div className="flex justify-end pt-6 border-t border-neutral-800">
          <Button onClick={() => alert('Settings saved - demo')}><Save className="w-4 h-4 mr-2" />Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
