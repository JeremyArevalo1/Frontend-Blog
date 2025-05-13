import { MainPage } from "./pages/mainPage";
import { TallerPage } from "./pages/tallerPage";

const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/tallerPage", element: <TallerPage /> },
];
  
export default routes