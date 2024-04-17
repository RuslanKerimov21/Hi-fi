import { Home } from './pages/index.js';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components/index.js';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
