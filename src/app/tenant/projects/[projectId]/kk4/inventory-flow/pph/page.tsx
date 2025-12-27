'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Pph23 from './components/Pph23';
import Pph22 from './components/Pph22';

export default function PphPage() {
  const [activeTab, setActiveTab] = useState('pph23');

  return (
    <div className="w-full space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">PPh Withholding Management</h1>
        <p className="text-sm text-slate-600">
          Overview of PPh 23 (Services) and PPh 22 (Goods) withholding transactions
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1">
          <TabsTrigger 
            value="pph23"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            PPh 23 (Jasa)
          </TabsTrigger>
          <TabsTrigger 
            value="pph22"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            PPh 22 (Barang)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pph23" className="space-y-6">
          <Pph23 />
        </TabsContent>

        <TabsContent value="pph22" className="space-y-6">
          <Pph22 />
        </TabsContent>
      </Tabs>
    </div>
  );
}
