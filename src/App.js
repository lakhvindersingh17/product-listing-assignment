import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home'
import './App.css';
import ProductPage,{loader as ProductLoader} from "./pages/PorductPage/ProductPage";
import ErrorPage from "./pages/Error";


const router=createBrowserRouter([{

  path:'/',
  element:<Home/>,
  errorElement:<ErrorPage/>
},{
  path:'product/:productID',
  loader:ProductLoader,
  element:<ProductPage/>,
  errorElement:<ErrorPage/>
}

])

function App() {
  return (
  <RouterProvider router={router}/>
    );
}

export default App;
