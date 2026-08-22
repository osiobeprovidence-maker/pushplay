import React from 'react';
import { MOCK_TRANSACTIONS } from '../../data/mockData';
import { useAppStore } from '../../store/useAppStore';
import { ArrowDownRight, ArrowUpRight, Wallet as WalletIcon, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';

export function Wallet() {
  const { user } = useAppStore();

  const totalEarned = MOCK_TRANSACTIONS.filter(t => t.type === 'earn').reduce((acc, curr) => acc + curr.amount, 0);
  const totalSpent = MOCK_TRANSACTIONS.filter(t => t.type === 'spend').reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Wallet</h1>
        <p className="text-neutral-400">Manage your Play Points and history.</p>
      </header>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors" />
          <div className="text-neutral-400 font-medium mb-1 text-sm">Available Balance</div>
          <div className="text-3xl font-bold text-white mb-4">{user?.points.toLocaleString()} PP</div>
          <div className="w-10 h-10 rounded-full bg-neutral-950 flex items-center justify-center border border-neutral-800">
            <WalletIcon className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="text-neutral-400 font-medium mb-1 text-sm">Total Earned</div>
          <div className="text-2xl font-bold text-green-400 mb-4">+{totalEarned.toLocaleString()} PP</div>
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-green-500" />
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="text-neutral-400 font-medium mb-1 text-sm">Total Redeemed</div>
          <div className="text-2xl font-bold text-neutral-300 mb-4">-{totalSpent.toLocaleString()} PP</div>
          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
            <ArrowDownRight className="w-5 h-5 text-neutral-400" />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">Transaction History</h2>
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden">
        {MOCK_TRANSACTIONS.length > 0 ? (
          <div className="divide-y divide-neutral-800">
            {MOCK_TRANSACTIONS.map(tx => (
              <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'earn' ? 'bg-green-500/10 text-green-500' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    {tx.type === 'earn' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-medium text-white">{tx.title}</div>
                    <div className="text-xs text-neutral-500">{format(new Date(tx.date), 'MMM d, yyyy • h:mm a')}</div>
                  </div>
                </div>
                <div className={`font-bold ${tx.type === 'earn' ? 'text-green-400' : 'text-white'}`}>
                  {tx.type === 'earn' ? '+' : '-'}{tx.amount} PP
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center text-neutral-500">
            No transactions yet. Start playing to earn points!
          </div>
        )}
      </div>
    </div>
  );
}
