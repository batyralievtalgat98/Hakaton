import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/crud/ProductList';
import CrudContextProvider from './contexts/CrudContextProvider';
import AdminPages from './pages/AdminPages';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <CrudContextProvider>
      
    <MainRoutes />

    </CrudContextProvider>
  );
}

export default App;

