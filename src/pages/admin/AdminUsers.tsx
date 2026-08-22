import React from 'react';
import { Users, Search, Filter } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function AdminUsers() {
  const users = [
    { name: 'David Kim', email: 'david.kim@example.com', role: 'User', status: 'Active', points: '12,400' },
    { name: 'Sarah Jenkins', email: 'sarah.j@example.com', role: 'Creator', status: 'Pending', points: '45,200' },
    { name: 'Nike Nigeria', email: 'contact@nike.ng', role: 'Business', status: 'Active', points: '8,900' },
  ];
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Users</h1>
          <p className="text-neutral-400 text-sm">Manage all platform users.</p>
        </div>
        <Button onClick={() => alert('Invite user - demo')} variant="secondary" className="w-full md:w-auto justify-center">Invite User</Button>
      </header>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input placeholder="Search users..." className="w-full h-12 bg-neutral-900 border border-neutral-800 rounded-2xl pl-12 pr-4 text-white outline-none focus:border-neutral-600" />
        </div>
        <Button variant="secondary" className="h-12 border-neutral-800 bg-neutral-900 w-full sm:w-auto justify-center"><Filter className="w-4 h-4 mr-2" />Filters</Button>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-3xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[520px]">
          <thead className="bg-neutral-950 text-neutral-400">
            <tr><th className="px-6 py-4">User</th><th className="px-6 py-4">Role</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Points</th></tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {users.map((u,i) => (
              <tr key={i} className="hover:bg-neutral-800/50">
                <td className="px-6 py-4"><div className="font-medium text-white">{u.name}</div><div className="text-xs text-neutral-500">{u.email}</div></td>
                <td className="px-6 py-4">{u.role}</td>
                <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs ${u.status==='Active'?'bg-green-500/10 text-green-400':'bg-amber-500/10 text-amber-400'}`}>{u.status}</span></td>
                <td className="px-6 py-4">{u.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500"><Users className="w-4 h-4" /> {users.length} users shown - frontend demo</div>
    </div>
  );
}
