"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Search, Filter, MoreHorizontal, Eye, CheckCircle2 } from "lucide-react";

const creditedData = [
	{
		id: "INV-2025-001",
		date: "15 Sep 2025",
		faktur: "010.000-25.00000001",
		supplier: "PT Supplier Material",
		npwp: "01.234.567.8-901.000",
		category: "PKP",
		dppGl: "Rp 500 jt",
		dppSpt: "Rp 500 jt",
		ppnGl: "Rp 55 jt",
		ppnSpt: "Rp 55 jt",
		variance: "✓",
		status: "Matched",
	},
	{
		id: "INV-2025-GT-028",
		date: "22 Sep 2025",
		faktur: "010.000-25.00000018",
		supplier: "PT Global Trading",
		npwp: "03.456.789.0-123.000",
		category: "PKP",
		dppGl: "Rp 1,2 M",
		dppSpt: "Rp 1,2 M",
		ppnGl: "Rp 132 jt",
		ppnSpt: "Rp 132 jt",
		variance: "✓",
		status: "Matched",
	},
	{
		id: "INV-2025-MNT-089",
		date: "30 Sep 2025",
		faktur: "010.000-25.00000024",
		supplier: "CV Jasa Maintenance",
		npwp: "06.789.012.3-456.000",
		category: "PKP",
		dppGl: "Rp 450 jt",
		dppSpt: "Rp 450 jt",
		ppnGl: "Rp 49,5 jt",
		ppnSpt: "Rp 49,5 jt",
		variance: "✓",
		status: "Matched",
	},
	{
		id: "INV-2025-KON-067",
		date: "05 Okt 2025",
		faktur: "010.000-25.00000035",
		supplier: "PT Konstruksi Jaya",
		npwp: "08.123.456.7-890.000",
		category: "PKP",
		dppGl: "Rp 950 jt",
		dppSpt: "Rp 950 jt",
		ppnGl: "Rp 104,5 jt",
		ppnSpt: "Rp 104,5 jt",
		variance: "✓",
		status: "Matched",
	},
	{
		id: "INV-2025-PDM-123",
		date: "08 Okt 2025",
		faktur: "010.000-25.00000042",
		supplier: "CV Perdagangan Makmur",
		npwp: "09.234.567.8-901.000",
		category: "PKP",
		dppGl: "Rp 680 jt",
		dppSpt: "Rp 680 jt",
		ppnGl: "Rp 74,8 jt",
		ppnSpt: "Rp 74,8 jt",
		variance: "✓",
		status: "Matched",
	},
	{
		id: "INV-2025-DST-089",
		date: "10 Okt 2025",
		faktur: "010.000-25.00000048",
		supplier: "PT Distributor Resmi",
		npwp: "10.345.678.9-012.000",
		category: "PKP",
		dppGl: "Rp 2,35 M",
		dppSpt: "Rp 2,35 M",
		ppnGl: "Rp 144 jt",
		ppnSpt: "Rp 144 jt",
		variance: "✓",
		status: "Matched",
	},
	{
		id: "INV-2025-EQP-034",
		date: "02 Okt 2025",
		faktur: "010.000-25.00000031",
		supplier: "PT Equipment Supplier",
		npwp: "07.890.123.4-567.000",
		category: "PKP",
		dppGl: "Rp 1,8 M",
		dppSpt: "Rp 1,792 M",
		ppnGl: "Rp 198 jt",
		ppnSpt: "Rp 197,12 jt",
		variance: "Rp 8 jt",
		status: "Variance",
		statusVariant: "warning",
	},
	{
		id: "INV-2025-IND-045",
		date: "14 Okt 2025",
		faktur: "010.000-25.00000056",
		supplier: "PT Industri Manufacturing",
		npwp: "12.567.890.1-234.000",
		category: "PKP",
		dppGl: "Rp 2,1 M",
		dppSpt: "Rp 2,085 M",
		ppnGl: "Rp 231 jt",
		ppnSpt: "Rp 229,35 jt",
		variance: "Rp 15 jt",
		status: "Variance",
		statusVariant: "warning",
		rowBg: "bg-[#FFFBE6]/30",
	},
];

