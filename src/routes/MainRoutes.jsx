import AdminPages from "../pages/AdminPages";
import EditProductPage from "../pages/EditProductPage";
import { Route, Routes } from 'react-router-dom';
import ProductList from "../components/crud/ProductList";
import HomePage from "../pages/HomePage";


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/adminPage',
      element: <AdminPages/>,
      id: 1,
    },{
      link: '/edit/:id',
      element: <EditProductPage />,
      id: 2,
    },
    {
      link: '/products',
      element: <ProductList />,
      id: 3,
    },
    {
      link: '/',
      element: <HomePage />,
      id: 3,
    }
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;