import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
//import SignUp from './components/SignUp';




const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />

      {/* <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          </Routes>
          </div>
          </BrowserRouter> */}
    </main>
  )
}

export default Sentry.withProfiler(App);
