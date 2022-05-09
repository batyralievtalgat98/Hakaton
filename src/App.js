import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer/Footer';

import Navbar from './components/navbar/Navbar';
import CrudContextProvider from './contexts/CrudContextProvider';

import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <CrudContextProvider>
      <Navbar/>
      <MainRoutes />
      <Footer />
    </CrudContextProvider>
  );
}

export default App;

