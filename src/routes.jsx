import { MainPage } from "./pages/mainPage";
import { TallerPage } from "./pages/tallerPage";

const routes = [
    { path: "/", element: <MainPage /> },
{ path: "/tallerPage/:courseName", element: <TallerPage /> }
];
  
export default routes