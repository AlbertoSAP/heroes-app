import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Heroes from "../component/Heroes";
import HeroeDetails from "../component/HeroeDetails";
import NavBar from "../component/NavBar";
import HeroesProvider from "../Context/HeroesProvider";

const Router = () => {
  return (
    <BrowserRouter>
    <HeroesProvider>
      <NavBar />
      <div className="mx-3 mt-5">
        <Routes>
          <Route path="/" element={<Heroes />} />
          <Route path="/heroe" element={<Heroes />} />
          <Route path="heroe/:id" element={<HeroeDetails />} />
        </Routes>
      </div>
      </HeroesProvider>
    </BrowserRouter>
  );
};

// const Router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Heroes/>
//     },
//     {
//       path:"/heroe",
//        element:<Heroes/>
//     },
//     {
//         path:"heroe/:id",
//          element:<HeroeDetails/>
//     }
//   ])

export default Router;
