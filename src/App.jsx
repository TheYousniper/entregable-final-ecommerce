import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductInfo from './pages/ProductInfo';
import { getAllProducts } from './store/slices/products.slice';
import Header from './components/shared/Header';
import Cart from './pages/Cart';
import Purchases from './pages/Purchases';
import ProtectedRoutes from './components/shared/ProtectedRoutes';
import Footer from './components/shared/Footer';
import SignUp from './pages/SignUp';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    
  }, []);

  //Creando Usuario
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api.academlo.tech/api/v1/users';

  //   const data = {
  //     firstName: 'John',
  //     lastName: 'Lanza',
  //     email: 'johnlanza54@gmail.com',
  //     password: 'johalama1979',
  //     phone: '+919063494',
  //     role: 'admin'
  //   }
  //   axios.post(URL, data)
  //   .then(res=> console.log(res))
  //   .catch(err=> console.log(err))
  // }, []);

  //aca termina creando el usuario

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        <Route element={<ProtectedRoutes/>}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>

        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
