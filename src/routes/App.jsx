import React from 'react';
import '../assets/styles/containers/App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Containers from '../components/Containers/Containers';
import Layout from '../components/Layout';
import Lawyer from '../components/Lawyer/Lawyer';
import Contact from '../components/Contact/Contact';
import Services from '../components/Services/Services';
import AboutUs from '../components/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Containers>
          <Routes>
            <Route path='/' element={<Lawyer />} />
            <Route path='/lawyer' element={<Lawyer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
        </Containers>
      </Layout>
    </BrowserRouter>
  );
}

export default App;