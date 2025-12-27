'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CheckCircle } from 'lucide-react';

interface Item {
  id: number;
  title: string;
  source: string;
  value: string;
}

interface Reconciliation {
  title: string;
  value: string;
  message: string;
  status: string;
}

interface PurchaseVsPphCardProps {
  title: string;
  description: string;
  items: Item[];
  reconciliation: Reconciliation;
}

export default function PurchaseVsPphCard({
  title,
  description,
  items,
  reconciliation,
}: PurchaseVsPphCardProps) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5 text-indigo-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.source}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-900 font-mono">{item.value}</p>
            </div>
          ))}

          {/* Reconciliation */}
          <div className="mt-4 rounded-lg bg-blue-50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-slate-900">{reconciliation.title}</p>
              </div>
              <p className="text-sm font-medium text-slate-900 font-mono">{reconciliation.value}</p>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <p className="text-xs text-slate-600">{reconciliation.message}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
