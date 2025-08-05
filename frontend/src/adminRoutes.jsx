import DashboardComponent from './DashboardComponent';

const adminRoutes = [
    // Example route object:
    {
      path: '/admin/dashboard',
      component: DashboardComponent,
      exact: true,
      protected: true,
      name: 'Dashboard'
    }
];

export default adminRoutes;