import React, { createContext, useReducer, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { initialState, reducer } from './tasks/task-tree/state-management';
import useFetch from './tasks/task-tree/hooks/useFetch';

import { buildSentence } from './tasks/task-one/dictionary';
import TheProvider from './tasks/task-two/provider';
import { getProcessingPage } from './tasks/task-four/getProcessingPageUtil';

import ProfilePage from './tasks/task-tree/components/ProfilePage/ProfilePage';
import ProfilerListingPage from './tasks/task-tree/components/ProfilerListingPage/ProfilerListingPage';

import './App.css';

function App() {
  const str = 'penpineapplepenapple';
  const dict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];

  console.log(buildSentence(str, dict));

  /**
   * 1) Print the city for lat/long 51.5074 and 0.1278 in console
   */
  TheProvider.findCity(51.5074, 0.1278);

  /**
   * 2) Print the weather for lat/long 51.5074 and 0.1278
   */
  TheProvider.getWeather(51.5074, 0.1278);

  /**
   * 3) Print the weather and currency for a given city (London)
   */
  TheProvider.getLocalCurrency('London');

  getProcessingPage([
    { state: 'processing' },
    { state: 'error' },
    { state: 'error', errorCode: 'NO_STOCK' },
    { state: 'error', errorCode: 'INCORRECT_DETAILS' },
    { state: 'error', errorCode: null },
    { state: 'success' },
  ]);

  const [state, dispatch] = useReducer(reducer, initialState);
  const cachedState = useMemo(() => [state, dispatch], [state]);
  useFetch(dispatch, 'http://localhost:5000/data');

  return (
    <StateContext.Provider value={cachedState}>
      <Router>
        <Switch>
          <Route path='/profile-page'>
            <ProfilePage />
          </Route>
          <Route path='/'>
            <ProfilerListingPage />
          </Route>
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}
export const StateContext = createContext(initialState);
export default App;
