import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Posts from '../pages/Posts'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/postagens' component={Posts} />
    </Switch>
  )
}

export default Routes
