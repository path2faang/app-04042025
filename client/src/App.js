import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HelpSupportPage from './pages/HelpSupportPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/help-support" component={HelpSupportPage} />
      </Switch>
    </Router>
  );
}

export default App;