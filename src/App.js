import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/header';
import ProductListing from './containers/productListing';
import ProductDetails from './containers/productDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route> 404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
