import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage} from '../pages';
import {Provider} from '../swapi-context';
import SwapiService from '../../services/swapi-service';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './app.css';

const swapi = new SwapiService()

const App = (props) => {
  return (
    <div>
      <Provider value={swapi}>
        <Router>
          <Header />
          <RandomPlanet />
          <Switch>
            <Route path='/' exact={true} render={() => <h1>Welcome</h1>} />

            <Route path='/people/:id?' render={
              ({location, match, history}) => {
                const id = match.params.id ? match.params.id : 1;
                return <PeoplePage selectedItem={id} />
              }
            } />

            <Route path='/planets/' render={() => <PlanetPage />} />
            <Route render={() => <h1>404 page not found </h1>} />
          </Switch >
        </Router>
      </Provider>
    </div>
  );
};


export default App;
