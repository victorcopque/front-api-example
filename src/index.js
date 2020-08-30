import React from 'react';
import ReactDOM from 'react-dom';
import FeedPage from './pages';
import { persistor, store } from './redux/config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import './index.css';

var mixpanel = require('mixpanel-browser');
mixpanel.init("06f4f68989aacda9b0419341b588e901");

var USER_ID = "12148";
mixpanel.identify(USER_ID);

var USER_SIGNUP_DATE = "2020-01-02T21:07:03Z";

mixpanel.people.set({
  "$email": "jsmith@example.com",
  "created_at": USER_SIGNUP_DATE,
  "id": USER_ID,
  "credits": 150
});

Sentry.init({
  dsn: "https://b004072bb919465b9fdfddb08e5a412b@o440994.ingest.sentry.io/5410734",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route path="/insta" component={FeedPage} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
