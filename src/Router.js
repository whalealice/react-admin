import Login from './components/Login';
import Home from './components/Home';
import Table2 from './components/Table2';

const routes = [
    {
        path: "/Home",
        name: "Home",
        component: Home,
    }, 
    {
        path: "/Table2",
        name: "Table2",
        component: Table2,
    },

    {
        path: "/",
        name: "Login",
        component: Login,
    }
];
export default routes;
