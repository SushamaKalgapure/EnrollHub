import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import News from './pages/News';
import Event from './pages/Event';
import Meeting from './pages/Meeting';
import About from './pages/About';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* TopNav is always visible */}
        <TopNav />
        
        {/* Main content area that changes based on route */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Event />} />
            <Route path="/meetings" element={<Meeting />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Optional footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>© 2023 DYPSOMCA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;