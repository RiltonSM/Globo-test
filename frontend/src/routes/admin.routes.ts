import { RiDashboard3Line, RiUserFill } from 'react-icons/ri';

import Dashboard from '../views/dashboard';
import Users from '../views/users';

const adminRoutes = [
    {
        path: '/dashboard',
        component: Dashboard,
        icon: RiDashboard3Line,
        text: "Dashboard"
    },

    {
        path: '/users',
        component: Users,
        icon: RiUserFill,
        text: "Usuários"
    }
];

export default adminRoutes;