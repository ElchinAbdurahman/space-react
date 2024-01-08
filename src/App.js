import './App.css';
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About/About"
import Structure from "./pages/About/Structure"
import BroadcastingBoard from "./pages/About/BroadcastingBoard"
import Movies from "./pages/Movies"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="structure" element={<Structure />} />
      <Route path="broadcasting-board" element={<BroadcastingBoard />} />
      <Route path="movies" element={<Movies />} />

    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
