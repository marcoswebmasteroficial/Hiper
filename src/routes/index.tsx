import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import Youtube from '../pages/Youtube'
const Routes: React.FC = () => (
  <Switch>
    <Route path="/home"  component={Dashboard} />
    <Route path="/youtube" component={Youtube} />
    <Route path="/settings" component={Settings} />
  </Switch>
)

export default Routes
