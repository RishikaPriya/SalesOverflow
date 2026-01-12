import { useAuth } from '@/contexts/AuthContext';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import ManagerDashboard from './dashboard/ManagerDashboard';
import SDRDashboard from './dashboard/SDRDashboard';
import SalesRepDashboard from './dashboard/SalesRepDashboard';
import AdminDashboard from './dashboard/AdminDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'manager':
        return <ManagerDashboard />;
      case 'sdr':
        return <SDRDashboard />;
      case 'sales_rep':
        return <SalesRepDashboard />;
      case 'sysadmin':
        return <AdminDashboard />;
      default:
        return <ManagerDashboard />;
    }
  };

  return (
    <DashboardLayout>
      {renderDashboard()}
    </DashboardLayout>
  );
}
