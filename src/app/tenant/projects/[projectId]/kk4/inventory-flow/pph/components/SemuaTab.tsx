'use client';

import semuaData from '../data/semua-data.json';
import PurchaseVsPphCard from './PurchaseVsPphCard';
import CoverageCard from './CoverageCard';

export default function SemuaTab() {
  const { purchaseVsPph, coverage } = semuaData;

  return (
    <div className="flex flex-col gap-8 mt-6">
      {/* Purchase vs PPh Cross-Reference */}
      <PurchaseVsPphCard
        title={purchaseVsPph.title}
        description={purchaseVsPph.description}
        items={purchaseVsPph.items}
        reconciliation={purchaseVsPph.reconciliation}
      />

      {/* Coverage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coverage.map((item) => (
          <CoverageCard
            key={item.id}
            title={item.title}
            percentage={item.percentage}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
