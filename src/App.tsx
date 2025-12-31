
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import AuthLayout from './Shared/components/AuthLayout/AuthLayout'
import Login from './Modules/Authmodule/components/Login/Login'
import Notfound from './Shared/components/Notfound/Notfound'
import { RouterProvider } from 'react-router-dom';
import Register from './Modules/Authmodule/components/Register/Register'
import ForgetPass from './Shared/components/ForgetPass/ForgetPass'
import ResetPass from './Modules/Authmodule/components/ResetPass/ResetPass'
import ChangePass from './Modules/Authmodule/components/ChangePass/ChangePass'
import MasterLayout from './Shared/components/MasterLayout/MasterLayout'
import Home from './HomeModule/components/Home/Home'
import Cart from './CartModule/components/Cart/Cart'
import Order from './CartModule/components/Order/Order'


function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <AuthLayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgetpass', element: <ForgetPass /> },
        { path: 'resetpass', element: <ResetPass /> },
        {path:'changepass',element:<ChangePass/>}
      ]
    },
    {
      path: 'home', element: <MasterLayout />,
      errorElement: <Notfound />,
      children: [
        {index:true,element:<Home/>},
        {path:'cart',element:<Cart/>},
        {path:'order',element:<Order/>},
      ]
    }
  ])
  
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
