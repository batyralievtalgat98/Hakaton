import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer/Footer';

import Navbar from './components/navbar/Navbar';
import CartContextProvider from './contexts/CartContextProvider';
import CrudContextProvider from './contexts/CrudContextProvider';

import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <CrudContextProvider>
      <CartContextProvider>
      <Navbar/>
      <MainRoutes />
      <Footer />
      </CartContextProvider>
    </CrudContextProvider>
  );
}

export default App;

