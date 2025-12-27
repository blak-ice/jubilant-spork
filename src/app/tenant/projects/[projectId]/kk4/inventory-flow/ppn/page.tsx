import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "./components/OverviewTab";
import CreditedTab from "./components/CreditedTab";
import NotCreditedTab from "./components/NotCreditedTab";
import VarianceTab from "./components/VarianceTab";


export default function PphPage() {
	return (
		<div className="flex flex-col gap-[30px]">
			<div className="space-y-8 rounded-2xl  p-6">
				<Tabs defaultValue="Overview" className="w-full">
					<TabsList className="w-full rounded-2xl bg-gray-200">
						<TabsTrigger
							value="Overview"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							Overview
						</TabsTrigger>
						<TabsTrigger
							value="Credited"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							Credited
						</TabsTrigger>
						<TabsTrigger
							value="NotCredited"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							Not Credited
						</TabsTrigger>
						<TabsTrigger
							value="variance"
							className="flex-1 gap-2 items-center rounded-2xl"
						>
							variance
						</TabsTrigger>
					</TabsList>

					<TabsContent value="Overview">
						<OverviewTab />
					</TabsContent>

					<TabsContent value="Credited">
						<CreditedTab />
					</TabsContent>

					<TabsContent value="NotCredited">
						<NotCreditedTab />
					</TabsContent>

					<TabsContent value="variance">
						<VarianceTab />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