export default function CreditedTab() {
	const summaryCards = [
		{
			title: "Total Dikreditkan",
			value: "10",
			description: "Transaksi dari PKP",
			bgColor: "bg-[#F6FFED]",
			valueColor: "text-[#52C41A]",
		},
		{
			title: "Total DPP (SPT)",
			value: "Rp 10,247 M",
			description: "Basis PPN dikreditkan",
			bgColor: "bg-white",
			valueColor: "text-[#1A1A2E]",
		},
		{
			title: "Total PPN Masukan",
			value: "Rp 1,127 M",
			description: "11% dari DPP",
			bgColor: "bg-[#E6F7FF]",
			valueColor: "text-[#1890FF]",
		},
	];

	return (
		<div className="flex flex-col gap-5 mt-6">
			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{summaryCards.map((card, index) => (
					<Card
						key={index}
						className={`${card.bgColor} border-slate-200/50 shadow-sm`}
					>
						<CardContent className="p-6">
							<h3 className="text-xs font-normal text-[#1A1A2E] mb-7">
								{card.title}
							</h3>
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

			{/* Table Card */}
			<Card className="border-slate-200/50 shadow-sm">
				<CardContent className="p-6">
					{/* Header */}
					<div className="mb-5">
						<h2 className="text-2xl font-bold text-[#1A1A2E] leading-8 tracking-tight mb-1">
							PPN Dikreditkan
						</h2>
						<p className="text-sm text-[#64748B] leading-[21px]">
							PPN Masukan yang dapat dikreditkan dari PKP
						</p>
					</div>

					{/* Filters */}
					<div className="bg-[#F4F7FE] rounded-lg p-2.5 mb-5 flex items-center gap-5 flex-wrap">
						<Select defaultValue="20">
							<SelectTrigger className="w-[80px] h-[54px] bg-white border-[#D9D9D9]">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="10">10</SelectItem>
								<SelectItem value="20">20</SelectItem>
								<SelectItem value="50">50</SelectItem>
							</SelectContent>
						</Select>

						<div className="flex-1 relative min-w-[200px]">
							<Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#332687]" />
							<Input
								placeholder="Cari nama user"
								className="h-[54px] pl-14 bg-white border-[#D9D9D9] placeholder:text-[#8F9BBA]"
							/>
						</div>

						<div className="flex items-center gap-2.5">
							<Select defaultValue="all-status">
								<SelectTrigger className="h-[54px] bg-white border-[#D9D9D9] min-w-[120px]">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all-status">All Status</SelectItem>
									<SelectItem value="matched">Matched</SelectItem>
									<SelectItem value="variance">Variance</SelectItem>
								</SelectContent>
							</Select>

							<Select defaultValue="all-type">
								<SelectTrigger className="h-[54px] bg-white border-[#D9D9D9] min-w-[120px]">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all-type">All Type</SelectItem>
									<SelectItem value="pkp">PKP</SelectItem>
								</SelectContent>
							</Select>

							<Button
								variant="outline"
								className="h-[54px] px-5 bg-[#F9FAFB] border-[#D9D9D9]"
							>
								<Filter className="h-4 w-4 mr-2 text-[#332687]" />
								<span className="text-sm font-medium text-[#49454F]">Filter</span>
							</Button>

							<Button className="h-[54px] w-[54px] p-0 bg-[#F4F7FE] hover:bg-[#E6EEFE]">
								<MoreHorizontal className="h-9 w-9 text-[#4318FF]" />
							</Button>
						</div>
					</div>

					{/* Table */}
					<div className="border border-slate-200 rounded-lg overflow-hidden">
						<Table>
							<TableHeader>
								<TableRow className="bg-slate-100/50 border-b border-slate-200">
									<TableHead className="text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Invoice / Faktur
									</TableHead>
									<TableHead className="text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Supplier
									</TableHead>
									<TableHead className="text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Kategori
									</TableHead>
									<TableHead className="text-right text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										DPP (GL)
									</TableHead>
									<TableHead className="text-right text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										DPP (SPT)
									</TableHead>
									<TableHead className="text-right text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										PPN (GL)
									</TableHead>
									<TableHead className="text-right text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										PPN (SPT)
									</TableHead>
									<TableHead className="text-right text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Variance
									</TableHead>
									<TableHead className="text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Status
									</TableHead>
									<TableHead className="text-center text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Action
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{creditedData.map((row, index) => (
									<TableRow
										key={index}
										className={`border-b border-slate-200 ${row.rowBg || ""}`}
									>
										<TableCell>
											<div className="flex items-center gap-2">
												<svg
													className="w-3.5 h-3.5 text-[#64748B]"
													viewBox="0 0 14 14"
													fill="none"
												>
													<path
														d="M2.332 1.168v11.666l1.167-.583 1.167.583 1.166-.583 1.167.583 1.167-.583 1.166.583 1.167-.583 1.167.583V1.168l-1.167.583-1.166-.583-1.167.583-1.167-.583-1.166.583-1.167-.583-1.167.583-1.166-.583z"
														stroke="currentColor"
														strokeWidth="1.167"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												<div className="flex flex-col">
													<span className="text-xs font-normal text-[#1A1A2E] font-mono">
														{row.id}
													</span>
													<span className="text-[11px] font-normal text-[#64748B]">
														{row.date}
													</span>
													<span className="text-[11px] font-normal text-[#64748B] font-mono">
														{row.faktur}
													</span>
												</div>
											</div>
										</TableCell>
										<TableCell>
											<div className="flex flex-col">
												<span className="text-xs font-normal text-[#1A1A2E]">
													{row.supplier}
												</span>
												<span className="text-[11px] font-normal text-[#64748B] font-mono">
													{row.npwp}
												</span>
											</div>
										</TableCell>
										<TableCell>
											<Badge
												variant="outline"
												className="border-[#1890FF] bg-[#E6F7FF] text-[#1890FF] text-[11px] font-normal"
											>
												{row.category}
											</Badge>
										</TableCell>
										<TableCell className="text-right text-xs font-normal text-[#1A1A2E] font-mono">
											{row.dppGl}
										</TableCell>
										<TableCell className="text-right text-xs font-normal text-[#1A1A2E] font-mono">
											{row.dppSpt}
										</TableCell>
										<TableCell className="text-right text-xs font-normal text-[#1A1A2E] font-mono">
											{row.ppnGl}
										</TableCell>
										<TableCell className="text-right text-xs font-normal text-[#1A1A2E] font-mono">
											{row.ppnSpt}
										</TableCell>
										<TableCell
											className={`text-right text-xs font-normal font-mono ${
												row.statusVariant === "warning"
													? "text-[#F5222D]"
													: "text-[#52C41A]"
											}`}
										>
											{row.variance}
										</TableCell>
										<TableCell>
											<Badge
												variant="outline"
												className={`${
													row.statusVariant === "warning"
														? "border-[#FAAD14] bg-[#FFFBE6] text-[#FAAD14]"
														: "border-[#52C41A] bg-[#F6FFED] text-[#52C41A]"
												} text-[11px] font-normal`}
											>
												{row.statusVariant === "warning" ? (
													<>
														<AlertTriangle className="w-2.5 h-2.5 mr-1.5" />
														{row.status}
													</>
												) : (
													<>
														<CheckCircle2 className="w-2.5 h-2.5 mr-1.5" />
														{row.status}
													</>
												)}
											</Badge>
										</TableCell>
										<TableCell className="text-center">
											<Button
												variant="ghost"
												size="icon"
												className="h-7 w-7 rounded-lg"
											>
												<Eye className="h-3.5 w-3.5 text-[#1A1A2E]" />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
