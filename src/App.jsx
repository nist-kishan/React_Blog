import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import HeaderUI from './UI/HeaderUI';
import FooterUI from './UI/FooterUI';
import About from './pages/About';
import Category from './pages/Category';
import Contact from './pages/Contact';
import { CreateBlog } from './pages/CreateBlog';
import ReadBlog from './pages/ReadBlog';
function App() {
  return (
    <>
      <Router>
        <HeaderUI />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/readBlog" element={<ReadBlog />} />
        </Routes>
        <FooterUI />
      </Router>
    </>
  )
}

export default App
