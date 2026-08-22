import React from 'react';
import { CreditCard, Check, X } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function AdminWithdrawals() {
  const items = [
    { user: 'David Kim', amount: '₦25,000', method: 'Bank Transfer', status: 'Pending', date: '2h ago' },
    { user: 'Alex Rivers', amount: '₦100,000', method: 'Paystack', status: 'Pending', date: '5h ago' },
    { user: 'Sarah Jenkins', amount: '₦12,500', method: 'Bank Transfer', status: 'Approved', date: '1d ago' },
  ];
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Withdrawals</h1>
      <p className="text-neutral-400 text-sm mb-8">Approve or reject payout requests.</p>
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-950 text-neutral-400"><tr><th className="px-6 py-4">User</th><th className="px-6 py-4">Amount</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Action</th></tr></thead>
          <tbody className="divide-y divide-neutral-800">
            {items.map((r,i)=> (
              <tr key={i} className="hover:bg-neutral-800/50">
                <td className="px-6 py-4 font-medium text-white">{r.user}<div className="text-xs text-neutral-500">{r.method} • {r.date}</div></td>
                <td className="px-6 py-4 font-bold">{r.amount}</td>
                <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs ${r.status==='Pending'?'bg-amber-500/10 text-amber-400':'bg-green-500/10 text-green-400'}`}>{r.status}</span></td>
                <td className="px-6 py-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="h-8 px-3 bg-green-500/10 text-green-400 border-green-500/20" onClick={() => alert('Approved - demo')}><Check className="w-4 h-4" /></Button>
                  <Button size="sm" variant="secondary" className="h-8 px-3 bg-rose-500/10 text-rose-400 border-rose-500/20" onClick={() => alert('Rejected - demo')}><X className="w-4 h-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500"><CreditCard className="w-4 h-4" /> Frontend demo — no backend</div>
    </div>
  );
}
