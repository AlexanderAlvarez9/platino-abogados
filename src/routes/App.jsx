import React from 'react';
import '../assets/styles/containers/App.scss';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Containers from '../components/Containers/Containers';
import Layout from '../components/Layout';
import Lawyer from '../components/Lawyer/Lawyer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Containers>
          <Switch>
            <Route exact path='/' component={Lawyer} />
          </Switch>
        </Containers>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
