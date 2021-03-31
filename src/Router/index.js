import Login from "../Component/Header/Login"
import Homescreen from "../Pages/Home";
import Detail from "../Component/Detail"
import Ticket from "../Component/Ticket";

const homeRouter = [
  
    {
        exact: true,
        path: "/",
        component: Homescreen,
    },
    {
        exact: false,
        path: "/detail/:courseId",
        component: Detail,
    },
    {
        exact: false,
        path: "/login" ,
        component : Login,
    },
    {
        exact: false,
        path: "/ticket/:courseId",
        component: Ticket,
    }
];
export {homeRouter};