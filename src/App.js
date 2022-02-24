import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// importing components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      {/* Out of the switch will be displayed at all times */}
      <Header/>
      <Switch>
        <Route exact path = "/" component ={HomePage}/>
        <Route exact path = "/shop" component ={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
