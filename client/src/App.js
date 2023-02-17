import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateForm from './components/CreateForm';
import List from './components/List';
import UpdateForm from './components/UpdateForm';
import ShowOne from './components/ShowOne';
import { useState } from 'react';
function App() {
  const [products, setProducts] = useState([])
  return (
    <>
      <BrowserRouter>
        <Link to="/product/new">create form</Link>
        <Routes>
          <Route exact path='/product/new'  element={<CreateForm/>}/>{/* you get from react router https://login.codingdojo.com/m/146/6952/80179*/}
          <Route exact path='/' element={<List products={products} setProducts={setProducts}/>}/>{/* you get from react router https://login.codingdojo.com/m/146/6952/80179*/}
          <Route exact path='/product/:id/update' element={<UpdateForm/>}/>
          <Route exact path='/product/:id' element={<ShowOne products={products} setProducts={setProducts}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
