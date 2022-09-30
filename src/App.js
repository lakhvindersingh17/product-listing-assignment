import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home'
import './App.css';
import ProductPage,{loader as ProductLoader} from "./pages/PorductPage/ProductPage";


const router=createBrowserRouter([{

  path:'/',
  element:<Home/>,
},{
  path:'product/:productID',
  loader:ProductLoader,
  element:<ProductPage/>
}

])

function App() {
  return (
  <RouterProvider router={router}/>
    );
}

export default App;
