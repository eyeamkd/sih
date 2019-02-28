// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart"; 
import TableChart from "@material-ui/icons/TableChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive"; 
import Feedback from "@material-ui/icons/Feedback";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx"; 
import LoanBucket from "views/LoanBuckets/LoanBucket.jsx"
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";
import DefaultersList from "./views/TableList/DefaultersList"; 
import ExtensionRequests from "./views/TableList/ExtensionRequests";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/defaulters",
    name: "Defaulters List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DefaultersList,
    layout: "/admin"
  }, 
  {
    path: "/table",
    name: "Users List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }, 
  { 
    path:"/loanbuckets",
    name:"Loan Buckets",
    icon: TableChart, 
    component: LoanBucket,
    layout:"/admin"
  },
  {
    path: "/maps",
    name: "Location",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }, 
  {
    path: "/extensionrequests",
    name: "Extension Requests",
    icon: Feedback,
    component: ExtensionRequests,
    layout: "/admin"
  }
];

export default dashboardRoutes;
