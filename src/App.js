import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar/Navbar';
import CrudContextProvider from './contexts/CrudContextProvider';

import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <CrudContextProvider>
      <Navbar/>
    <MainRoutes />

    </CrudContextProvider>
  );
}

export default App;

