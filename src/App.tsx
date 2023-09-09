import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './modules/shared/components/Navbar';

import { AddMetric } from './pages/AddMetric';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <Container className="mb-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-metric" element={<AddMetric />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
