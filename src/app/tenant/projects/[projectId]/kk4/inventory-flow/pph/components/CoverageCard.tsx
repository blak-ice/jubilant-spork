'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CoverageCardProps {
  title: string;
  percentage: number;
  description: string;
  color: string;
}

export default function CoverageCard({
  title,
  percentage,
  description,
  color,
}: CoverageCardProps) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-slate-900">{percentage}%</div>
          <p className="text-xs text-slate-600">{description}</p>
          <div className="pt-1">
            <Progress value={percentage} className="h-1.5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
