import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import HomeAbout from "./pages/dashboard/homeabout";
import EditHomeAbout from "./pages/dashboard/edithomeabout";
import AddHomeAbout from "./pages/dashboard/AddHomeAbout";

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home-about",
        element: <HomeAbout />,
      },
      {
        path: "/add-home-about",
        element: <AddHomeAbout />,
      },
      {
        path: "/edit-home-about/:id",
        element: <EditHomeAbout />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/tables",
        element: <Tables />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
];

export default routes;
