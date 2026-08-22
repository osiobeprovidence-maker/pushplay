import React from 'react';
import { Users, MousePointerClick, CreditCard, Activity } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '124,580', icon: Users, trend: '+12% this month' },
    { label: 'Active Campaigns', value: '426', icon: MousePointerClick, trend: '+5% this month' },
    { label: 'Pending Withdrawals', value: '84', icon: CreditCard, trend: 'Needs action' },
    { label: 'Monthly Revenue', value: '₦24.8M', icon: Activity, trend: '+18% this month' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      <header className="mb-10 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Dashboard</h1>
          <p className="text-neutral-400">Platform overview and key metrics.</p>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-neutral-400 font-medium text-sm mb-4">{stat.label}</div>
            <div className="text-xs text-green-400">{stat.trend}</div>
          </div>
        ))}
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-xl font-bold">Recent Signups</h2>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-950 text-neutral-400">
            <tr>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {[
              { name: 'David Kim', role: 'User', date: 'Just now', status: 'Active' },
              { name: 'Sarah Jenkins', role: 'Creator', date: '2 hours ago', status: 'Pending Verification' },
              { name: 'Nike Nigeria', role: 'Business', date: '5 hours ago', status: 'Active' },
              { name: 'John Doe', role: 'User', date: '1 day ago', status: 'Active' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-neutral-800/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                <td className="px-6 py-4 text-neutral-400">{row.role}</td>
                <td className="px-6 py-4 text-neutral-400">{row.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                    row.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
