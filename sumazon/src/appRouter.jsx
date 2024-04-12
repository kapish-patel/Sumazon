
import {createBrowserRouter} from 'react-router-dom';
import Layout from './layout';
import Home from './pages/NavPages/Home';
import New from './pages/NavPages/New';
import Mens from './pages/NavPages/Mens';
import Women from './pages/NavPages/Women';
import Bestseller from './pages/NavPages/Bestseller';
import More from './pages/NavPages/More';
import NotFound from './components/common/NotFound';
import Promotion from './components/common/promotions';
import CompanyPage from './components/common/CompanyPage';
import HelpPage from './components/common/HelpPage';

// nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/new',
        element: <New />
      },
      {
        path: '/mens',
        element: <Mens />
      },
      {
        path: '/women',
        element: <Women />
      },
      {
        path: '/bestseller',
        element: <Bestseller />
      },
      {
        path: '/more',
        element: <More />
      },
      {
        path: '/promotions',
        element: <Promotion />
      },
      {
        path: '/aboutus',
        element: <CompanyPage />
      },
      {
        path: '/help',
        element: <HelpPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default AppRouter;
