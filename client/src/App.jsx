import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;