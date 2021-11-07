import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Posts from '../pages/Posts'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Dashboard} />
      <Route path='/posts' component={Posts} />
    </Switch>
  )
}

export default Routes
