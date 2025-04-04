import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AssetManagement from './pages/AssetManagement';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/assets" component={AssetManagement} />
        <Route path="/" exact component={() => <div>Home Page</div>} />
      </Switch>
    </Router>
  );
}

export default App;