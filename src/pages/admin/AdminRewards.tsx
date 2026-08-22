import React from 'react';
import { Gift, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function AdminRewards() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Rewards</h1>
      <p className="text-neutral-400 text-sm mb-8">Manage reward catalog.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: '₦5,000 Voucher', points: 5000, stock: 42 },
          { title: 'Airtime ₦2,000', points: 2000, stock: 120 },
          { title: 'Premium Month', points: 10000, stock: 8 },
        ].map((r,i)=> (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
            <Gift className="w-8 h-8 text-white mb-4" />
            <div className="font-bold text-white mb-1">{r.title}</div>
            <div className="text-sm text-neutral-500 mb-4">{r.points.toLocaleString()} PP • {r.stock} in stock</div>
            <Button variant="secondary" size="sm" className="w-full" onClick={() => alert('Edit reward - demo')}>Edit</Button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Button onClick={() => alert('Create reward - demo')}><Check className="w-4 h-4 mr-2" />New Reward</Button>
      </div>
    </div>
  );
}
