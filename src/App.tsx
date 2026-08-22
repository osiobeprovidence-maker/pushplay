import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { UserLayout } from './components/layout/UserLayout';
import { CreatorLayout } from './components/layout/CreatorLayout';
import { BusinessLayout } from './components/layout/BusinessLayout';
import { AdminLayout } from './components/layout/AdminLayout';

// Public Pages
import { Home } from './pages/public/Home';
import { Login } from './pages/public/Login';
import { DiscoverOverview } from './pages/public/DiscoverOverview';
import { CreatorsOverview } from './pages/public/CreatorsOverview';
import { BusinessOverview } from './pages/public/BusinessOverview';

// User Pages
import { Dashboard } from './pages/user/Dashboard';
import { Discover } from './pages/user/Discover';
import { Watch } from './pages/user/Watch';
import { Rewards } from './pages/user/Rewards';
import { Live } from './pages/user/Live';
import { Profile } from './pages/user/Profile';
import { Wallet } from './pages/user/Wallet';

// Creator Pages
import { CreatorDashboard } from './pages/creator/CreatorDashboard';
import { CreatorCreate } from './pages/creator/CreatorCreate';
import { CreatorCampaigns } from './pages/creator/CreatorCampaigns';
import { CreatorContent } from './pages/creator/CreatorContent';
import { CreatorLive } from './pages/creator/CreatorLive';
import { CreatorAnalytics } from './pages/creator/CreatorAnalytics';
import { CreatorChallenges } from './pages/creator/CreatorChallenges';
import { CreatorProfile } from './pages/creator/CreatorProfile';

// Business Pages
import { BusinessDashboard } from './pages/business/BusinessDashboard';
import { BusinessCreate } from './pages/business/BusinessCreate';
import { BusinessCampaigns } from './pages/business/BusinessCampaigns';
import { BusinessAnalytics } from './pages/business/BusinessAnalytics';
import { BusinessAudience } from './pages/business/BusinessAudience';
import { BusinessSettings } from './pages/business/BusinessSettings';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminCampaigns } from './pages/admin/AdminCampaigns';
import { AdminRewards } from './pages/admin/AdminRewards';
import { AdminWithdrawals } from './pages/admin/AdminWithdrawals';
import { AdminReports } from './pages/admin/AdminReports';
import { AdminSettings } from './pages/admin/AdminSettings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/explore" element={<DiscoverOverview />} />
          <Route path="/creators" element={<CreatorsOverview />} />
          <Route path="/for-business" element={<BusinessOverview />} />
          <Route path="/pro" element={<Navigate to="/signup" replace />} />
        </Route>

        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/live" element={<Live />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/listen/:id" element={<Watch />} />
        </Route>

        {/* Creator Routes */}
        <Route path="/creator" element={<CreatorLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<CreatorDashboard />} />
          <Route path="create" element={<CreatorCreate />} />
          <Route path="campaigns" element={<CreatorCampaigns />} />
          <Route path="content" element={<CreatorContent />} />
          <Route path="live" element={<CreatorLive />} />
          <Route path="challenges" element={<CreatorChallenges />} />
          <Route path="analytics" element={<CreatorAnalytics />} />
          <Route path="profile" element={<CreatorProfile />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Business Routes */}
        <Route path="/business" element={<BusinessLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<BusinessDashboard />} />
          <Route path="create" element={<BusinessCreate />} />
          <Route path="campaigns" element={<BusinessCampaigns />} />
          <Route path="analytics" element={<BusinessAnalytics />} />
          <Route path="audience" element={<BusinessAudience />} />
          <Route path="settings" element={<BusinessSettings />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="campaigns" element={<AdminCampaigns />} />
          <Route path="rewards" element={<AdminRewards />} />
          <Route path="withdrawals" element={<AdminWithdrawals />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

