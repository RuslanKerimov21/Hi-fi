import { Home } from './pages/index.js';
import { Footer } from './components/index.js';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
