
import {createBrowserRouter} from 'react-router-dom';
import Layout from './layout';
import Home from './pages/NavPages/Home';
import Bestseller from './pages/NavPages/Bestseller';
import More from './pages/NavPages/More';
import NotFound from './components/common/NotFound';
import Promotion from './components/common/promotions';
import CompanyPage from './components/common/CompanyPage';
import HelpPage from './components/common/HelpPage';
import Clothing from './pages/NavPages/Clothing';
import Sports from './pages/NavPages/Sports';
import Electronics from './pages/NavPages/Electronics';
import LoginLayout from './pages/LoginRegister/loginlayout';
import PrivateRoute from './PrivateRoute';
import UserLogin from './components/Loginregister/Userlogin';
import UserRegister from './components/Loginregister/Userregister';
import UserProfile from './components/Userprofile/UserProfile';
import Cart from './pages/NavPages/Cart';

// nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: '/',
    children:[
      {
        path: '',
        element: <Layout />,
        children:[
          {
            path: '',
            element: <Home />
          },
          {
            path: 'clothing',
            element: <Clothing />
          },
          {
            path: 'sports',
            element: <Sports />
          },
          {
            path: 'electronics',
            element: <Electronics />
          },
          {
            path: 'bestseller',
            element: <Bestseller />
          },
          {
            path: 'more',
            element: <More />
          },
          {
            path: 'promotions',
            element: <Promotion />
          },
          {
            path: 'aboutus',
            element: <CompanyPage />
          },
          {
            path: 'help',
            element: <HelpPage />
          }, 
          {
            path: 'profile',
            element: <PrivateRoute element={UserProfile} redirect={'/login'}/>
          }
        ]
      },
      {
        path: '/login',
        element: <LoginLayout />,
        children:[
          {
            path: '',
            element: <UserLogin />
          },
        ]
      },
      {
        path: '/register',
        element: <LoginLayout />,
        children:[
          {
            path: '',
            element: <UserRegister />
          },
        ]
      },
      {
        path: '/cart',
        element: <PrivateRoute element={Layout} redirect={'/login'}/>,
        children:[
          {
            path: '',
            element: <Cart />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default AppRouter;
