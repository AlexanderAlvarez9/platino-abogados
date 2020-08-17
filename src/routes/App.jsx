import React from 'react';
import '../assets/styles/containers/App.scss';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/' component={Lawyer} />
            <Route exact path='/lawyer' component={Lawyer} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/aboutus' component={AboutUs} />
          </Switch>
        </Containers>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
