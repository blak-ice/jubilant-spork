'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ChartData {
  category: string;
  value: number;
  color: string;
}

interface VarianceChartProps {
  title: string;
  description: string;
  data: ChartData[];
}

export default function VarianceChart({ title, description, data }: VarianceChartProps) {
  // Calculate max value for scaling
  const maxValue = Math.max(...data.map((d) => d.value));
  const scale = 400 / maxValue; // 400px is the max width for bars

  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Y-axis labels and grid */}
          <div className="relative h-80">
            {/* Y-axis */}
            <div className="absolute left-0 top-0 bottom-0 w-20 flex flex-col justify-between text-right pr-4 text-xs text-slate-600">
              <span>280000000</span>
              <span>210000000</span>
              <span>140000000</span>
              <span>70000000</span>
              <span>0</span>
            </div>

            {/* Chart bars */}
            <div className="ml-24 pt-16 space-y-16">
              {data.map((item) => (
                <div key={item.category} className="flex items-end gap-4">
                  {/* Bar */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="rounded"
                      style={{
                        width: `${item.value * scale}px`,
                        height: '80px',
                        backgroundColor: item.color,
                      }}
                    />
                    <span className="text-xs font-medium text-slate-900">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
