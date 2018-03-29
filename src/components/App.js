import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import NotFoundPage from './404/NotFoundPage';
import Artists from './Artists/Artists';
import Albums from './Albums/Albums';
import Tracks from './Tracks/Tracks';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Artists} />
          <Route path="/albums/:id" component={Albums} />
          <Route path="/tracks/:id" component={Tracks} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="404" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
