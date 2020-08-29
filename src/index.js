import React from 'react';
import ReactDOM from 'react-dom';
import Testando from './components/Basic/Testando';
import UseStateExample from './components/Fundamentals/UseStateExample';
import UseRefExample from './components/Fundamentals/UseRefExample';
import ParamsExample from './components/Fundamentals/ParamsExample';
import LinkExample from './components/Fundamentals/LinkExample';
import StylingExample from './components/Fundamentals/Styling';
import FormikHandler from './components/Fundamentals/Formik';
import Chakra from './components/Fundamentals/Chakra';
import UseEffectExample from './components/Fundamentals/UseEffectExample';
import AxiosExample from './components/Fundamentals/AxiosExample';
import MemoExample from './components/Fundamentals/MemoExample';
import MountingExample from './components/Fundamentals/MountingExample';
import { persistor, store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Testando exact path="/" />
          <Route path="/basic" component={Testando} />
          {/* <ParamsExample path="/fundamentals/params/:id" /> */}
          <Route path="/fundamentals/params/:id" component={ParamsExample}/>
          <UseStateExample path="/fundamentals/use-state" />
          <UseEffectExample path="/fundamentals/use-effect" />
          <UseRefExample path="/fundamentals/use-ref" />
          <LinkExample path="/fundamentals/link" />
          <StylingExample path="/fundamentals/styling" />
          <Route path="/fundamentals/formik/:formikType" component={FormikHandler} />
          <Chakra path="/fundamentals/chakra" />
          <AxiosExample path="/fundamentals/axios" />
          <MemoExample path="/fundamentals/memo" />
          <MountingExample path="/fundamentals/mounting" />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
