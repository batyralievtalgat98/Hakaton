import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer/Footer';

import Navbar from './components/navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import CrudContextProvider from './contexts/CrudContextProvider';

import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <AuthContextProvider>
    <CrudContextProvider>
      <Navbar/>
      <MainRoutes />
      <Footer />
    </CrudContextProvider>
    </AuthContextProvider>
  );
}

export default App;

