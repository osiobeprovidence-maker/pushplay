import React, { useState } from 'react';
import { 
  Settings, User, Bell, Shield, CreditCard, Globe, 
  Link as LinkIcon, Building2, ChevronRight, Check, 
  Plus, Trash2, Mail, ExternalLink, Lock
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

type SectionId = 'profile' | 'billing' | 'notifications' | 'team' | 'integrations';

export function BusinessSettings() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  const sections = [
    { id: 'profile' as SectionId, icon: Building2, label: 'Company Profile', desc: 'Update your company details and logo' },
    { id: 'billing' as SectionId, icon: CreditCard, label: 'Billing & Payments', desc: 'Manage your payment methods and subscriptions' },
    { id: 'notifications' as SectionId, icon: Bell, label: 'Notifications', desc: 'Configure how you receive campaign alerts' },
    { id: 'team' as SectionId, icon: Shield, label: 'Team & Security', desc: 'Manage team access and account security' },
    { id: 'integrations' as SectionId, icon: Globe, label: 'Integrations', desc: 'Connect with third-party marketing tools' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto w-full">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Account Settings</h1>
        <p className="text-neutral-400 text-sm">Manage your business profile, billing preferences, and team settings.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-2">
          {sections.map((section) => (
            <button 
              key={section.id} 
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${activeSection === section.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'}`}
            >
              <section.icon className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="text-sm font-bold">{section.label}</div>
                <div className={`text-[10px] ${activeSection === section.id ? 'text-indigo-100' : 'text-neutral-500'}`}>{section.desc}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          {activeSection === 'profile' && <ProfileSection />}
          {activeSection === 'billing' && <BillingSection />}
          {activeSection === 'notifications' && <NotificationsSection />}
          {activeSection === 'team' && <TeamSection />}
          {activeSection === 'integrations' && <IntegrationsSection />}
          
          {activeSection !== 'billing' && (
            <div className="bg-rose-500/5 border border-rose-500/10 rounded-3xl p-8">
              <h4 className="text-rose-500 font-bold mb-2">Danger Zone</h4>
              <p className="text-sm text-neutral-500 mb-6">Permanently delete your business account and all associated campaign data.</p>
              <Button variant="secondary" className="bg-rose-500/10 text-rose-500 border-rose-500/20 hover:bg-rose-500/20 transition-colors">
                Delete Account
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-6">Company Profile</h3>
        <div className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-neutral-800">
          <div className="w-24 h-24 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-3xl font-bold text-indigo-400">
            B
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-bold">Acme Corporation</h4>
            <p className="text-sm text-neutral-500 mb-4">Lagos, Nigeria • Established 2012</p>
            <Button variant="secondary" size="sm" className="bg-neutral-800 border-neutral-700 h-9 px-4 text-xs font-bold">
              Update Company Logo
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1.5 ml-1">Company Name</label>
            <input type="text" defaultValue="Acme Corporation" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1.5 ml-1">Website URL</label>
            <input type="text" defaultValue="https://acme.corp" className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-indigo-500" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1.5 ml-1">Industry</label>
            <select className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-indigo-500">
              <option>Technology</option>
              <option>E-commerce</option>
              <option>Entertainment</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1.5 ml-1">Company Size</label>
            <select className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-indigo-500">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>201+ employees</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-4 flex justify-end gap-3">
        <Button variant="secondary" className="h-12 px-8 rounded-2xl border-neutral-800 text-neutral-400">Cancel</Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700 h-12 px-10 rounded-2xl">Save Changes</Button>
      </div>
    </div>
  );
}

function BillingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Billing & Subscription</h3>
          <span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">Pro Plan</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
            <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-4">Current Plan</div>
            <div className="text-2xl font-black mb-1">₦250,000<span className="text-sm font-medium text-neutral-500">/mo</span></div>
            <p className="text-xs text-neutral-400 mb-6">Next billing date: Sept 12, 2026</p>
            <Button variant="secondary" className="w-full h-10 text-xs bg-neutral-900 border-neutral-800">Manage Subscription</Button>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
            <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-4">Payment Method</div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-6 bg-neutral-800 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
              <span className="font-bold">•••• 4242</span>
            </div>
            <p className="text-xs text-neutral-400 mb-6">Expires 12/28</p>
            <Button variant="secondary" className="w-full h-10 text-xs bg-neutral-900 border-neutral-800">Update Card</Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">Recent Invoices</h4>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-xl group hover:border-neutral-600 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Invoice #INV-2026-00{i}</div>
                    <div className="text-[10px] text-neutral-500">Aug {15 - i}, 2026 • Pro Plan</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm font-bold">₦250,000</span>
                  <button className="p-2 hover:bg-neutral-800 rounded-lg text-neutral-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsSection() {
  const [prefs, setPrefs] = useState({
    campaignStarts: true,
    campaignEnds: true,
    budgetAlerts: true,
    audienceMilestones: false,
    newMessages: true,
    marketing: false
  });

  const toggle = (key: keyof typeof prefs) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const NotificationToggle = ({ label, desc, active, onClick }: any) => (
    <div className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-2xl">
      <div className="flex-1 pr-8">
        <div className="text-sm font-bold mb-1">{label}</div>
        <div className="text-[10px] text-neutral-500 leading-relaxed">{desc}</div>
      </div>
      <button 
        onClick={onClick}
        className={`w-12 h-6 rounded-full transition-all relative ${active ? 'bg-indigo-600' : 'bg-neutral-800'}`}
      >
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${active ? 'left-7' : 'left-1'}`} />
      </button>
    </div>
  );

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 space-y-8">
      <h3 className="text-xl font-bold">Notification Preferences</h3>
      
      <div className="space-y-4">
        <h4 className="text-xs uppercase tracking-widest font-black text-neutral-500 mb-4">Campaign Updates</h4>
        <NotificationToggle 
          label="Campaign Starts" 
          desc="Get notified as soon as your ad campaign goes live on the platform." 
          active={prefs.campaignStarts}
          onClick={() => toggle('campaignStarts')}
        />
        <NotificationToggle 
          label="Campaign Completion" 
          desc="Receive a summary report when a campaign reaches its target participants." 
          active={prefs.campaignEnds}
          onClick={() => toggle('campaignEnds')}
        />
        <NotificationToggle 
          label="Budget Thresholds" 
          desc="Alert me when a campaign has reached 80% and 100% of its budget." 
          active={prefs.budgetAlerts}
          onClick={() => toggle('budgetAlerts')}
        />
      </div>

      <div className="space-y-4 pt-4 border-t border-neutral-800">
        <h4 className="text-xs uppercase tracking-widest font-black text-neutral-500 mb-4">System & Marketing</h4>
        <NotificationToggle 
          label="Direct Messages" 
          desc="Get alerts when creators or influencers message your business account." 
          active={prefs.newMessages}
          onClick={() => toggle('newMessages')}
        />
        <NotificationToggle 
          label="Product Updates" 
          desc="Weekly digest of new features and platform enhancements." 
          active={prefs.marketing}
          onClick={() => toggle('marketing')}
        />
      </div>

      <div className="pt-4 flex justify-end">
        <Button className="bg-indigo-600 hover:bg-indigo-700 h-12 px-10 rounded-2xl">Update Preferences</Button>
      </div>
    </div>
  );
}

function TeamSection() {
  const members = [
    { name: 'Sarah Wilson', email: 'sarah@acme.corp', role: 'Owner', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'Michael Chen', email: 'm.chen@acme.corp', role: 'Campaign Manager', avatar: 'https://i.pravatar.cc/150?u=mike' },
    { name: 'David Okafor', email: 'david@acme.corp', role: 'Billing Admin', avatar: 'https://i.pravatar.cc/150?u=david' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Team Members</h3>
          <Button size="sm" className="bg-indigo-600 h-9 px-4 text-xs">
            <Plus className="w-4 h-4 mr-2" /> Invite Member
          </Button>
        </div>

        <div className="space-y-4">
          {members.map((member, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-2xl group hover:border-neutral-600 transition-colors">
              <div className="flex items-center gap-4">
                <img src={member.avatar} alt="" className="w-10 h-10 rounded-full border border-neutral-800" />
                <div>
                  <div className="text-sm font-bold">{member.name}</div>
                  <div className="text-[10px] text-neutral-500">{member.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{member.role}</span>
                <button className="p-2 hover:bg-rose-500/10 hover:text-rose-500 rounded-lg text-neutral-500 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="w-5 h-5 text-indigo-500" />
          <h3 className="text-xl font-bold">Security Settings</h3>
        </div>
        
        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-between">
          <div className="flex-1 pr-8">
            <div className="text-sm font-bold mb-1">Two-Factor Authentication</div>
            <div className="text-[10px] text-neutral-500">Secure your account with an additional layer of security.</div>
          </div>
          <Button variant="secondary" size="sm" className="h-9 px-6 bg-neutral-900 border-neutral-800 text-xs">Enable</Button>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-between">
          <div className="flex-1 pr-8">
            <div className="text-sm font-bold mb-1">Session Management</div>
            <div className="text-[10px] text-neutral-500">Sign out of all other active sessions on other devices.</div>
          </div>
          <Button variant="secondary" size="sm" className="h-9 px-6 bg-neutral-900 border-neutral-800 text-xs">Sign Out All</Button>
        </div>
      </div>
    </div>
  );
}

function IntegrationsSection() {
  const tools = [
    { name: 'Google Analytics', category: 'Analytics', icon: 'GA', connected: true, color: 'bg-amber-500' },
    { name: 'Facebook Pixel', category: 'Tracking', icon: 'FB', connected: false, color: 'bg-blue-600' },
    { name: 'Slack Notifications', category: 'Workflow', icon: 'SL', connected: true, color: 'bg-purple-500' },
    { name: 'Salesforce', category: 'CRM', icon: 'SF', connected: false, color: 'bg-indigo-400' },
  ];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 space-y-8">
      <h3 className="text-xl font-bold">Marketplace & Integrations</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {tools.map((tool, i) => (
          <div key={i} className="p-6 bg-neutral-950 border border-neutral-800 rounded-2xl group hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center text-white font-black text-xl shadow-lg shadow-black/20`}>
                {tool.icon}
              </div>
              <div className={`px-2.5 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-widest border ${tool.connected ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-neutral-800 text-neutral-500 border-neutral-700'}`}>
                {tool.connected ? 'Connected' : 'Disconnected'}
              </div>
            </div>
            <h4 className="font-bold mb-1">{tool.name}</h4>
            <p className="text-[10px] text-neutral-500 mb-6">{tool.category} integration for data sync</p>
            <Button 
              variant="secondary" 
              className={`w-full h-10 text-xs ${tool.connected ? 'bg-neutral-900 border-neutral-800 text-rose-400' : 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'}`}
            >
              {tool.connected ? 'Disconnect' : 'Connect Tool'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
