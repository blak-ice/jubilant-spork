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
import { Search, Filter, MoreHorizontal, Eye, BanIcon, XCircle } from "lucide-react";

const notCreditedData = [
	{
		id: "PIB-2025-012",
		date: "28 Sep 2025",
		faktur: "PIB-012-2025",
		supplier: "PT Importir Barang",
		npwp: "05.678.901.2-345.000",
		category: "Import",
		categoryColor: "purple",
		dppGl: "Rp 750 jt",
		ppnGl: "Rp 82,5 jt",
		status: "Missing",
		statusVariant: "error",
		description: "PPN Import belum dilaporkan di SPT",
		rowBg: "bg-[#FFF1F0]/30",
	},
	{
		id: "PIB-2025-024",
		date: "15 Okt 2025",
		faktur: "PIB-024-2025",
		supplier: "PT Global Import",
		npwp: "13.678.901.2-345.000",
		category: "Import",
		categoryColor: "purple",
		dppGl: "Rp 1,25 M",
		ppnGl: "Rp 137,5 jt",
		status: "Missing",
		statusVariant: "error",
		description: "PPN Import belum tercatat di SPT Masa",
		rowBg: "bg-[#FFF1F0]/30",
	},
	{
		id: "INV-2025-NONPKP-156",
		date: "25 Sep 2025",
		faktur: "-",
		supplier: "UD Toko Non PKP",
		npwp: "-",
		category: "Non-PKP",
		categoryColor: "warning",
		dppGl: "Rp 50 jt",
		ppnGl: "Rp 0",
		status: "Non-Creditable",
		statusVariant: "warning",
		description: "Pembelian dari non-PKP, PPN tidak dapat dikreditkan",
		rowBg: "bg-[#FFF7E6]/20",
	},
	{
		id: "INV-2025-RTL-089",
		date: "16 Okt 2025",
		faktur: "-",
		supplier: "Toko Retail Kecil",
		npwp: "-",
		category: "Non-PKP",
		categoryColor: "warning",
		dppGl: "Rp 25 jt",
		ppnGl: "Rp 0",
		status: "Non-Creditable",
		statusVariant: "warning",
		description: "Supplier non-PKP, tidak ada faktur pajak",
		rowBg: "bg-[#FFF7E6]/20",
	},
	{
		id: "INV-2025-WSR-234",
		date: "18 Okt 2025",
		faktur: "-",
		supplier: "UD Warung Sari",
		npwp: "-",
		category: "Non-PKP",
		categoryColor: "warning",
		dppGl: "Rp 15 jt",
		ppnGl: "Rp 0",
		status: "Non-Creditable",
		statusVariant: "warning",
		description: "Pembelian retail dari non-PKP",
		rowBg: "bg-[#FFF7E6]/20",
	},
];

export default function NotCreditedTab() {
	const summaryCards = [
		{
			title: "Total Tidak Dikreditkan",
			value: "5",
			description: "Non-PKP + Import Missing",
			icon: <BanIcon className="h-3.5 w-3.5 text-[#FAAD14]" />,
			bgColor: "bg-[#FFF7E6]",
			valueColor: "text-[#FAAD14]",
		},
		{
			title: "Total DPP (GL)",
			value: "Rp 2,09 M",
			description: "Pembelian non-creditable",
			bgColor: "bg-white",
			valueColor: "text-[#1A1A2E]",
		},
		{
			title: "Breakdown",
			value: null,
			description: null,
			bgColor: "bg-white",
			valueColor: "text-[#1A1A2E]",
			isBreakdown: true,
		},
	];

	return (
		<div className="flex flex-col gap-3.5 mt-6">
			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
				{summaryCards.map((card, index) => (
					<Card
						key={index}
						className={`${card.bgColor} border-slate-200/50 shadow-sm`}
					>
						<CardContent className="p-[21px]">
							{card.isBreakdown ? (
								<>
									<h3 className="text-xs font-normal text-[#1A1A2E] mb-9">
										{card.title}
									</h3>
									<div className="space-y-3.5">
										<div className="flex justify-between items-start">
											<span className="text-xs font-normal text-[#64748B]">
												Non-PKP:
											</span>
											<span className="text-xs font-normal text-[#1A1A2E]">3</span>
										</div>
										<div className="flex justify-between items-start">
											<span className="text-xs font-normal text-[#64748B]">
												Import Missing:
											</span>
											<span className="text-xs font-normal text-[#1A1A2E]">2</span>
										</div>
									</div>
								</>
							) : (
								<>
									<div className="flex items-center gap-2 mb-9">
										{card.icon}
										<h3 className="text-xs font-normal text-[#1A1A2E]">
											{card.title}
										</h3>
									</div>
									<div className="space-y-1">
										<p
											className={`text-[21px] font-normal leading-7 ${card.valueColor}`}
										>
											{card.value}
										</p>
										<p className="text-[11px] font-normal text-[#64748B]">
											{card.description}
										</p>
									</div>
								</>
							)}
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
							PPN Tidak Dikreditkan
						</h2>
						<p className="text-sm text-[#64748B] leading-[21px]">
							PPN dari Non-PKP atau tidak memenuhi syarat pengkreditan
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
									<SelectItem value="missing">Missing</SelectItem>
									<SelectItem value="non-creditable">Non-Creditable</SelectItem>
								</SelectContent>
							</Select>

							<Select defaultValue="all-type">
								<SelectTrigger className="h-[54px] bg-white border-[#D9D9D9] min-w-[120px]">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all-type">All Type</SelectItem>
									<SelectItem value="import">Import</SelectItem>
									<SelectItem value="non-pkp">Non-PKP</SelectItem>
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
										PPN (GL)
									</TableHead>
									<TableHead className="text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Status
									</TableHead>
									<TableHead className="text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Keterangan
									</TableHead>
									<TableHead className="text-center text-[11px] font-normal text-[#64748B] uppercase tracking-wider">
										Action
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{notCreditedData.map((row, index) => (
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
												className={`${
													row.categoryColor === "purple"
														? "border-[#722ED1] bg-[#F9F0FF] text-[#722ED1]"
														: "border-[#FAAD14] bg-[#FFF7E6] text-[#FAAD14]"
												} text-[11px] font-normal`}
											>
												{row.category}
											</Badge>
										</TableCell>
										<TableCell className="text-right text-xs font-normal text-[#1A1A2E] font-mono">
											{row.dppGl}
										</TableCell>
										<TableCell className="text-right text-xs font-normal text-[#1A1A2E] font-mono">
											{row.ppnGl}
										</TableCell>
										<TableCell>
											<Badge
												variant="outline"
												className={`${
													row.statusVariant === "error"
														? "border-[#F5222D] bg-[#FFF1F0] text-[#F5222D]"
														: "border-[#FAAD14] bg-[#FFF7E6] text-[#FAAD14]"
												} text-[11px] font-normal`}
											>
												{row.statusVariant === "error" ? (
													<>
														<XCircle className="w-2.5 h-2.5 mr-1.5" />
														{row.status}
													</>
												) : (
													<>
														<BanIcon className="w-2.5 h-2.5 mr-1.5" />
														{row.status}
													</>
												)}
											</Badge>
										</TableCell>
										<TableCell>
											<span className="text-[11px] font-normal text-[#64748B]">
												{row.description}
											</span>
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
