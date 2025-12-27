'use client';

import varianceData from '../data/variance-data.json';
import VarianceChart from './VarianceChart';
import TransactionTable from './TransactionTable';

export default function VarianceTab() {
  const { varianceChart, transactions } = varianceData;

  return (
    <div className="flex flex-col gap-8 mt-6">
      {/* Variance by Category Chart */}
      <VarianceChart
        title={varianceChart.title}
        description={varianceChart.description}
        data={varianceChart.data}
      />

      {/* PPh Purchase Transactions Table */}
      <TransactionTable
        title={transactions.title}
        subtitle={transactions.subtitle}
        total={transactions.total}
        rows={transactions.rows}
      />
    </div>
  );
}
