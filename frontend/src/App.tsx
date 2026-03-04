import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ModuleAPage from './pages/ModuleA/Page';
import ModuleBPage from './pages/ModuleB/Page';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/moduleA" component={ModuleAPage} />
            <Route path="/moduleB" component={ModuleBPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
