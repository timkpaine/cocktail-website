import React from 'react'
import { Route, HashRouter, Switch, Redirect} from 'react-router-dom'
import Main from './components/Main'
import ScrollToTop from './components/ScrollTop'


export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route component={ () => <Redirect to="/" /> } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )