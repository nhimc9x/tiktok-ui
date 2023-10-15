import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
//Layout
import { HeaderOnly } from '~/Componets/Layout';

// public routes
export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
        layout: null,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

// private routes
export const privateRoutes = [];
