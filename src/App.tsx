import './App.css'
import Layout from './components/Layout'
import gsap from "gsap";
import { Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/:category_name' element={<ProductsList />}>
        <Route path=':sub_category' element={<ProductsList />} />
      </Route>
      </Routes>
    </>
  )
}

export default App
