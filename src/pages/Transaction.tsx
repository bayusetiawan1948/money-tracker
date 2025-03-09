import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formatCurrency } from '@/lib/utils';

type innerValue = {
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'expenses' | '';
  account: string;
  category: string;
  description: string;
};

const Transaction = () => {
  const [data, setData] = useState<innerValue[]>([
    {
      title: 'Gaji Bulanan',
      amount: 10000000,
      date: '2025-03-01',
      type: 'income',
      account: 'BCA',
      category: 'salary',
      description: 'Gaji bulan Maret 2025',
    },
    {
      title: 'Pembelian Makan Siang',
      amount: 50000,
      date: '2025-03-02',
      type: 'expenses',
      account: 'GoPay',
      category: 'makanan',
      description: 'Makan siang di restoran',
    },
    {
      title: 'Transportasi Harian',
      amount: 25000,
      date: '2025-03-02',
      type: 'expenses',
      account: 'OVO',
      category: 'transportasi',
      description: 'Naik ojek online ke kantor',
    },
    {
      title: 'Tagihan Listrik',
      amount: 350000,
      date: '2025-03-05',
      type: 'expenses',
      account: 'Mandiri',
      category: 'bill',
      description: 'Pembayaran listrik bulan Februari',
    },
    {
      title: 'Bonus Kerja',
      amount: 2000000,
      date: '2025-03-10',
      type: 'income',
      account: 'BCA',
      category: 'salary',
      description: 'Bonus performa kerja tahunan',
    },
    {
      title: 'Investasi Saham',
      amount: 500000,
      date: '2025-03-12',
      type: 'income',
      account: 'BRI',
      category: 'investment',
      description: 'Dividen saham tahunan',
    },
    {
      title: 'Langganan Netflix',
      amount: 150000,
      date: '2025-03-15',
      type: 'expenses',
      account: 'Kartu Kredit BNI',
      category: 'entertainment',
      description: 'Langganan bulanan Netflix',
    },
    {
      title: 'Cek Kesehatan',
      amount: 300000,
      date: '2025-03-20',
      type: 'expenses',
      account: 'BCA',
      category: 'Health',
      description: 'Medical check-up di klinik',
    },
  ]);
  const [formData, setFormData] = useState<innerValue>({
    title: '',
    amount: 0,
    date: '',
    type: '',
    account: '',
    category: '',
    description: '',
  });

  const categories: Record<string, string[]> = {
    income: ['salary', 'investment'],
    expenses: ['food', 'transportation', 'bill', 'entertainment', 'health'],
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({
      title: '',
      amount: 0,
      date: '',
      type: '',
      account: '',
      category: '',
      description: '',
    });
  };

  const countIncome = () => {
    return data.reduce(
      (total: number, item: innerValue) =>
        total + (item.type === 'income' ? item.amount : 0),
      0
    );
  };

  const countExpenses = () => {
    return data.reduce(
      (total: number, item: innerValue) =>
        total + (item.type === 'expenses' ? item.amount : 0),
      0
    );
  };

  return (
    <div className="p-8 grid grid-cols-1 content-start gap-4 size-full min-h-screen lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title">Judul</label>
          <Input
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Jumlah</label>
          <Input
            name="amount"
            id="amount"
            type="number"
            inputMode="numeric"
            value={formData.amount}
            onChange={(e) => {
              setFormData({
                ...formData,
                ['amount']: Number(e.target.value),
              });
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Tanggal</label>
          <Input
            name="date"
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Tipe</label>
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                type: value as 'income' | 'expenses',
                category: '',
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Tipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Pemasukan</SelectItem>
              <SelectItem value="expenses">Pengeluaran</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="">Akun</label>
          <Input
            name="account"
            value={formData.account}
            onChange={(e) =>
              setFormData({ ...formData, account: e.target.value })
            }
            required
          />
        </div>
        {formData.type && (
          <div>
            <label htmlFor="">Kategori</label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                {categories[formData.type].map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        <div>
          <label htmlFor="description">Keterangan</label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <Button type="submit" className="w-full">
          Simpan
        </Button>
      </form>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>title</TableHead>
              <TableHead>amount</TableHead>
              <TableHead>date</TableHead>
              <TableHead>type</TableHead>
              <TableHead>account</TableHead>
              <TableHead>category</TableHead>
              <TableHead>description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.title}</TableCell>
                <TableCell>{formatCurrency(data.amount)}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell>{data.account}</TableCell>
                <TableCell>{data.category}</TableCell>
                <TableCell>{data.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="border-t border-slate-600">
            <TableRow className="text-green-600">
              <TableCell>Total Income</TableCell>
              <TableCell>{formatCurrency(countIncome())}</TableCell>
            </TableRow>
            <TableRow className="text-red-600">
              <TableCell>Total Expenses</TableCell>
              <TableCell>{formatCurrency(countExpenses())}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Transaction;
