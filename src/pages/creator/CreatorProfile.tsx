import React from 'react';
import { User, Mail, Bell, Shield, Camera, Link as LinkIcon, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAppStore } from '../../store/useAppStore';

export function CreatorProfile() {
  const { user } = useAppStore();

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto w-full">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Creator Profile</h1>
        <p className="text-neutral-400 text-sm">Manage your personal details and social presence.</p>
      </header>

      <div className="space-y-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <img 
                src={user?.avatar} 
                alt="" 
                className="w-32 h-32 rounded-full border-4 border-neutral-800 object-cover group-hover:opacity-75 transition-opacity"
              />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-8 h-8 text-white" />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
              <p className="text-neutral-500 mb-6">{user?.username} • Certified Music Creator</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button variant="secondary" className="h-10 bg-neutral-800 border-neutral-700 text-xs">
                  Change Photo
                </Button>
                <Button variant="secondary" className="h-10 bg-rose-500/10 text-rose-500 border-rose-500/20 text-xs">
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold">Basic Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1.5 ml-1">Full Name</label>
                <input type="text" defaultValue={user?.name} className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1.5 ml-1">Email Address</label>
                <input type="email" defaultValue={user?.email} className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1.5 ml-1">Bio</label>
                <textarea className="w-full h-32 bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white outline-none focus:border-blue-500 resize-none" defaultValue="Passionate about afrobeats and building communities around great music." />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <LinkIcon className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold">Social Links</h3>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <Twitter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input type="text" placeholder="Twitter Profile" className="w-full h-11 bg-neutral-950 border border-neutral-800 rounded-xl pl-12 pr-4 text-sm text-white outline-none focus:border-blue-500" />
                </div>
                <div className="relative">
                  <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input type="text" placeholder="Instagram Profile" className="w-full h-11 bg-neutral-950 border border-neutral-800 rounded-xl pl-12 pr-4 text-sm text-white outline-none focus:border-blue-500" />
                </div>
                <div className="relative">
                  <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input type="text" placeholder="YouTube Channel" className="w-full h-11 bg-neutral-950 border border-neutral-800 rounded-xl pl-12 pr-4 text-sm text-white outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold">Account Security</h3>
              </div>
              <Button variant="secondary" className="w-full h-11 bg-neutral-800 border-neutral-700 text-sm">
                Change Password
              </Button>
              <Button variant="secondary" className="w-full h-11 bg-neutral-800 border-neutral-700 text-sm">
                Enable 2FA
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-10 rounded-2xl">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
