'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, Filter, MoreVertical, Search } from 'lucide-react';

interface TransactionRow {
  id: number;
  invoiceNo: string;
  date: string;
  supplier: string;
  npwp: string;
  category: string;
  pphType: string;
  dppGL: string;
  dppSPT: string;
  variance: string;
  pphAmount: string;
  buktiPotong: string;
  status: string;
  statusColor: string;
}

interface TransactionTableProps {
  title: string;
  subtitle: string;
  total: number;
  rows: TransactionRow[];
}

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Matched':
      return 'bg-green-50 text-green-700 border-green-200';
    case 'Variance':
      return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    case 'Missing':
      return 'bg-red-50 text-red-700 border-red-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
};

export default function TransactionTable({
  title,
  subtitle,
  total,
  rows,
}: TransactionTableProps) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-lg">{title} ({total})</CardTitle>
        <CardDescription className="text-slate-600">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex gap-2 items-center flex-wrap">
            <Select defaultValue="20">
              <SelectTrigger className="w-16 h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Cari nama user"
                className="pl-9 h-11"
              />
            </div>

            <Select defaultValue="all-status">
              <SelectTrigger className="w-32 h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="matched">Matched</SelectItem>
                <SelectItem value="variance">Variance</SelectItem>
                <SelectItem value="missing">Missing</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-type">
              <SelectTrigger className="w-28 h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-type">All Type</SelectItem>
                <SelectItem value="pph23">PPh 23</SelectItem>
                <SelectItem value="pph22">PPh 22</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="h-11 w-11">
              <Filter className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="icon" className="h-11 w-11">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="border-b border-slate-200">
                  <TableHead className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Invoice No.
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Supplier
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Category
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    PPh Type
                  </TableHead>
                  <TableHead className="text-right text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    DPP (GL)
                  </TableHead>
                  <TableHead className="text-right text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    DPP (SPT)
                  </TableHead>
                  <TableHead className="text-right text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Variance
                  </TableHead>
                  <TableHead className="text-right text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    PPh Amount
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Bukti Potong
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Status
                  </TableHead>
                  <TableHead className="text-center text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className={`border-b border-slate-200 ${
                      row.status === 'Variance' ? 'bg-yellow-50/30' : row.status === 'Missing' ? 'bg-red-50/30' : ''
                    }`}
                  >
                    <TableCell className="text-sm">
                      <div>
                        <p className="font-mono text-slate-900">{row.invoiceNo}</p>
                        <p className="text-xs text-slate-500">{row.date}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      <div>
                        <p className="text-slate-900 font-medium">{row.supplier}</p>
                        <p className="text-xs text-slate-500 font-mono">{row.npwp}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {row.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`text-xs ${
                          row.pphType === 'PPh 23'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-green-50 text-green-700 border-green-200'
                        }`}
                        variant="outline"
                      >
                        {row.pphType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-sm font-mono text-slate-900">
                      {row.dppGL}
                    </TableCell>
                    <TableCell className="text-right text-sm font-mono text-slate-900">
                      {row.dppSPT}
                    </TableCell>
                    <TableCell
                      className={`text-right text-sm font-mono ${
                        row.variance === '✓'
                          ? 'text-green-600'
                          : row.variance.startsWith('Rp')
                            ? 'text-red-600'
                            : 'text-slate-900'
                      }`}
                    >
                      {row.variance === '✓' ? '✓' : row.variance}
                    </TableCell>
                    <TableCell className="text-right text-sm font-mono text-slate-900">
                      {row.pphAmount}
                    </TableCell>
                    <TableCell className="text-sm font-mono text-slate-900">
                      {row.buktiPotong}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${getStatusBadgeColor(row.status)}`}
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4 text-slate-600" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
