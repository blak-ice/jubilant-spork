import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, CircleCheck, File, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InventoryFlowLayout({ params }: { params: { projectId: string } }) {
  const router = useRouter();
	return (
		<div className="flex flex-col gap-[30px]">
			<div className="space-y-8 rounded-2xl p-6">
				<Tabs defaultValue="Overview" className="w-full">
					<TabsList className="w-full rounded-2xl bg-gray-200">
						<TabsTrigger
						onClick={() => router.push(`/tenant/projects/${params.projectId}/kk4/inventory-flow/overview`)}
							value="Overview"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							Overview
						</TabsTrigger>
						<TabsTrigger
							value="Pph"
							onClick={() => router.push(`/tenant/projects/${params.projectId}/kk4/inventory-flow/pph`)}
							className="flex-1 gap-2 items-center rounded-2xl"
						>
						KK 4.5.1: Barang vs PPh
						</TabsTrigger>
						<TabsTrigger
							value="Ppn"
							onClick={() => router.push(`/tenant/projects/${params.projectId}/kk4/inventory-flow/ppn`)}
							className="flex-1 gap-2 items-center rounded-2xl"
						>
						KK 4.5.2: Barang vs PPN
						</TabsTrigger>
						<TabsTrigger
							value="Trend"
							onClick={() => router.push(`/tenant/projects/${params.projectId}/kk4/inventory-flow/trend`)}
							className="flex-1 gap-2 items-center rounded-2xl"
						>
						Trend Analysis
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
		</div>
	);
}
