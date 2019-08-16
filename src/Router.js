import Login from './components/Login/Login';
import Home from './components/HomePage/HomePage';
import Table1 from './components/Table1';
import Table2 from './components/Table2';

const routes = [
    {
        path: '/',
        redirect: '/Home',
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Table1',
        name: 'Table1',
        component: Table1,
    },
    {
        path: '/Table2',
        name: 'Table2',
        component: Table2,
    },
];
export default routes;
