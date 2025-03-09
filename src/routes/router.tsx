import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import Transaction from '@/pages/Transaction';
import Category from '@/pages/Category';
import BankAccount from '@/pages/BankAccount';
import Calendar from '@/pages/Calendar';
import UpcomingPayment from '@/pages/UpcomingPayment';
import Goals from '@/pages/Goal';
import Analytics from '@/pages/Analytic';
import Account from '@/pages/Account';
import MainLayout from '@/components/layouts/MainLayout';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/category" element={<Category />} />
          <Route path="/bank-account" element={<BankAccount />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/upcoming-payment" element={<UpcomingPayment />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
