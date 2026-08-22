import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function AdminReports() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Reports</h1>
      <p className="text-neutral-400 text-sm mb-8">Export platform analytics.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {['User Growth','Revenue','Campaign Performance','Reward Redemptions'].map((t,i)=> (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center"><FileText className="w-6 h-6 text-white" /></div>
              <div className="font-bold text-white">{t}</div>
            </div>
            <Button variant="secondary" size="sm" onClick={() => alert('Download report - demo')}><Download className="w-4 h-4 mr-2" />Export</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
