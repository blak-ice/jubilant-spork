import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import OverviewTab from "./components/OverviewTab";
import CreditedTab from "./components/CreditedTab";
import NotCreditedTab from "./components/NotCreditedTab";
import VarianceTab from "./components/VarianceTab";

export default function PpnPage() {
	const summaryCards = [
		{
			title: "Total DPP (GL)",
			value: "Rp 12,39 M",
			description: "General Ledger",
			bgColor: "bg-white",
			valueColor: "text-[#1A1A2E]",
		},
		{
			title: "Total PPN (SPT)",
			value: "Rp 1,127 M",
			description: "SPT PPN Masa",
			bgColor: "bg-white",
			valueColor: "text-[#1A1A2E]",
		},
		{
			title: "PPN Dikreditkan",
			value: "Rp 1,127 M",
			description: "96.3% dari total PPN",
			icon: <CheckCircle2 className="h-3.5 w-3.5 text-[#00A63E]" />,
			bgColor: "bg-[#F6FFED]",
			valueColor: "text-[#52C41A]",
		},
		{
			title: "Variance",
			value: "Rp 273 jt",
			description: "5 issues",
			icon: <AlertTriangle className="h-3.5 w-3.5 text-[#E7000B]" />,
			bgColor: "bg-[#FFF1F0]",
			valueColor: "text-[#F5222D]",
		},
	];

	return (
		<div className="flex flex-col gap-5">
			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{summaryCards.map((card, index) => (
					<Card
						key={index}
						className={`${card.bgColor} border-slate-200/50 shadow-sm`}
					>
						<CardContent className="p-6">
							<div className="flex items-center gap-2 mb-7">
								{card.icon}
								<h3 className="text-xs font-normal text-[#1A1A2E]">
									{card.title}
								</h3>
							</div>
							<div className="space-y-1">
								<p className={`text-[21px] font-normal leading-7 ${card.valueColor}`}>
									{card.value}
								</p>
								<p className="text-[11px] font-normal text-[#64748B]">
									{card.description}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Tabs Section */}
			<div className="space-y-8 rounded-2xl p-6">
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
							Variance
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
