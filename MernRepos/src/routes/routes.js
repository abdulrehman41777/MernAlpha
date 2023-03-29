import Dashboard from "../dashboard/Dashboard";
import Home from "../pages/Home/Home";
import List from "../dashboard/DashboardPages/List"
import AddUser from "../dashboard/DashboardPages/AddUser";
import DeleteCar from "../dashboard/DashboardPages/DeleteCar";
import UpdateUser from "../dashboard/DashboardPages/Updatecar";
import Addcat from "../dashboard/DashboardPages/categories/Addcat";
import Deletecat from "../dashboard/DashboardPages/categories/Deletecat";
import ListCat from "../dashboard/DashboardPages/categories/ListCat";
import Signup from "../pages/Home/Auth/Signup";
import Login from "../pages/Home/Auth/Login";



const routes = [

    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/signup',
        element: <Signup />
    },
   
    {
        path:'*',
        element:  <Home/>
    },
]



const AuthRoutes = [

    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/dashboard',
        element: <Dashboard />
    },
    {
        path:'/dashboard/all-car',
        element: <List />
    },
    {
        path:'/dashboard/addcar',
        element: <AddUser />
    },
    {
        path:'/dashboard/updatecar',
        element: <UpdateUser/>
    },
    {
        path:'/dashboard/deletecar',
        element: <DeleteCar />
    },
    {
        path:'/dashboard/category/addcat',
        element:  <Addcat/>
    },
    {
        path:'/dashboard/category/deletecat',
        element:  <Deletecat />
    },
    {
        path:'/dashboard/category/listcat',
        element:  <ListCat/>
    },
    {
        path:'*',
        element:  <Home/>
    },
]


export  {routes, AuthRoutes}; 