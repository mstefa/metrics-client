import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './modules/shared/components/Navbar';
import { ItemsContextProvider } from './modules/items/context/ItemsContext';
import { CartPage } from './pages/CartPage';
import { FormPage } from './pages/FormPage';

function App() {
  return (
    <Container className="mb-4">
      <Navbar />
      <ItemsContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ItemsContextProvider>
    </Container>
  );
}

export default App;
